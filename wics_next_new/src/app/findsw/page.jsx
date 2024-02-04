'use client'
import React from 'react'
import "../globals.css"
import { useState } from "react"
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function FindSW() {
    const [info, setInfo] = useState("")
    const [showVanLoc, setShowVanLoc] = useState(false)

    const handleChange = (event) => {
        setShowVanLoc(false)
        setInfo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (info == "353203") {
            setShowVanLoc(true)
            alert("You Entered a Valid Sure Walk Number. Please Click the \"See Location \" button to find your Sure Walk.")
            setInfo("")
        } else {
            alert("Not a valid Sure Walk Number")
            setInfo("")
        }        
    }

    return (
        <>
          <Navbar></Navbar>
          <div style={{ height: "700px", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <div className="card" style={{
                height: "300px", width: "325px", backgroundColor: "#f69521", borderRadius: "5px",
                display: "flex", alignItems: "center", justifyContent: "center", marginTop: "auto", marginBottom: "auto"
             }}>
                   <div className="card-body" style={{ paddingLeft: "10px" }}>
                <h2 className="card-title"> Find Sure Walk </h2>
                      <br></br>
                      <br></br>
                <form onSubmit={handleSubmit}>
                <label style={{margin: "auto"}}>Enter Sure Walk Number
                         <br></br>
                         <br></br>
                    <input 
                        type="text" 
                        value={info}
                        onChange= {handleChange}
                    />
                </label>
                         <br></br>
                         <br></br>
                <input type="submit"></input>
                   </form>
                   <br></br>
                   {showVanLoc && <button><Link href="/showSW/info">See Location</Link></button>}
                   </div>
             </div>
          </div>
        </>
    );
}