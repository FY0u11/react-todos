import axios from 'axios'

export default async (url, setIsLoading) => {
    try {
        setIsLoading(true)
        const result = await axios.get(url)
        setIsLoading(false)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
