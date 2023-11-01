const SiderBar = () => {
    const Menus = [
        { icon: '/src/assets/dashboard.svg', title: '主控台', href: 'https://www.google.com.tw/?hl=zh_TW' },
        { icon: '/src/assets/user.svg', title: '用戶資料', href: 'https://www.google.com.tw/?hl=zh_TW' },
        { icon: '/src/assets/history.svg', title: '歷史紀錄', href: 'https://www.google.com.tw/?hl=zh_TW' },
        { icon: '/src/assets/notification.svg', title: '通知', href: 'https://www.google.com.tw/?hl=zh_TW' },
        { icon: '/src/assets/setting.svg', title: '設定', href: 'https://www.google.com.tw/?hl=zh_TW' },
        { icon: '/src/assets/logout.svg', title: '登出', href: 'https://www.google.com.tw/?hl=zh_TW' }
    ]
    return (
        <div className="fixed top-0 left-0 h-screen w-60 m-0
                        flex flex-col
                        bg-Encycolorpedia text-white">
            <div className="flex gap-x-4 items-center bg-zinc-600 ">
                <img src="./src/assets/adminicon.svg" className="cursor-pointer duration-300 w-10 h-10" />
                <h1 className="text-white origin-left font-medium text-5xl duration-300">Admin</h1>
            </div>
            <div className="bg-Lime_Green flex gap-x-4 items-center">
                <ul>
                    {Menus.map((MenuInfo) =>
                        <li>
                            <img src={MenuInfo.icon} className="w-10 h-10" />
                            <a href={MenuInfo.href}>
                                {MenuInfo.title}
                            </a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default SiderBar;