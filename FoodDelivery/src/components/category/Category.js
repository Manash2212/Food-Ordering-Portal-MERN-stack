import React from 'react'
import './category.css'
import { useNavigate } from 'react-router-dom'
//import HomeScreen from '../screens/Homescreen'
function Category(pizza) {
  const navigate = useNavigate();
  // onClick={()=>{navigate('/data')}}
  // console.log('ancede')
  // console.log(pizza.pizza)
  return (
    <>
      <div className="container">
        <div className="items">
          <div className='item' onClick={() => { navigate(`/pizza/${pizza.pizza.name}/${pizza.pizza._id}`) }}>

            <h1>{pizza.pizza.name}</h1>
            <img src={pizza.pizza.image}
              alt='' className='img-fluid mx-2 my-2' style={{ height: '200px', width: '200px' }} />
          </div>

          {/* <div className="items">
          <button className="item1" onClick={() => { navigate(`/P-item/${props.name}/${props._id}`) }} ><img src={props.img} alt="Pizaa" />{props.name}</button>
        </div> */}
        </div>
      </div>
    </>
  )
}

export default Category