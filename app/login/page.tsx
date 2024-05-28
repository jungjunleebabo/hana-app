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
    <body className="w-full h-full text-white bg-black font-NotoSansKR">
      <div className="relative h-screen tracking-tighter">
        <main className="relative flex flex-col items-center justify-center w-full h-full px-[1.875rem]">
          <div className="w-full mb-[2.1875rem] px-2.5">
            <span className="text-whColor-6 text-sm font-bold tracking-[-0.02rem]">App Name:)</span>
            <h1 className="pt-1.5 text-29 font-bold leading-10 tracking-[-0.17rem]">
            <span className="text-primary-1">로그인</span>하고<br />
            특별한 경험을 해보세요
            </h1>
          </div>
        <form action={dispatch} className="w-full pb-3.5"> 
        <fieldset>
        <div className="w-full mb-[0.8125rem]">
        <FormInput
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          required
          errors={state?.fieldErrors.email}
        />
        </div>
        <div className="w-full mb-[1.1875rem]">
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        </div>
        <FormButton text="로그인" />
        </fieldset>
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
