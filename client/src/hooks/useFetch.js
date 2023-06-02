import { useState,useEffect } from "react";

import {fetchDataFromAPI }from "../utils/api";

const useFetch=(endpoint)=>{
    const[data,setData] =useState();

    useEffect( ()=>{
        makeAPIcall()
    },[endpoint])

    const makeAPIcall = async ()=>{
        const response = await fetchDataFromAPI(endpoint);
        setData(response)
    }

    return {data}
}

export default useFetch;