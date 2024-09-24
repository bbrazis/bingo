import React from "react"
import Bingo from "../components/Bingo"
import Nav from "../components/Nav/Nav"
import data from "../data"
import { getRandomList } from "../data"

export default function Home() {
    // const values = Object.values(data)
    
    const getRandoms = async () => {
        const random = await getRandomList()
        const randomArr = Object.values(await random)
        let newArr = []

        for(let obj of randomArr){
            newArr.push(obj.terms)
        }
        return newArr
    }

    const values = getRandoms()

    const Squares = () => values.map((value,index) => <Bingo.Square key={index} text={value} />)
    return (
        <>
            <Nav />
            <h1>Kid Bingo</h1>
            <Bingo>
                {Squares ? Squares : null}
            </Bingo>
            <button className="reset-btn" onClick={() => location. reload()}>Restart</button>
        </>
    )
}