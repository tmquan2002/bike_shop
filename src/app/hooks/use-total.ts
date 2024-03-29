import { useEffect } from "react"
import { useBoolean, useNumber } from "./use-state-custom"

/**Get the total to display on dashboard*/
export const useTotal = (apiURL: string) => {
    const [total, setTotal] = useNumber(0)
    const [loading, setLoading] = useBoolean(true)

    useEffect(() => {
        async function fetchList() {
            const response = await fetch(apiURL)
                .then((res) => res.json())
                .catch((error) => { console.log(error) })
            // console.log(response)
            if (response.status === 200) {
                setTotal(response.total)
            }
        }
        fetchList()
        setLoading(false)
    }, [setLoading, setTotal, total, apiURL])
    return { total, loading }
}