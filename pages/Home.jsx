import React from "react"
import Bingo from "../components/Bingo"
import Nav from "../components/Nav/Nav"
import data from "../data"
import { getRandomList } from "../data"

export default function Home() {
    const values = async () => await getRandomList()
    const Squares = values.map((value,index) => <Bingo.Square key={index} text={value} />)
    return (
        <>
            <Nav />
            <h1>Kid Bingo</h1>
            <Bingo>
                {Squares}
            </Bingo>
            <button className="reset-btn" onClick={() => location. reload()}>Restart</button>
        </>
    )
}