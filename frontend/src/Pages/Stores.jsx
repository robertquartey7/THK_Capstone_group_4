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
      <div class =" bg-gray-200 p-3">01</div>
      <div class =" bg-gray-200 p-3">02</div>
      <div class =" bg-gray-200 p-3">03</div>
      <div class =" bg-gray-200 p-3">04</div>
      <div class =" bg-gray-200 p-3">05</div>
      <div class =" bg-gray-200 p-3">06</div>
      <div class =" bg-gray-200 p-3">07</div>
      <div class =" bg-gray-200 p-3">08</div>
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