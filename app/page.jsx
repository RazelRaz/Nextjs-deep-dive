'use client'
import Menu from '@/components/Menu';
import React, { useEffect, useState } from 'react';

const page = () => {

  let [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      let res = await fetch('https://dummyjson.com/products')
      let json = await res.json()
      setData(json['products']);
    })()
  },[])



  return (
    <div>

      <h1 className='my-color'>Home</h1>
      <p>Client Side Rendering - CSR</p>
      {
        data.map((item, index) => {
          return <div key={index}>
            <h2>{item['title']}</h2>
          </div>
        })
      }
    </div>
  );
};

export default page;