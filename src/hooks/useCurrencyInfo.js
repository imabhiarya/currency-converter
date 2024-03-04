import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data , setData] =useState({});
    // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    let url = `https://open.er-api.com/v6/latest/${currency}`

    // async function fetchData(){
    //     const output = await fetch(url)
    //     const outData = output.json();
    //     const newOut = outData.then((res) => (res.rates));
    //     setData(newOut);
    // }

    useEffect( () => {

        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
        // console.log(data);

    }, [currency])
    // console.log(data);
    return data;
}

export default useCurrencyInfo