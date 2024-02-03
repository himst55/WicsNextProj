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
        } else {
            alert("Not a valid Sure Walk Number")
        }
        
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="card" style={{height: "350px", width: "300px", backgroundColor: "orange", borderRadius: "5px"}}>
            <div className="card-body" style={{paddingTop: "20px", paddingLeft: "10px"}}>
                <h2 className="card-title"> Get Sure Walk Number </h2>
                <br></br>
                <form onSubmit={handleSubmit}>
                <label style={{margin: "auto"}}>Enter Sure Walk Number
                <br></br>
                    <input 
                        type="text" 
                        value={info}
                        onChange= {handleChange}
                    />
                </label>
                <br></br>
                <input type="submit"></input>
                </form>
            </div>
            {showVanLoc && <button><Link href="/showSW/info">See Location</Link></button>}
        </div>
        </>
    );
}