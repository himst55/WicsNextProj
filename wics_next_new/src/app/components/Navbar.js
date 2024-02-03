import React from 'react';
import Link from 'next/link'
import Image from 'next/Image'

export default function Navbar() {
    return (
        <div className="navbar" style={{height: "80px", backgroundColor: "#F69521", alignContent: "center"}}>
            <Image src="/sure-walk.png" alt="Sure Walk Logo" width={75} height={75} style={{width: "150px", height: "80px"}}></Image>
            <Link href="/"> Home </Link>
            <Link href="/getnum"> Find Sure Walk </Link>
            <Link href="/findsw"> Get Sure Walk Number </Link>
        </div>
    );
}