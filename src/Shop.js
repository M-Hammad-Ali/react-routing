import React,{useState,useEffect} from 'react';

function Shop() {
  useEffect(()=>{

  },[])

  const fetchItems = async()=>{
    const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const items = await data.json();
    console.log(items);
  }

  return (
    <div>
      <h3>Shop Page</h3>
    </div>
  );
}

export default Shop;
