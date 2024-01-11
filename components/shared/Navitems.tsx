"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navitems() {
  const pathname = usePathname();
  // console.log("pathname", pathname);
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        // console.log("link.route", link.route);
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive &&
              `text-purple-500 flex-center p-medium-16 whitespace-nowrap`
            }`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navitems;
