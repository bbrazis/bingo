import React from "react"
import Bingo from "../components/Bingo"
import Nav from "../components/Nav/Nav"

export default function Home() {
    return (
        <>
            <h1>Kid Bingo</h1>
            <Bingo>
                {Squares}
            </Bingo>
            <button className="reset-btn" onClick={() => location. reload()}>Restart</button>
            <Nav />
        </>
    )
}