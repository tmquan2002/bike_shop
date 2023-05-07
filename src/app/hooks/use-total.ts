import { useEffect, useRef } from "react"
import { useBoolean, useNumber } from "./use-state-custom"
import ordersMocks from '@assets/mocks/orders.json'

/**Get the total to display on dashboard, REMINDER TO REPLACE STRING PARAMETER AS API LINK */
export const useTotal = (apiURL: string, revenue?: boolean) => {
    const [total, setTotal] = useNumber(0)
    const [loading, setLoading] = useBoolean(true)
    const fullData = useRef([])
    const totalData = useRef(0)

    useEffect(() => {
        //Get API here 
        async function fetchList() {
            const response = await fetch(apiURL)
                .then((res) => res.json())
                .catch((error) => { console.log(error) })
            console.log(response)
            if (typeof response !== "number") {
                fullData.current = response
            } else {
                totalData.current = response
            }

            let revenueTotal = 0;
            if (revenue) {
                ordersMocks.forEach(order => {
                    order.detail.forEach(detail => {
                        revenueTotal = revenueTotal + detail.listPrice * detail.quantity
                    })
                })
            }
            setTotal(revenue ? revenueTotal : totalData.current)
        }
        fetchList()
        setLoading(false)
    }, [setLoading, setTotal, revenue])
    return { total, loading }
}