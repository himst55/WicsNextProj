import React from 'react';
import Link from 'next/link'
import Image from 'next/Image'

export default function Navbar() {
    return (
        <div className="navbar" style={{height: "80px", backgroundColor: "#F69521", alignContent: "center"}}>
            <Image src="/sure-walk.png" alt="Sure Walk Logo" width={75} height={75} style={{width: "175px", height: "80px"}}></Image>
            <div style={{ marginLeft:"400px", marginTop: "-50px", marginBottom: "150px"}}>
                <Link href="/" style={{ color: "#00608a", fontSize: "20px"}}> Home </Link>
            </div>
            <div style={{ marginLeft:"800px", marginTop: "-175px", marginBottom: "200px"}}> 
                <Link href="/findsw" style={{ color: "#00608a", fontSize: "20px"}}> Find Sure Walk </Link>
            </div>
            <div style={{ marginLeft:"1200px", marginTop: "-225px", marginBottom: "200px"}}> 
                <Link href="/getnum" style={{ color: "#00608a", fontSize: "20px" }}> Get Sure Walk Number </Link>
            </div>
        </div>
    );
}