
import Image from "next/image";

export default async function MyPage() {

  return (
    <body className="text-white bg-black font-NotoSansKR">
    <div className="w-full h-full overflow-hidden tracking-tighter">
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
                <h2 className="text-[1.125rem] font-bold">내 관심사</h2>
            </div>
            <div>
                <img src="../img/icon/icon-menu.svg" alt="메뉴" />
                <p className="text-xs font-medium leading-5">menu</p>
            </div>
        </header>
        <main className="list-page-style">
            <div className="relative">
                <input type="search" className="input-search-style" />
                <button className="button-search-style">
                   <img src="../img/icon/icon-search-btn.svg" alt="검색하기" />
                </button>
            </div>
            <div className="list-align-style">
                <a href="#" className="items-center">
                    기본정렬
                    <Image 
                    src="/img/icon/icon-list-align.svg"
                    width={20}
                    height={20}
                    alt="리스트정렬"
                    objectFit="cover"
                    className="inline-block pl-1"
                   />
                </a>
                <a href="#" className="items-center">편집취소</a>
            </div>
            <div>
                <div className="interest-list-group-style">
                    <div>
                        <ul>
                            <li>
                                <a href="#" className="float-left">
                                    <p className="interest-list-thumbnail-style bg-gradient-to-b from-[#12C2E9] via-[#C471ED] to-[#F7797D]">#여행</p>
                                    <h4 className="interest-list-title-style">3472회<span>검색</span></h4>
                                    <p className="">즐겨찾기/채널리스트 등록</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
    
  );
}