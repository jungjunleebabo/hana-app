
import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function getUser() {
    const session = await getSession();
    if (session.id) {
      const user = await db.user.findUnique({
        where: {
          id: session.id,
        },
      });
      if (user) {
        return user;
      }
    }
  
   // notFound();
  }
  
export default async function Menu() {
    const user = await getUser();
    const logOut = async () => {
      "use server";
      const session = await getSession();
      await session.destroy();
      redirect("/");
    };
  return (
    
    <body className="text-white bg-black font-NotoSansKR">
    
    <div className="w-screen h-screen max-w-xl mx-auto my-0 overflow-hidden bg-black py-9">
        <main>
            <div className="flex h-[14rem] bg-primary-8 rounded-b-[23px] overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                        <Image 
                            src="/img/thumbnail/menu-user-img.svg"
                            fill
                            alt="로그인사용자이미지"
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 content-center w-full text-center bg-bgColor-4 h-9">
                        <Link href="/내채널바로보기">
                            <p className="text-[0.813rem] pr-2 pt-[0.125rem] inline-block">내 채널 바로가기</p>
                            <Image 
                                src="/img/menu/icon-user-channel.svg"
                                width={20}
                                height={20}
                                alt="내채널바로가기"
                                objectFit="cover"
                                className="inline-block"
                            />
                        </Link>
                    </div>
                </div>
                <div className="relative flex-1">
                    <div className="grid grid-rows-4 pt-16 pl-5">
                        <h2 className="font-bold text-[1.375rem] text-point-3"> {user?.username}</h2>
                        <Link href="/개인정보수정">
                            <p className="inline-block text-[0.813rem] font-medium">개인정보수정</p>
                            <Image 
                                src="/img/menu/icon-user-modify.svg"
                                width={15}
                                height={15}
                                alt="개인정보수정"
                                objectFit="cover"
                                className="inline-block"
                            />
                        </Link>
                        <form action={logOut}>
                        <button 
                            className="border border-1 border-white w-[4.375rem] h-[1.625rem] rounded-2xl font-bold text-xs mt-[0.313rem]">LOGOUT
                        </button>
                        </form>    
                    </div>
                    <Link href="/index-page">
                        <button className="absolute right-4 bottom-4">
                            <Image 
                                src="/img/menu/icon-user-close.svg"
                                width={15}
                                height={15}
                                alt="창닫기"
                                objectFit="cover"
                                className="inline-block"
                            />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="pt-6 border-b border-whColor-10">
                <div className="relative h-5 px-6 ">
                    <Link href="/movie-list">
                        <h3 className="text-base font-bold">최근 본 영상</h3>
                        <Image 
                            src="/img/icon/icon-title-more.svg"
                            width={10}
                            height={10}
                            alt="최근 본 영상 더보기"
                            objectFit="cover"
                            className="absolute right-6 bottom-2"
                        />
                    </Link>
                </div>
                <div className="mt-3.5 text-base font-medium pb-6">
                    <ul className="flex px-5">
                        <li className="flex-1 float-left pr-2.5 w-[6.875rem]">
                            <Link href="/최근본영상더보기">
                                <Image 
                                    src="/img/thumbnail/menu-movie-thumbnail1.svg"
                                    width={140}
                                    height={140}
                                    alt="최근 본 영상 더보기"
                                    objectFit="cover"
                                    className="w-full"
                                />
                                <p className="mt-2 truncate">[Playlist] 드라이 할 때 들으면 좋은 노래</p>
                            </Link>
                        </li>
                        <li className="flex-1 float-left pr-2.5 w-[6.875rem]">
                            <Link href="/최근본영상더보기">
                                <Image 
                                    src="/img/thumbnail/menu-movie-thumbnail2.svg"
                                    width={140}
                                    height={140}
                                    alt="최근 본 영상 더보기"
                                    objectFit="cover"
                                    className="w-full"
                                />
                                <p className="mt-2 truncate">[Playlist] 미간에 주름 팍 노래</p>
                            </Link>
                        </li>
                        <li className="flex-1 float-left w-[6.875rem] m-0">
                            <Link href="/최근본영상더보기">
                                <Image 
                                    src="/img/thumbnail/menu-movie-thumbnail3.svg"
                                    width={140}
                                    height={140}
                                    alt="최근 본 영상 더보기"
                                    objectFit="cover"
                                    className="w-full"
                                />
                                <p className="mt-2 truncate">[Playlist] 복잡한 생각은 싹싹</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative px-5 border-b border-whColor-10">
                <ul className="flex flex-col py-4 text-lg font-medium">
                    <li className="content-center h-12">
                        <Link href="/영상검색">
                            <Image 
                                src="/img/menu/menu-icon01.svg"
                                width={35}
                                height={35}
                                alt="영상검색"
                                objectFit="cover"
                                className="inline-block float-left pt-1 pr-4"
                            />
                            <p>영상검색</p>
                        </Link>
                    </li>
                    <li className="content-center h-12">
                        <Link href="/즐겨찾기">
                            <Image 
                                src="/img/menu/menu-icon02.svg"
                                width={35}
                                height={35}
                                alt="즐겨찾기"
                                objectFit="cover"
                                className="float-left pl-1 pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>즐겨찾기</p>
                        </Link>
                    </li>
                    <li className="content-center h-12">
                        <Link href="/마이페이지">
                            <Image 
                                src="/img/menu/menu-icon03.svg"
                                width={35}
                                height={35}
                                alt="마이페이지"
                                objectFit="cover"
                                className="float-left pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>마이페이지</p>
                        </Link>
                    </li>
                    <li className="content-center h-12">
                        <Link href="/설정">
                            <Image 
                                src="/img/menu/menu-icon04.svg"
                                width={35}
                                height={35}
                                alt="설정"
                                objectFit="cover"
                                className="float-left pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>설정</p>
                        </Link>
                    </li>
                    <li className="content-center h-12">
                        <Link href="/고객센터">
                            <Image 
                                src="/img/menu/menu-icon05.svg"
                                width={35}
                                height={35}
                                alt="고객센터"
                                objectFit="cover"
                                className="float-left pr-4 pt-[0.313rem] inline-block"
                            />
                            <p>고객센터</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="relative grid grid-cols-2 px-5 pt-6 text-sm text-whColor-3">
                <h4 className="col-span-2 font-bold text-[0.938rem] text-white h-9">앱정보</h4>
                <Link href="/이용약관"  className="col-span-2 h-9">이용약관</Link>
                <Link href="/개인정보처리방침"  className="h-9">개인정보처리방침</Link>
                <span className="absolute bottom-0 right-5 h-9 text-primary-9">버전:1.18.5</span>
            </div>
        </main>
    </div>
</body>
    
  );
}