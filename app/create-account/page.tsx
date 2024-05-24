"use client";

import Image from "next/image";
import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { NAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6 mt-[12rem] font-NotoSansKR">
    <div className="w-full mb-1 px-2.5">
      <span className="text-whColor-6 text-sm font-bold tracking-[-0.02rem]">App Name:)</span>
      <h1 className="pt-1.5 text-29 font-bold leading-10 tracking-[-0.17rem]">
          <span className="tracking-normal text-primary-1">AppName</span> 회원가입
      </h1>
      </div>
      <form action={dispatch} className="flex flex-col gap-1 z-10">
        <Input
          name="username"
          type="text"
          placeholder="닉네임"
          required
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={NAME_MIN_LENGTH}
        />
        <Input
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          minLength={4}
          required
          errors={state?.fieldErrors.password}
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="비밀번호 확인"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.confirm_password}
        />     
        <Button text="회원가입" />
      </form>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/img/login-bg01.svg"
          width={140}
          height={140}
          alt="로그인 배경 이미지1"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
        <Image
          src="/img/login-bg02.svg"
          alt="로그인 배경 이미지2"
          width={100}
          height={100}
          objectFit="cover"
          className="absolute top-0 right-0 z-0"
        />
        <Image
          src="/img/login-bg03.svg"
          alt="로그인 배경 이미지3"
          width={140}
          height={140}
          objectFit="cover"
          className="absolute bottom-0 left-0 z-0"
        />
        <Image
          src="/img/login-bg04.svg"
          alt="로그인 배경 이미지4"
          width={50}
          height={50}
          objectFit="cover"
          className="absolute bottom-[2.375rem] right-0 z-0"
        />
      </div>
    </div>
  );
}