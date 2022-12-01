export async function fetchData(endPoint) {
    const res = await fetch('http://localhost:3003/' + endPoint)
    const data = await res.json()
    return data
}
