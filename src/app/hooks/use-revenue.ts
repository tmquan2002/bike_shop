import { useEffect } from "react"
import { useBoolean, useNumber } from "./use-state-custom"
import ordersMocks from '@assets/mocks/orders.json'
import apiLinks from "@app/utils/api-links"

/**Get the total revenue*/
export const useRevenue = () => {
    const [revenue, setRevenue] = useNumber(0)
    const [loading, setLoading] = useBoolean(true)

    useEffect(() => {
        async function fetchList() {
            const response = await fetch(apiLinks.order.getRevenue)
                .then((res) => res.json())
                .catch((error) => { console.log(error) })
            // console.log(response)
            if (response.status === 200) {
                setRevenue(response.revenue)
            }
        }
        fetchList()
        setLoading(false)
    }, [setLoading, setRevenue, revenue])
    return { revenue, loading }
}