'use client';

import SideBarButton from "./SideBarButton";
import Logo from "./Logo";
import Image from "next/image";
import { useState } from 'react';
export default function SideBar({ clubId }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            <div className={`sidebar  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full '} transition-transform duration-300 ease-in-out`}>
                <div className=" absolute bg-white   p-5 flex flex-col gap-6 shadow-lg rounded-2xl text-nowrap h-screen w-64 ">
                    <div className="pl-3">
                        <Logo></Logo>
                    </div>
                    <div className="pl-3">
                        <p className="text-gray-400 text-sm">Current club</p>
                        <a href={`../${clubId}`}>
                            <div className="flex gap-2 items-center">
                                <Image src="/images/motionu.png" width={30} height={30}></Image>
                                <p className="text-lg font-bold text-gray-700">Motion-U</p>
                            </div>
                        </a>
                    </div>
                    <SideBarButton text={"Dashboard"} link={`/club/${clubId}/dashboard`}></SideBarButton>
                    <SideBarButton text={"General"} link={`/club/${clubId}/general`}></SideBarButton>
                    <SideBarButton text={"Membership"} link={`/club/${clubId}/membership`}></SideBarButton>
                    <SideBarButton text={"Club programmes"} link={`/club/${clubId}/program`}></SideBarButton>
                    <SideBarButton text={"Financial"} link={`/club/${clubId}/financial`}></SideBarButton>
                </div>
            </div>
        </>
    );
}