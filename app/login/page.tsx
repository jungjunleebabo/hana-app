"use client";

import Image from "next/image";
import Link from "next/link";
import FormButton from "@/components/button";
import FormInput from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { logIn } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, dispatch] = useFormState(logIn, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6 mt-[12rem] font-NotoSansKR">
      <div className="w-full mb-[2.1875rem] px-2.5">
        <span className="text-whColor-6 text-sm font-bold tracking-[-0.02rem]">App Name:)</span>
        <h1 className="pt-1.5 text-29 font-bold leading-10 tracking-[-0.17rem]">
          <span className="text-primary-1">로그인</span>하고<br />
          특별한 경험을 해보세요
        </h1>
      </div>
      <main className="flex flex-col items-center justify-center w-full h-full top-0">
      <form action={dispatch} className="w-full px-2.5 mt-[-2.1875rem] mb-4">
        <FormInput
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormButton text="로그인" />
      </form>
      <div className="w-full mb-4 flex items-center justify-center" >
        <span className="text-whColor-6 text-sm font-bold tracking-[-0.02rem]">계정이 없으신가요?</span>
        <Link href="/create-account">
        <span className="text-primary-1 text-sm font-bold tracking-[-0.02rem] px-2.5">가입하기</span>
        </Link>
      </div> 
      <div className="w-full h-px bg-neutral-500 mb-4"/>
      <SocialLogin />
      </main>
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
