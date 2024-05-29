
import Image from "next/image";
import FormInput from "@/components/input";

export default async function Member1() {

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
       <h3 className="title03-style">회원정보를 안전하게 보호하기 위해 비밀번호를 한번 더 입력해주세요.</h3>
           <form className="w-full pt-5">
               <fieldset className="flex flex-col">
                   <div className="flex items-center mb-2.5">
                       <label className="input-label-style">아이디</label>
                       <FormInput
                        name="id"
                        type="text" 
                        className="input-style" 
                        value="Timothee:)" 
                        readOnly
                        />

                   </div>
                   <div className="flex items-center mb-2.5">
                     <FormInput 
                      name="password"
                     type="password" 
                     placeholder="비밀번호를 입력하세요" 
                     className="input-style"
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