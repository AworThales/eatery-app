import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const useCart = () => {

    const apiUrl = import.meta.env.VITE_API_URL;

  const { user } = useContext(AuthContext);
    // console.log(user.email)
    const token = localStorage.getItem('access-token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`${apiUrl}/cart?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json();
        },
    })

    return [cart, refetch]
}

export default useCart