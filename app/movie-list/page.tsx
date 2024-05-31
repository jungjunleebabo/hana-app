import Image from "next/image";
import Link from "next/link";

export default async function MovieList() {
    
    // 생성할 요소의 개수
    const itemCount: number = 8;

  return (
    <body className="text-white bg-black font-NotoSansKR">
        <div className="w-full h-full overflow-hidden tracking-tighter">
        
        <header className="header-style">
            <div className="flex items-center pb-1.5">
                <Link href="/menu">
                <button className="p-[0.875rem]">
                <Image
                        src="/img/icon/icon-back-btn.svg"
                        width={11}
                        height={11}
                        alt="뒤로가기"
                        objectFit="cover"
                />   
                </button>
                </Link>
                <h2 className="text-[1.125rem] font-bold">최근 본 영상</h2>
            </div>
            <div>
                <Image
                    src="/img/icon/icon-menu.svg"
                    width={25}
                    height={25}
                    alt="메뉴"
                    objectFit="cover"
                />
            <p className="text-xs font-medium leading-5">menu</p>
            </div>
        </header>
        <main className="list-page-style">
            <div className="relative">
                <input type="search" className="input-search-style" />
                <button className="button-search-style">
                <Image
                        src="/img/icon/icon-search-btn.svg"
                        width={25}
                        height={25}
                        alt="검색하기"
                        objectFit="cover"
                    />
                </button>
            </div>
            <div className="list-align-style">
                <div className="items-center">
                    기본정렬
                    <div className="inline-block pl-2">
                    <Image
                        src="/img/icon/icon-list-align.svg"
                        width={12}
                        height={12}
                        alt="리스트정렬"
                        objectFit="cover"
                    />
                    </div>
                </div>
                <div className="items-center">편집취소</div>
            </div>
            <div>

            {Array.from({ length: itemCount }, (_, index) => (
                <div className="movie-list-group-style" key={index}>
                <div>
                    <ul>
                    <li>
                        <Link href="/최근본영상더보기" className="float-left"> 
                        <div className="movie-list-thumbnail-style">
                            {/* 이미지 컴포넌트에서 이미지 경로를 동적으로 설정 */}
                            <Image
                            src={`/img/thumbnail/movielist-thumbnail${index + 1}.svg`}
                            //src="/img/thumbnail/movielist-thumbnail02.svg"
                            alt={`Movie Thumbnail ${index + 1}`}
                            width={150}
                            height={150}
                            objectFit="cover"
                            />
                        </div>
                        <h4 className="movie-list-title-style">동영상타이틀영역입니다.</h4>
                        <p className="float-left">조회수 000회</p>
                        <span className="movie-list-line-style">|</span>
                        <p>1년전</p>
                        <p className="movie-list-user-style">동영상유저명영역</p>
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            ))}
            </div>  
        </main>
    </div>
</body>
    
  );
}
