import React from 'react';
import Link from 'next/link'
import Image from 'next/Image'

export default function Navbar() {
    return (
        <div className="navbar" style={{height: "80px", backgroundColor: "#F69521", alignContent: "center"}}>
            <Image src="/sure-walk.png" alt="Sure Walk Logo" width={75} height={75} style={{width: "175px", height: "80px"}}></Image>
          <Link href="/" style={{padding: "50px"}}> Home </Link>
            <Link href="/findsw" style={{padding: "50px" }}> Find Sure Walk </Link>
            <Link href="/getnum" style={{padding: "50px" }}> Get Sure Walk Number </Link>
        </div>
    );
}