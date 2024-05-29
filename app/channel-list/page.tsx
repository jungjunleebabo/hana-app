
import Image from "next/image";

export default async function Channel() {

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
                <h2 className="text-[1.125rem] font-bold">채널 리스트</h2>
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
                <div className="channel-list-group-style">
                    <div className="relative w-full">
                        <ul>
                            <li>
                                <a href="#" className="float-left">
                                    <div className="channel-list-thumbnail-new-style">
                                    <Image
                                        src="/img/thumbnail/channellist-thumbnail01.svg"
                                        width={25}
                                        height={25}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                    <h4 className="channel-list-title-style">채널명영역입니다.</h4>
                                    <p className="float-left">@채널아이디영역</p>
                                    <a href="#" className="channel-button-following-style">팔로잉</a>
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="channel-list-group-style">
                    <div className="relative w-full">
                        <ul>
                            <li className="text-xs text-whColor-3">
                                <a href="#" className="float-left">
                                    <div className="channel-list-thumbnail-new-style">
                                    <Image
                                        src="/img/thumbnail/channellist-thumbnail01.svg"
                                        width={25}
                                        height={25}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                    <h4 className="channel-list-title-style">채널명영역입니다.</h4>
                                    <p className="float-left">@채널아이디영역</p>
                                    <a href="#" className="channel-button-follow-style">팔로우</a>
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="channel-list-group-style">
                    <div className="relative w-full">
                        <ul>
                            <li className="text-xs text-whColor-3">
                                <a href="#" className="float-left">
                                    <div className="channel-list-thumbnail-new-style">
                                    <Image
                                        src="/img/thumbnail/channellist-thumbnail01.svg"
                                        width={25}
                                        height={25}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                    <h4 className="channel-list-title-style">채널명영역입니다.</h4>
                                    <p className="float-left">@채널아이디영역</p>
                                    <a href="#" className="channel-button-following-style">팔로잉</a>
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="channel-list-group-style">
                    <div className="relative w-full">
                        <ul>
                            <li className="text-xs text-whColor-3">
                                <a href="#" className="float-left">
                                    <div className="channel-list-thumbnail-new-style">
                                    <Image
                                        src="/img/thumbnail/channellist-thumbnail01.svg"
                                        width={25}
                                        height={25}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                    <h4 className="channel-list-title-style">채널명영역입니다.</h4>
                                    <p className="float-left">@채널아이디영역</p>
                                    <a href="#" className="channel-button-following-style">팔로잉</a>
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="channel-list-group-style">
                    <div className="relative w-full">
                        <ul>
                            <li className="text-xs text-whColor-3">
                                <a href="#" className="float-left">
                                <div className="channel-list-thumbnail-new-style">
                                    <Image
                                        src="/img/thumbnail/channellist-thumbnail01.svg"
                                        width={25}
                                        height={25}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                   <h4 className="channel-list-title-style">채널명영역입니다.</h4>
                                    <p className="float-left">@채널아이디영역</p>
                                    <a href="#" className="channel-button-following-style">팔로잉</a>
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="channel-list-group-style">
                    <div className="relative w-full">
                        <ul>
                            <li className="text-xs text-whColor-3">
                                <a href="#" className="float-left">
                                <div className="channel-list-thumbnail-new-style">
                                    <Image
                                        src="/img/thumbnail/channellist-thumbnail01.svg"
                                        width={25}
                                        height={25}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                    <h4 className="channel-list-title-style">채널명영역입니다.</h4>
                                    <p className="float-left">@채널아이디영역</p>
                                    <a href="#" className="channel-button-follow-style">팔로우</a>
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="channel-list-group-style">
                    <div className="relative w-full">
                        <ul>
                            <li className="text-xs text-whColor-3">
                                <a href="#" className="float-left">
                                <div className="channel-list-thumbnail-new-style">
                                    <Image
                                        src="/img/thumbnail/channellist-thumbnail01.svg"
                                        width={25}
                                        height={25}
                                        alt=""
                                        objectFit="cover"
                                    />
                                    </div>
                                    <h4 className="channel-list-title-style">채널명영역입니다.</h4>
                                    <p className="float-left">@채널아이디영역</p>
                                    <a href="#" className="channel-button-following-style">팔로잉</a>
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