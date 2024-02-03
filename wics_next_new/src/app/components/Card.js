import React from 'react'
import "../globals.css"

export default function Card() {
    return (
        <div class="card" style={{height: "350px", width: "300px", backgroundColor: "orange"}}>
        <div class="card-body">
            <h2 class="card-title">Card title</h2>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    )
}