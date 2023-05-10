import React from 'react'
import LocateShopCard from './LocateShopCard'
import Map from './Map'

function LocateComp() {
  return (
    <div className="border w-full flex p-2 h-screen gap-2">
        <div className="border w-3/5 rounded-lg overflow-hidden shadow-lg h-3/4">
          <Map />
        </div>
        <div className="w-2/5">
          <LocateShopCard />
          <LocateShopCard />
          <LocateShopCard />
          
        </div>
      </div>
  )
}

export default LocateComp