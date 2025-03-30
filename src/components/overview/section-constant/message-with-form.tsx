"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/send-email";
import { SuccessMessage } from "./success-message";
import useForm from "@/hooks/use-form";

export default function MessageWithForm() {
  const {
    formData,
    errors,
    handleChange,
    validateFormData,
    resetForm,
    setErrors,
  } = useForm();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 유효성 검사
    const validationErrors = validateFormData(formData);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    try {
      const form = new FormData(e.target as HTMLFormElement);
      // 이메일 전송
      await sendEmail(form); // formData 객체를 전달
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);

      // 폼 데이터 초기화
      resetForm();
    } catch (error) {
      // 오류 메시지 표시
      alert("이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Card className="relative flex-1 border-2 border-foreground/10">
      <CardContent className="mt-5">
        {/* 메세지 성공 컴포넌트 */}
        <SuccessMessage show={showSuccessMessage} />
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="성함을 입력해 주세요."
              />
              {errors.name && (
                <p className="px-1 text-xs text-red-400 dark:text-red-100">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="메일 주소를 입력해주세요."
              />
              {errors.email && (
                <p className="px-1 text-xs text-red-400 dark:text-red-100">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="내용을 입력해 주세요."
              />
              {errors.message && (
                <p className="px-1 text-xs text-red-400 dark:text-red-100">
                  {errors.message}
                </p>
              )}
            </div>
          </div>
          <CardFooter className="flex justify-end mt-10">
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
