"use client";

import Image from "next/image";
import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { NAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <body className="w-full h-full text-white bg-black font-NotoSansKR">
      <div className="relative h-screen tracking-tighter">
      <header className="fixed left-0 top-0 z-50 flex justify-between w-full px-[0.875rem] h-[5.625rem]">
            <div className="flex items-center pt-6">
                <button className="p-[0.875rem]">
                    <Image 
                    src="/img/icon/icon-back-btn.svg"
                    width={140}
                    height={140}
                    alt="뒤로가기"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-fit"
                   />
                </button>
            </div>
        </header>
      <main className="relative h-full px-[1.875rem] flex flex-col items-center justify-center">
        <div className="w-full mb-[2.1875rem] px-2.5">
        <span className="text-whColor-6 text-sm font-bold tracking-[-0.02rem]">App Name:)</span>
          <h1 className="pt-1.5 text-29 font-bold leading-10 tracking-[-0.17rem]">
            <span className="tracking-normal text-primary-1">AppName</span> 회원가입
          </h1>
        </div>

        <form action={dispatch} className="w-full pb-9">
          <fieldset>
          <div className="w-full mb-[0.8125rem]">
            <Input
              name="username"
              type="text"
              placeholder="닉네임"
              required
              errors={state?.fieldErrors.username}
              minLength={3}
              maxLength={NAME_MIN_LENGTH}
            />
          </div>

          <div className="w-full mb-[0.8125rem]">
            <Input
              name="email"
              type="email"
              placeholder="이메일"
              required
              errors={state?.fieldErrors.email}
            />
          </div>

          <div className="w-full mb-[0.8125rem]">
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              minLength={PASSWORD_MIN_LENGTH}
              required
              errors={state?.fieldErrors.password}
            />
          </div>

          <div className="w-full mb-[0.8125rem]">
            <Input
              name="confirm_password"
              type="password"
              placeholder="비밀번호 확인"
              required
              minLength={PASSWORD_MIN_LENGTH}
              errors={state?.fieldErrors.confirm_password}
            />
          </div>

          <div className="w-full mb-[0.8125rem]">
            <Button text="회원가입" />
          </div>
            </fieldset>
        </form>
      </main>


      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-50">
        <Image
          src="/img/login/login-bg01.svg"
          width={140}
          height={140}
          alt="로그인 배경 이미지1"
          objectFit="cover"
          className="absolute top-0 left-0 w-fit"
        />
        <Image
          src="/img/login/login-bg02.svg"
          alt="로그인 배경 이미지2"
          width={100}
          height={100}
          objectFit="cover"
          className="absolute top-0 right-0 w-fit"
        />
        <Image
          src="/img/login/login-bg03.svg"
          alt="로그인 배경 이미지3"
          width={140}
          height={140}
          objectFit="cover"
          className="absolute bottom-0 left-0 w-fit"
        />
        <Image
          src="/img/login/login-bg04.svg"
          alt="로그인 배경 이미지4"
          width={50}
          height={50}
          objectFit="cover"
          className="absolute bottom-[2.375rem] right-0 w-fit"
        />
       </div>
    </div>
  </body>  
  );
}