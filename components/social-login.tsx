import Link from "next/link";
import Image from 'next/image';
import { signIn } from 'next-auth/react';
export default function SocialLogin() {

  const handleLogin = async (provider:string) => {
    // 해당 프로바이더로 로그인을 시작하고 callback URL로 리디렉션
    await signIn(provider, { callbackUrl: '/index-page' });
  };


  return (
    <>
      <div className="flex items-center justify-center gap-5 mt-[2.0625rem]">
      <button onClick={() => handleLogin('google')}>
          <Image 
          src="/img/icon/icon-google.svg" 
          alt="Description of the image" 
          width={300} 
          height={300} 
          className="w-full h-[3.125rem] rounded-[3.125rem]"
          />
        </button>

        <button onClick={() => handleLogin('naver')}>
          <Image 
          src="/img/icon/icon-naver.svg" 
          alt="Description of the image" 
          width={300} 
          height={300} 
          className="w-full h-[3.125rem] rounded-[3.125rem]"
          />
        </button>

        <button onClick={() => handleLogin('kakao')}>
          <Image 
          src="/img/icon/icon-kakao.svg" 
          alt="Description of the image" 
          width={300} 
          height={300} 
          className="w-full h-[3.125rem] rounded-[3.125rem]"
          />
        </button>

        <Link href="/sms">
          <Image 
          src="/img/icon/icon-mail.svg" 
          alt="Description of the image" 
          width={300} 
          height={300} 
          className="w-full h-[3.125rem] rounded-[3.125rem]"
          />
        </Link>
      </div>
    </>
  );
}