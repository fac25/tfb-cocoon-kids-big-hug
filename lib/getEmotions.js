export async function getEmotions() {
    const res = await fetch('http://localhost:3002/emotions')

    const data = await res.json()
    // console.log(data)
    return data
}
