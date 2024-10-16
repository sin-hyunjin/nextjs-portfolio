import { useState, ChangeEvent } from "react";
import { FormData, Errors } from "@/types/card-type";

/** useForm : 폼 상태 관리와 유효성 검사를 간편하게 처리하기 위해 설계
 * 1. 상태 관리: useState를 사용하여 폼 데이터를 관리 (formData, errors)
 * 2. 입력 필드 값 변경 핸들러: handleChange는 입력 필드 값이 변경될 때 이를 처리
 * 3. 유효성 검사: validateFormData는 간단한 유효성 검사 로직을
 * 4. 폼 초기화: resetForm을 통해 폼의 초기 상태로 복구


 */
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
