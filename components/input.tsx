import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  console.log(rest);
  return (
    <div className="flex flex-col">
      <input
        name={name}
        className="input-round-style"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium px-[1.5625rem] mb-2">
          {error}
        </span>
      ))}
    </div>
  );
}