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

export default async function Profile() {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/");
  };
  return (
  <div className="w-screen h-screen max-w-xl mx-auto my-0 overflow-hidden bg-black py-9">
    <header className="flex flex-col flex-wrap items-end px-3.5">
        <Link href="/menu">
         <Image
            src="/img/icon/icon-menu.svg"
            width={25}
            height={25}
            alt="menu"
            objectFit="cover"
          />
          <p className="text-xs font-medium">menu</p>
        </Link>
      </header>
      <div className="flex flex-col justify-between h-full">
      <section className="relative">
      
      <div className="px-8 pt-4 pb-8">
        <span className="text-whColor-6 text-sm font-bold tracking-[-0.02rem]">Have a GoodDay 💖  {user?.username}</span>
        <h1 className="pt-3 text-29 font-bold leading-10 tracking-[-0.17rem]">
            오늘도 당신의<br />
            새로운 일상을 <span className="text-primary-1">검색</span>하세요
        </h1>
        
      </div>
   
      <div className="relative px-6">
          <input type="search" placeholder="검색어를 입력하세요" className="w-full h-[53px] pl-6 pr-11 bg-black border border-white rounded-[50px] placeholder-whColor-6 focus:border-primary-8" />
          <button className="absolute w-6 h-6 top-3.5 right-12">
              <Image
                src="/img/main/main-search-btn.svg"
                width={25}
                height={25}
                alt="검색하기"
                objectFit="cover"
              />
          </button>
      </div>

      <div className="absolute p-5 bg-bgColor-1 rounded-b-3xl h-[55px] overflow-hidden">
        <ul className="flex flex-wrap gap-x-2.5 gap-y-2 w-full px-7 pb-3.5 overflow-hidden text-whColor-2">
            <li><a href="/">배낭여행,</a></li>
            <li><a href="/">우정여행,</a></li>
            <li><a href="/">해외여행,</a></li>
            <li><a href="/">가이드투어,</a></li>
            <li><a href="/">관광여행,</a></li> 
            <li><a href="/">비지니스여행,</a></li>
            <li><a href="/">모험여행,</a></li>
            <li><a href="/">문화여행,</a></li>
            <li><a href="/">생태여행,</a></li>
            <li><a href="/">의료관광</a></li>
            <li><a href="/">도전적여행,</a></li>
            <li><a href="/">음식여행,</a></li>
            <li><a href="/">호화여행,</a></li>
            <li><a href="/">가족여행,</a></li>
            <li><a href="/">단체여행,</a></li>
            <li><a href="/">유적지탐방,</a></li>
            <li><a href="/">역사투어,</a></li>
            <li><a href="/">뚜벅이여행,</a></li>
            <li><a href="/">기차여행,</a></li>
            <li><a href="/">버스여행,</a></li>
            <li><a href="/">도시여행,</a></li>
            <li><a href="/">박물관투어,</a></li>
            <li><a href="/">문화투어,</a></li>
            <li><a href="/">국내여행</a></li>
        </ul>
        <button className="absolute bottom-4 right-5">
          <Image
                src="/img/main/main-more-btn.svg"
                width={14}
                height={14}
                alt="더보기"
                objectFit="cover"
          />
        </button>
      </div>
      </section>

      <section className="px-6 pb-8">
          <div className="px-3.5 mb-6">
              <ul className="flex flex-wrap items-end justify-center gap-2.5 tracking-tighter">
                  <li className="text-2xl font-bold"><a href="/">아이유 홀씨 MV,</a></li>
                  <li className="text-lg text-whColor-4"><a href="/">영화리뷰,</a></li>
                  <li className="text-xl text-whColor-2"><a href="/">먹방,</a></li>
                  <li className="text-xl text-whColor-2"><a href="/">여행 브이로그,</a></li>
                  <li className="text-2xl font-bold"><a href="/">고양이사랑해,</a></li>
                  <li className="text-2xl font-bold"><a href="/">PlayList,</a></li>
                  <li className="text-lg text-whColor-4"><a href="/">게임,</a></li>
                  <li className="text-xl text-whColor-2"><a href="/">푸바오,</a></li>
                  <li className="text-lg text-whColor-4"><a href="/">뉴스,</a></li>
                  <li className="text-xl text-whColor-2"><a href="/">드라마1시간요약,</a></li>
                  <li className="text-2xl font-bold"><a href="/">티모시샬라메</a></li>
              </ul>
            </div>
            <div>
            <label className="inline-flex w-full items-center p-1 rounded-[50px] bg-bgColor-8 cursor-pointer">
                <input id="switch" type="checkbox" className="hidden peer"></input>
                <span className="w-1/2 py-3 rounded-[50px] bg-primary-1  text-white text-sm font-bold text-center peer-checked:bg-bgColor-8 peer-checked:text-whColor-4"> 실시간 인기 검색어 </span>
                <span className="w-1/2 py-3 rounded-[50px] bg-bgColor-8 text-whColor-4 text-sm font-bold text-center peer-checked:bg-primary-1 peer-checked:text-white"> 최근 본 영상 </span>
            </label>
          </div>
      </section>

      </div> 
   </div>
    
  );
}