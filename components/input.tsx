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
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="mb-3 w-full h-[3.125rem] px-[1.5625rem] rounded-[3.125rem] bg-whColor-10 placeholder-whColor-6 text-15 border-[0.0625rem] border-transparent focus:outline-0 focus:border-[0.0625rem] focus:border-primary-1"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}