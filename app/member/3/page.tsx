import Image from "next/image";
import Input from "@/components/input";
import { NAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function Member3() {
  return (
    <body className="w-full h-full text-white bg-black font-NotoSansKR">
   <div className="relative tracking-tighter">
    <header className="header-style">
        <div className="flex items-center pb-1.5">
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
            <h2 className="text-[1.125rem] font-bold">개인정보수정</h2>
        </div>
    </header>
    <main className="relative pt-[5.625rem] pb-[8.125rem] px-[1.5625rem]">
      <h3 className="title03-style">변경 할 비밀번호를 입력해주세요</h3>
          <form className="w-full pt-5">
              <fieldset className="flex flex-col">
                <div className="flex items-center mb-2.5">
                <Input
              name="password"
              type="password"
              placeholder="새비밀번호"
              minLength={PASSWORD_MIN_LENGTH}
              required
             
            />
                </div> 
                <div className="flex items-center mb-2.5">
                <Input
              name="confirm_password"
              type="password"
              placeholder="비밀번호 확인"
              required
              minLength={PASSWORD_MIN_LENGTH}
         
            />
                </div> 
              </fieldset>
          </form>
          <div className="bottom-button-style">
              <button className="submit-button-style">
                  확인
              </button>
          </div>
    </main>
  </div>
</body>
  );
}
