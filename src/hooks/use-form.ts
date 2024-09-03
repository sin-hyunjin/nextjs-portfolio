import { useState, ChangeEvent } from "react";
import { FormData, Errors } from "@/types/card-type";

const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  // 입력 필드 값 변경 핸들러
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 해당 필드의 에러 메시지 제거
    if (errors[name as keyof typeof errors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  // 유효성 검사 함수
  const validateFormData = (data: FormData): Errors | null => {
    const validationErrors: Errors = {};

    if (!data.name) validationErrors.name = "이름을 입력해 주세요!";
    if (!data.email) validationErrors.email = "이메일을 입력해 주세요!";
    if (!data.message) validationErrors.message = "메시지를 입력해 주세요!";

    return Object.keys(validationErrors).length > 0 ? validationErrors : null;
  };

  // 폼 초기화 함수
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    validateFormData,
    resetForm,
    setErrors,
  };
};

export default useForm;
