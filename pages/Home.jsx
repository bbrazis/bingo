import React from "react"
import Bingo from "../components/Bingo"
import Nav from "../components/Nav/Nav"
import data from "../data"
import { getRandomList } from "../data"

export default function Home() {
    // const values = Object.values(data)
    const [loading, setLoading] = React.useState(false)
    const [bingoItems, setBingoItems] = React.useState([])
    
    React.useEffect(()=> {
        async function getRandoms () {
            setLoading(true)
            try {
                const random = await getRandomList()
                const randomArr = Object.values(await random)
                let newArr = []

                for(let obj of randomArr){
                    newArr.push(obj)
                }

                setBingoItems( newArr )
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        getRandoms()
    },[])
    
    function toggleSquare(e, index){
        const text = e.target.querySelector("p").textContent
        console.log(index)
        // const mappedArr = bingoItems.map((item, i) => {
        //     if()
        // })
        const current = bingoItems.filter(item => item.terms === text)[0]
        console.log(current)
        
    }

    if(loading) {
        return (
            <>
                <Nav />
                <h1>Kid Bingo</h1>
                <p>Loading...</p>
            </>
        )
    }
    
    // const Squares = 

    return (
        <>
            <Nav />
            <h1>Kid Bingo</h1>
            <Bingo>
                {bingoItems.map((value,index) => (
                        <Bingo.Square 
                            key={index}
                            text={value.terms}
                            checked={value.checked}
                            toggleSquare={()=>toggleSquare(index)}
                        />)
                    )}
            </Bingo>
            <button className="reset-btn" onClick={() => location. reload()}>Restart</button>
        </>
    )
}