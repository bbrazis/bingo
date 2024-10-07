const options = 
    {
        1: "Poppy's Playtime",
        2: "Among Us",
        3: "Lava Monster",
        4: "NOOOO",
        5: "I want a creamer",
        6: "I need water",
        7: "TRIN / TRINITY",
        8: "LONDON",
        9: "SASHA",
        10: "HEEY!",
        11: "DEVIN!",
        12: "GRACIE!",
        13: "FREE SPACE",
        14: "Let's go to the house",
        15: "I'll race you",
        16: "I want a rolly rancher",
        17: "Can I get a hot chocolate",
        18: "Screams of some sort",
        19: "Going into the pool area",
        20: "Can I have ____ snack?",
        21: "among among us",
        22: "Can we see the kitty?",
        23: "Kid breakdown or tantrum",
        24: "Kid gets injured",
        25: "James runs off without notice"
    }

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
        // console.log(values)
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

export default options

export { getFullList, getRandomList, sendData }