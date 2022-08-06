import axios from 'axios'
import React, { useEffect, useState } from 'react';

import Category from '../components/category/Category'
//import Cart from './Cart'
function Homescreen() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchdata();

  }, [])

  const fetchdata = () => {
    axios.get('http://localhost:2000/food-order-portal/foodcategory')
      .then(function (response) {
        setItems(response.data)
        console.log('pizza')
        console.log(response.data);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  return (
    <>
      <div className='d-flex justify-content-center'>
        {items.map(data => {
          return <div>
            <Category pizza={data} />
          </div>
        })}
      </div>
    </>
  )
}

export default Homescreen