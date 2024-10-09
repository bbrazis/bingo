const winConditions = [
    [0,1,2,3,4],
    [0,5,10,15,20],
    [0,6,12,18,24],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [20,16,12,8,4]
]

const taunts = [
    "My condolences",
    "Whomp whomp",
    "Big oof",
    "I'm sorry for what you've endured",
    "At least it'll end soon... right?",
    "Hopefully its time to go home"
]

const shuffle = (arr) => {
    return arr.map(value => ({value, sort: Math.random( )}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value})=> value)
}


const getFullList = async () => {
    try {
        const res = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:OJ5FJ_Jw/bingo')
        const data = await res.json()

        return await data
    } catch (err) {
        console.error(err)
    }
}

const getRandomList = async () => {
    const data = await getFullList()
    const randomList = await shuffle(data)
    const values = Object.values(randomList)
    let newArr = []

    for(let i = 0; i < 25; i++) {
        const current = {
            "terms": values[i].terms,
            "checked": false
        }
        if(i < 12) {
            newArr.push(current)
        } else if (i === 12){
            newArr.push({ "terms":"FREE SPACE","checked":false })
        } else {
            newArr.push(current)
        }
    }

    return newArr
}

const sendData = async (formData) => {
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    
    const res = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:OJ5FJ_Jw/bingo`, postOptions)
    const data = await res.json()

    if(!res.ok) {
        throw {
            message: "There was a problem submitting your suggestion",
            statusText: res.statusText,
            status: res.status
        }
    }

    return `'${data.terms}' was successfully added!`
}

export default winConditions

export { getFullList, getRandomList, sendData, taunts }