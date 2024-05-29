
import Image from "next/image";

export default async function Menu() {

  return (
    <body className="text-white bg-black font-NotoSansKR">
    <div className="w-full h-full overflow-hidden tracking-tighter">
        <main>
            <div className="flex h-[14.375rem] bg-primary-8 rounded-b-[23px] overflow-hidden">
                <div className="relative flex-1 w-full h-full overflow-hidden">
                        <Image 
                            src="/img/thumbnail/menu-user-img.svg"
                            width={140}
                            height={140}
                            alt="로그인사용자이미지"
                            objectFit="cover"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 content-center w-full text-center bg-bgColor-4 h-9">
                        <a href="#" className="relative">
                            <p className="text-[0.813rem] pr-2 pt-[0.125rem] inline-block">내 채널 바로가기</p>
                            <Image 
                                src="/img/menu/icon-user-channel.svg"
                                width={20}
                                height={20}
                                alt="내채널바로가기"
                                objectFit="cover"
                                className="inline-block"
                            />
                        </a>
                    </div>
                </div>
                <div className="relative flex-1">
                    <div className="grid grid-rows-4 pt-16 pl-5">
                        <h2 className="font-bold text-[1.375rem] text-point-3">calmdown</h2>
                        <a href="#">
                            <p className="inline-block text-[0.813rem] font-medium">개인정보수정</p>
                            <Image 
                                src="/img/menu/icon-user-modify.svg"
                                width={20}
                                height={20}
                                alt="개인정보수정"
                                objectFit="cover"
                                className="inline-block"
                            />
                        </a>
                        <button className="border border-1 border-white w-[4.375rem] h-[1.625rem] rounded-2xl font-bold text-xs mt-[0.313rem]">LOGOUT</button>
                    </div>
                    <button className="absolute right-4 bottom-4">
                        <Image 
                            src="/img/menu/icon-user-close.svg"
                            width={20}
                            height={20}
                            alt="창닫기"
                            objectFit="cover"
                            className="inline-block"
                        />
                    </button>
                </div>
            </div>
            <div className="pt-6 border-b border-whColor-10">
                <div className="relative h-5 px-6 ">
                    <a href="#">
                        <h3 className="text-base font-bold">최근 본 영상</h3>
                        <Image 
                            src="/img/icon/icon-title-more.svg"
                            width={20}
                            height={20}
                            alt="최근 본 영상 더보기"
                            objectFit="cover"
                            className="absolute right-6 bottom-2"
                        />
                    </a>
                </div>
                <div className="mt-3.5 text-base font-medium pb-6">
                    <ul className="flex px-5">
                        <li className="flex-1 float-left pr-2.5 w-[6.875rem]">
                            <a href="#">
                                <Image 
                                    src="/img/thumbnail/menu-movie-thumbnail01.svg"
                                    width={140}
                                    height={140}
                                    alt="최근 본 영상 더보기"
                                    objectFit="cover"
                                    className="w-full"
                                />
                                <p className="mt-2 truncate">[Playlist] 드라이 할 때 들으면 좋은 노래</p>
                            </a>   
                        </li>
                        <li className="flex-1 float-left pr-2.5 w-[6.875rem]">
                            <a href="#">
                            <Image 
                                    src="/img/thumbnail/menu-movie-thumbnail02.svg"
                                    width={140}
                                    height={140}
                                    alt="최근 본 영상 더보기"
                                    objectFit="cover"
                                    className="w-full"
                                />
                                <p className="mt-2 truncate">[Playlist] 미간에 주름 팍 노래</p>
                            </a>
                        </li>
                        <li className="flex-1 float-left w-[6.875rem] m-0">
                            <a href="#">
                            <Image 
                                src="/img/thumbnail/menu-movie-thumbnail03.svg"
                                width={140}
                                height={140}
                                alt="최근 본 영상 더보기"
                                objectFit="cover"
                                className="w-full"
                            />
                                <p className="mt-2 truncate">[Playlist] 복잡한 생각은 싹싹</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative px-5 border-b border-whColor-10">
                <ul className="flex flex-col py-4 text-lg font-medium">
                    <li className="content-center h-12">
                        <a href="#">
                            <Image 
                                src="/img/menu/menu-icon01.svg"
                                width={35}
                                height={35}
                                alt="영상검색"
                                objectFit="cover"
                                className="inline-block float-left pt-1 pr-4"
                            />
                            <p>영상검색</p>
                        </a> 
                    </li>
                    <li className="content-center h-12">
                        <a href="#">
                            <Image 
                                src="/img/menu/menu-icon02.svg"
                                width={35}
                                height={35}
                                alt="즐겨찾기"
                                objectFit="cover"
                                className="float-left pl-1 pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>즐겨찾기</p>
                        </a>
                    </li>
                    <li className="content-center h-12">
                        <a href="#">
                            <Image 
                                src="/img/menu/menu-icon03.svg"
                                width={35}
                                height={35}
                                alt="마이페이지"
                                objectFit="cover"
                                className="float-left pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>마이페이지</p>
                        </a>
                    </li>
                    <li className="content-center h-12">
                        <a href="#">
                            <Image 
                                src="/img/menu/menu-icon04.svg"
                                width={35}
                                height={35}
                                alt="설정"
                                objectFit="cover"
                                className="float-left pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>설정</p>
                        </a>
                    </li>
                    <li className="content-center h-12">
                        <a href="#">
                            <Image 
                                src="/img/menu/menu-icon05.svg"
                                width={35}
                                height={35}
                                alt="고객센터"
                                objectFit="cover"
                                className="float-left pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>고객센터</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="relative grid grid-cols-2 px-5 pt-6 text-sm text-whColor-3">
                <h4 className="col-span-2 font-bold text-[0.938rem] text-white h-9">앱정보</h4>
                <a href="#" className="col-span-2 h-9">이용약관</a>
                <a href="#" className="h-9">개인정보처리방침</a>
                <span className="absolute bottom-0 right-5 h-9 text-primary-9">버전:1.18.5</span>
            </div>
        </main>
    </div>
</body>
    
  );
}