'use client'
import React from 'react'
import "../globals.css"
import { useState } from "react"
import Navbar from '../components/Navbar'

export default function GetNumber() {
    const [info, setInfo] = useState("")
    const [showVanNum, setShowVanNum] = useState(false)
    const [signedUp, setSignedUp] = useState(false)
    const [notSignedUp, setNotSignedUp] = useState(true)
    const [num, setNum] = useState(-1)

    const handleChange = (event) => {
        setShowVanNum(false)
        setInfo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setShowVanNum(true)
        if (info == "bb5555") {
            setSignedUp(true)
            setNotSignedUp(false)
            setNum(353203)
        } else {
            setSignedUp(false)
            setNotSignedUp(true)
            setNum(-1)
        }
        
    }

    return (
        <>
          <Navbar></Navbar>
          <div style={{
             backgroundColor: "white", display: "block", textAlign: "center", padding: "100px 400px 125px 400px"}}>
          <div class="card" style={{
             height: "300px", width: "325px", backgroundColor: "#f69521",
             borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div class="card-body" style={{paddingTop: "20px", paddingLeft: "10px"}}>
                <h2 class="card-title"> Get Sure Walk Number </h2>
                <br></br>
                <form onSubmit={handleSubmit}>
                <label style={{margin: "auto"}}>Enter UT EID
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
        </div>
             {showVanNum && signedUp && <p style={{ paddingTop: "20px" }}>Your Sure Walk Number is {num}</p>}
        {showVanNum && notSignedUp && <p>You have not signed up for a sure walk</p>}
          </div>
          </>
    )
}