"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

interface NavItem {
    title: string;
    icon: React.ReactNode;
    href: string;
}

const Sidebar: React.FC = () => {
    const navs: NavItem[] = [
        { title: "Home", icon: <GoHome className='size-6' />, href: "/" },
        { title: "Search", icon: <IoSearchOutline className='size-6' />, href: "/s" },
        { title: "Notifications", icon: <IoNotificationsOutline className='size-6' />, href: "/d" },
        { title: "Templates", icon: <GoHome className='size-6' />, href: "/s" },
    ];

    const pathname = usePathname();

    return (
        <aside className='bg-[#000000]'>
            <nav className='p-6'>
                <ul className='flex flex-col gap-4'>
                    {navs.map((nav) => (
                        <li key={nav.title}>
                            <Link
                                href={nav.href}
                                className={`font-medium px-4 py-2 rounded-2xl flex items-center gap-2 group text-[#787878] hover:text-[#FFFFFF] hover:bg-[#242529] w-fit ${pathname === nav.href ? "bg-[#242529] text-[#FFFFFF]" : ""}`}
                            >
                                {nav.icon}
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
