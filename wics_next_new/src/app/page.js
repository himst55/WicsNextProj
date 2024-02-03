import Image from "next/image";
import Navbar from './components/Navbar'

export default function Home() {
       return (
        <>
          <Navbar></Navbar>
             <h1 style={{ color: "#00608A", padding: "30px 0px 0px 30px", fontSize: "50px" }}>Where is my Sure Walk?</h1>
             <p style={{ color: "#00608A", padding: "15px 0px 0px 30px", fontSize: "20px"}}>Use your Sure Walk number to find how far away your Sure Walk is!</p>
          <Image
              src="/Background.png"
              alt="Sure Walk Image"
              fill={true}
              style={{objectFit: "cover", zIndex: "-5", padding: "50px 0px 0px 0px"}}>
          </Image>
        </>
       );
}
