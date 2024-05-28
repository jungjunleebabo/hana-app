import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from 'next/image';

export default function SocialLogin() {
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        
        <Link href="/google">
          <Image 
          src="/img/icon-google.svg" 
          alt="Description of the image" 
          width={300} 
          height={300} 
          className="w-full h-[3.125rem] rounded-[3.125rem]"
          />
        </Link>

        <Link href="/naver">
          <Image 
          src="/img/icon-naver.svg" 
          alt="Description of the image" 
          width={300} 
          height={300} 
          className="w-full h-[3.125rem] rounded-[3.125rem]"
          />
        </Link>

        <Link href="/kakao">
          <Image 
          src="/img/icon-kakao.svg" 
          alt="Description of the image" 
          width={300} 
          height={300} 
          className="w-full h-[3.125rem] rounded-[3.125rem]"
          />
        </Link>

        <Link href="/sms">
          <Image 
          src="/img/icon-mail.svg" 
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