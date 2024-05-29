
import Image from "next/image";

export default async function MovieList() {

  return (
    <body className="text-white bg-black font-NotoSansKR">
    <div className="w-full h-full overflow-hidden tracking-tighter">
        <header className="header-style">
            <div className="flex items-center pb-1.5">
                <button className="p-[0.875rem]">
                <Image
                        src="/img/icon/icon-back-btn.svg"
                        width={25}
                        height={25}
                        alt="뒤로가기"
                        objectFit="cover"
                    />
                </button>
                <h2 className="text-[1.125rem] font-bold">영상 리스트</h2>
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
                <a href="#" className="items-center">
                    기본정렬
                    <div className="inline-block pl-1">
                    <Image
                        src="/img/icon/icon-list-align.svg"
                        width={25}
                        height={25}
                        alt="리스트정렬"
                        objectFit="cover"
                    />
                    </div>
                </a>
                <a href="#" className="items-center">편집취소</a>
            </div>
            <div>
                <div className="movie-list-group-style">
                    <div>
                        <ul>
                            <li>
                                <a href="#" className="float-left">
                                    <div className="movie-list-thumbnail-style">
                                    <Image
                                        src="/img/thumbnail/movielist-thumbnail01.svg"
                                        width={150}
                                        height={150}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>

                                    <h4 className="movie-list-title-style">동영상타이틀영역입니다.</h4>
                                    <p className="float-left">조회수 000회</p>
                                    <span className="movie-list-line-style">|</span>
                                    <p>1년전</p>
                                    <p className="movie-list-user-style">동영상유저명영역</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="movie-list-group-style">
                    <div>
                        <ul>
                            <li>
                                <a href="#" className="float-left">
                                    <div className="movie-list-thumbnail-style">
                                    <Image
                                        src="/img/thumbnail/movielist-thumbnail02.svg"
                                        width={150}
                                        height={150}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                    <h4 className="movie-list-title-style">동영상타이틀영역입니다.</h4>
                                    <p className="float-left">조회수 000회</p>
                                    <span className="movie-list-line-style">|</span>
                                    <p>1년전</p>
                                    <p className="movie-list-user-style">동영상유저명영역</p>
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