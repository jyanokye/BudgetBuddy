'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser , UserButton } from "@clerk/nextjs";

function Header() {
    const { user , isSignedIn } = useUser()
    return(
        <div className='p-5 flex justify-between items-center shadow-sm'>
            <div className="flex flex-row items-center">
                {/*  my logo */}
                <Image src={"/images/chart-donut.svg"} alt="logo" width={40} height={25} />
                <span className="text-blue-800  font-bold text-xl">Budget Buddy</span>
            </div>
            {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;