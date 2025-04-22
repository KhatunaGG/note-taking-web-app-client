import { create } from "zustand";
import { SignInType } from "../component/__organism/signInForm/SignInForm";
import { axiosInstance } from "../libs/axiosInstance";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ErrorResponse } from "../interface";
import { setCookie } from "cookies-next";

const handleApiError = (error: AxiosError<ErrorResponse>): string => {
  if (axios.isAxiosError(error)) {
    const errorMessage = error.response?.data.message || "An error occurred";
    toast.error(errorMessage);
    return errorMessage;
  }
  const unexpectedError = "An unexpected error occurred";
  toast.error(unexpectedError);
  return unexpectedError;
};

export interface ISignInStore {
  isLoading: boolean;
  axiosError: string;
  signInEmail: string;
  signInPassword: string;
  success: boolean;
  accessToken: string | null;

  setAccessToken: (token: string) => void;
  setSuccess: (success: boolean) => void;
  setFormData: (signInEmail: string, signInPassword: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setAxiosError: (axiosError: string) => void;
  signIn: (formData: SignInType) => void;
}

export const useSignInStore = create<ISignInStore>((set) => ({
  isLoading: false,
  axiosError: "",
  signInEmail: "",
  signInPassword: "",
  success: false,
  accessToken: null,

  setAccessToken: (token: string) => set({ accessToken: token }),
  setSuccess: (success) => set({ success }),
  setFormData: (signInEmail, signInPassword) =>
    set({ signInEmail, signInPassword }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setAxiosError: (axiosError) => set({ axiosError }),

  signIn: async (formData) => {
    const { signInEmail, signInPassword } = formData;
    try {
      set({ isLoading: true, axiosError: "" });
      const res = await axiosInstance.post(`/auth/sign-in`, {
        email: signInEmail,
        password: signInPassword,
      });
      if (res.status >= 200 && res.status <= 204) {
        const { accessToken } = res.data;
        set({ accessToken });
        set({ success: true });
        setCookie("accessToken", res.data.accessToken, { maxAge: 60 * 60 });
        set({ signInEmail: "", signInPassword: "" });
      }
    } catch (e) {
      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage });
    } finally {
      set({ isLoading: false, axiosError: "" });
    }
  },
}));
