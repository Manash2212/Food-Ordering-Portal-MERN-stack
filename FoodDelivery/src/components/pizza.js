import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useSelector,useDispatch} from 'react-redux'
import { AddToCart } from '../Redux/cartAction';

function Pizza() {
  const { id, name } = useParams();
  const myState=useSelector((state)=> state.cart);
  console.log(myState)
  const dispatch=useDispatch()

  const [foodinfo, setFoodinfo] = useState([]);
  // const[cart,setCart]=useState([]);
  // const handleclick=(item)=>{
  //   setCart([...cart,item])
  //   console.log(cart)
  // }
  //console.log(id);
  useEffect(() => {
    // axios.get(`http://localhost:2000/api/f2/info/${id}`)
    // http://localhost:2000/food-order-portal/items/62cfc611ede5c79fff4b55d7
    axios.get(`http://localhost:2000/food-order-portal/items/${id}`)

      .then(function (response) {

        setFoodinfo(response.data)
        console.log(response.data);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])

  //   const fetchdata = ({id}) => {
  //   }

  const addtocart=(item)=>{
   dispatch(AddToCart(item))

  }
  
  return (
    <>
      <p className='h2 my-4'>{name}</p>
      {/* <div class="col-sm-4 p-2"> */}
      {foodinfo.map(data =>


        <div className='flex-container container'>

          <div className='text-start ms-5 w-100'>
            <p className='h4'>{data.name}</p>
            <p className='h6'>Rs/-{data.price}</p>
            <p className='text-muted'>{data.description}</p>
            
              {myState.cartItems.find(x=>x._id===data._id)?<button className='btn btn-info'>Added To Cart</button>:<button className='btn btn-danger'  onClick={()=>addtocart(data)}>Add To Cart</button>}
            <hr></hr>
          </div>

          <div className='w-100'>
            <img src={data.image} alt='' className='img-fluid mx-2 my-2' style={{ height: '150px', width: '15rem' }} />
          </div>

          <hr />

        </div>



      )}

      {/* </div> */}
      {/* <Modal show={show} >
  
  <Modal.Header>
    <Modal.Title>{pizza.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body >
    <img src={pizza.image} alt="" classNameName='img-fluid' style={{height:'200px'}}/>
    <p>{pizza.description}</p>

  </Modal.Body>

  <Modal.Footer>
   <button classNameName='btn' onClick={handleClose}>close</button>
  </Modal.Footer>
 
</Modal> */}
    </>
  );
}

export default Pizza
