"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen relative bg-white p-5 shadow-sm border">
      <div className="flex justify-center items-center">
        <Image src={"/logo.svg"} alt="logo" width={82} height={82} />
        <p className="ml-1">SmartScribe</p>
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu) => (
          <Link href={menu.path} key={menu.name} className="block">
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                path.startsWith(menu.path) ? "bg-primary text-white" : ""
              }`}
            >
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
