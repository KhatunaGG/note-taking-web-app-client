"use client";

const ForgotPasswordForm = () => {
  return (
    <form className="w-full pt-6 flex flex-col gap-4">
      <button
        type="submit"
        // disabled={isSubmitting}
        className="w-full font-semibold text-base text-white py-[12.5px] rounded-lg bg-[#335CFF] hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
