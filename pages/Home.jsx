import React from "react"
import Bingo from "../components/Bingo"
import Nav from "../components/Nav/Nav"
import winConditions from "../data"
import { getRandomList } from "../data"

export default function Home() {
    // const values = Object.values(data)
    const [loading, setLoading] = React.useState(false)
    const [bingoItems, setBingoItems] = React.useState([])
    const [boxIds, setBoxIds] = React.useState([])
    const [winning, setWinning] = React.useState(false)
    
    React.useEffect(()=> {
        getRandoms()
    },[])

    React.useEffect(()=>{
        console.log(boxIds)
        if(boxIds.length >= 5){
            console.log('potential win condition')
        }
    },[boxIds])

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

    function toggleSquare(index){
        const mappedArr = bingoItems.map((item, i) => {
            if(i === index) {
                if(boxIds.includes(index)){
                    console.log('already exists, need to remove')
                    const newMap = boxIds.map(id => {
                        if(id != index) return id
                    })
                    setBoxIds(newMap)
                } else {
                    setBoxIds(prev => [...prev, index])
                }
                return {
                    "terms": item.terms,
                    "checked": !item.checked
                }
            } else {
                return item
            }
        })
        setBingoItems(mappedArr)
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
            <button className="reset-btn" onClick={getRandoms}>Restart</button>
        </>
    )
}