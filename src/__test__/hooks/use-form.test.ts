import { renderHook, act } from "@testing-library/react";
import useForm from "@/hooks/use-form";

describe("useForm Hook", () => {
  test("validateFormData 함수가 에러 객체를 반환하지 않는 경우", () => {
    const { result } = renderHook(() => useForm());

    const errors = result.current.validateFormData({
      name: "John",
      email: "john@example.com",
      message: "Hello",
    });

    expect(errors).toBeNull();
  });

  test("handleChange 핸들러가 이메일 필드에서 입력을 처리하는지 확인", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "john@example.com" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.email).toBe("john@example.com");
  });

  test("setErrors 함수를 통해 오류 상태를 직접 설정할 수 있는지 확인", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setErrors({
        name: "이름을 입력해 주세요!",
        email: "이메일을 입력해 주세요!",
      });
    });

    expect(result.current.errors).toEqual({
      name: "이름을 입력해 주세요!",
      email: "이메일을 입력해 주세요!",
    });
  });

  test("validateFormData 함수가 특정 필드에 대해서만 에러를 반환하는지 확인", () => {
    const { result } = renderHook(() => useForm());

    const errors = result.current.validateFormData({
      name: "",
      email: "john@example.com",
      message: "Hello",
    });

    expect(errors).toEqual({
      name: "이름을 입력해 주세요!",
    });
  });

  test("resetForm 함수가 errors 상태를 올바르게 초기화하는지 확인", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setErrors({
        name: "이름을 입력해 주세요!",
        email: "이메일을 입력해 주세요!",
      });
      result.current.resetForm();
    });

    expect(result.current.errors).toEqual({});
  });
});
