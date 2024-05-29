import Image from "next/image";
import FormInput from "@/components/input";

export default function Member2() {
  return (
    <body className="w-full h-full text-white bg-black font-NotoSansKR text-[0.8125rem]">
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
        <main className="relative pt-[5.625rem] pb-[8.125rem] pl-[1.6875rem] pr-[2.1875rem]">
          <div>
            <h3 className="title03-style">기본정보</h3>
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
                  <label className="input-label-style">비밀번호</label>
                  <button className="flex items-center gap-[0.3125rem]">
                    비밀번호 변경하기
                    <img
                      src="../img/icon/icon-arrow.svg"
                      alt="비밀번호 변경하기 바로가기"
                    />
                  </button>
                </div>
                <div className="flex items-center mb-2.5">
                  <label className="input-label-style">닉네임</label>
                  <FormInput
                    name="name"
                    type="text"
                    className="input-style"
                    value="Timothee:)"
                    readOnly
                  />
                </div>
                <div className="flex items-center mb-2.5">
                  <label className="input-label-style">연락처</label>
                  <FormInput
                    name="phone"
                    type="phone"
                    className="input-style"
                    value="Timothee:)"
                    readOnly
                  />
                </div>
                <div className="flex items-center mb-2.5">
                  <label className="input-label-style">이메일</label>
                  <FormInput
                    name="email"
                    type="email"
                    className="input-style"
                    value="Timothee:)"
                    readOnly
                  />
                </div>
                <div className="flex items-center mb-2.5">
                  <label className="input-label-style">성별</label>
                  <label className="radio-wrap-style">
                    <input
                      type="radio"
                      name="gender"
                      className="input-radio-style"
                      value="female"
                      checked
                    />
                    <span>여성</span>
                  </label>
                  <label className="radio-wrap-style">
                    <input
                      type="radio"
                      name="gender"
                      className="input-radio-style"
                      value="male"
                    />
                    <span>남성</span>
                  </label>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="mt-2.5">
            <h3 className="title03-style">수신동의 선택사항</h3>
            <form className="w-full pt-6">
              <fieldset className="flex flex-col">
                <div className="flex items-center mb-5">
                  <label className="checkbox-wrap-style">
                    <input
                      type="checkbox"
                      name="emailConsent"
                      className="input-checkbox-style"
                    />
                    <span>이메일 수신 동의(선택)</span>
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <label className="checkbox-wrap-style">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      className="input-checkbox-style"
                    />
                    <span>SMS 수신 동의(선택)</span>
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <label className="checkbox-wrap-style">
                    <input
                      type="checkbox"
                      name="thirdPartyConsent"
                      className="input-checkbox-style"
                    />
                    <span>맞춤형 서비스 제공을 위한 제3자 제공 동의(선택)</span>
                  </label>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="mt-2.5">
            <h3 className="title03-style">회원탈퇴</h3>
            <div className="pt-6">
              <button className="flex items-center gap-[0.3125rem]">
                회원탈퇴하기
                <img
                  src="../img/icon/icon-arrow.svg"
                  alt="회원탈퇴하기 바로가기"
                />
              </button>
              <p className="text-whColor-4 pt-[0.3125rem]">
                탈퇴 시 정보는 바로 삭제되며, 삭제 된 정보는 복구 불가능합니다.
              </p>
            </div>
          </div>
          <div className="bottom-button-style">
            <button className="submit-button-style">확인</button>
          </div>
        </main>
      </div>
    </body>
  );
}
