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
            for(const arr of winConditions){
                if(compare(arr, boxIds)){
                    setWinning(true)
                    break
                }
            }
        }
    },[boxIds])

    function compare(arr1, arr2){
        let matches = []
        for(const value of arr1){
            if(arr2.includes(value)) {
                matches.push(true)
            }
        }
        if(matches.length === 5) {
            return true
        } else {
            return false
        }
    }

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
                    const filtered = boxIds.filter(id => id != index)
                    setBoxIds(filtered)
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
                {winning && (
                    <div className="win-wrapper">
                        <h2>Looks like you won!</h2>
                        <p>I'm sorry you had to endure that.</p>
                    </div>
                )}
            </Bingo>
            <button className="reset-btn" onClick={getRandoms}>Restart</button>
        </>
    )
}