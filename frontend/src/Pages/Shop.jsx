import React from 'react'
import useSWR from "swr"
import {fetcher} from "../utlis/dataFetch"

function Shop() {
const {data, isLoading, error} = useSWR("https://tkhcapstonegroup4-production.up.railway.app/v1/shop", fetcher)

  
  return (
    <div>Shop</div>
  )
}

export default Shop