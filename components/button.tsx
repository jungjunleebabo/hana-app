"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full h-[3.125rem] bg-primary-1 rounded-[3.125rem] text-white font-bold"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}