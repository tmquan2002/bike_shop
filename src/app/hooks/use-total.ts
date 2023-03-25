import { useEffect } from "react"
import { useBoolean, useNumber } from "./use-state-custom"
import ordersMocks from '@assets/mocks/orders.json'

/**Get the total to display on dashboard, REMINDER TO REPLACE STRING PARAMETER AS API LINK */
export const useTotal = (data: number, revenue?: boolean) => {
    const [total, setTotal] = useNumber(0)
    const [loading, setLoading] = useBoolean(true)

    useEffect(() => {
        //Get API here        
        let revenueTotal = 0;
        if (revenue) {
            ordersMocks.forEach(order => {
                order.detail.forEach(detail => {
                    revenueTotal = revenueTotal + detail.listPrice * detail.quantity
                })
            })
        }
        setTotal(revenue ? revenueTotal : data)
        setLoading(false)
    }, [data, setLoading, setTotal, revenue])
    return { total, loading }
}