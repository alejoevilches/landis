/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch=(url)=>{
    const [data, setData]=useState();
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(prods=>setData(prods));
    },[])
    return {data};
}