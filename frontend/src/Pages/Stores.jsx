import React from 'react'
import useSWR from "swr"
import {fetcher} from "../utlis/dataFetch"

function Store() {
const {data, isLoading, error} = useSWR("/v1/stores", fetcher)

// if(isLoading && !error){
//   return (
//       <div>There is data being loaded</div>
//   )
// }

// if(!isLoading && error){
//   return (
//       <div>There was an error</div>
//   )
// }

  return (
    <div class="grid grid-cols-2 gap-2">
      <p class =" text-green-500 font-semibold place-content: start">Bodegas in your Area</p>
      <div class =" bg-gray-200 p-3">La Bodega</div>
      <div class =" bg-gray-200 p-3">Sam's Deli</div>
      <div class =" bg-gray-200 p-3">Luigi Gourmet</div>
      <div class =" bg-gray-200 p-3">Corner Gourmet</div>
      <div class =" bg-gray-200 p-3">Berry Bodega</div>
      <div class =" bg-gray-200 p-3">Maria Store</div>
      <div class =" bg-gray-200 p-3">Basics Market</div>
      <div class =" bg-gray-200 p-3">Fernandez</div>
      <div class =" bg-gray-200 p-3">Lyla's Bodega</div>
      <div class =" bg-gray-200 p-3">NY Deli</div>
      <div class =" bg-gray-200 p-3">Mario Deli</div>
      <div class =" bg-gray-200 p-3">Express Deli</div>
      <div class =" bg-gray-200 p-3">Ditmar’s Foodmart</div>
      <div class =" bg-gray-200 p-3">Sunny & Annie's Deli</div>
      <div class =" bg-gray-200 p-3">Guerrero Market</div>
      <div class =" bg-gray-200 p-3">Bronx Gourmet Deli</div>
      </div>

  );
}


export default Store

// import React, { useEffect, useState } from "react";
// // import fetch all stores from './stores'
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// // import { get one store } from "/stores/:storeId";

// export default function ShowStores() {
//   const [stores, setStores] = useState([]);
//   const [error, setError] = useState(false);


//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const allStores = await axios.get("http://v1/stores");
//         console.log(allStores);
//         if (allStores.status === 200) {
//           setStores(allStores.data.stores);
//           setFilteredData(allStores.data.stores)
//         } else {
//           return null;
//         }
//       } catch (error) {
//         console.log("Something went wrong. Try again!", error);
//       }
//     };

//     fetchStores();

// }, []);

// }