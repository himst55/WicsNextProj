import Image from "next/image";
import Navbar from './components/Navbar'

export default function Home() {
       return (
        <>
          <Navbar></Navbar>
          <h4 style={{color: "#00608A"}}>Where is my Sure Walk?</h4>
          <Image
              src="/Background.png"
              alt="Sure Walk Image"
              fill={true}
              style={{objectFit: "cover", zIndex: "-5"}}>
          </Image>
        </>
       );
}
