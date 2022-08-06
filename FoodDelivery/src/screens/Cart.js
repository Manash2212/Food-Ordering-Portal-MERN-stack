import { React, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { DeleteFromCart, ClearCart } from '../Redux/cartAction'



function Cart() {
  const history = useNavigate();
  const myState = useSelector((state) => state.cart);
  const [pvalue, setPValue] = useState(1)
  const dispatch = useDispatch()

  // const[nvalue,setnValue]=useState(1)
  console.log(myState)
  return (
    <>



      <p className='h2 my-4'>My Cart</p>
      {myState.cartItems.map(data =>


        <div className='flex-container container'>

          <div className='text-start ms-5 w-100'>
            <p className='h4'>{data.name}</p>

            <p className='text-muted'>{data.description}</p>
            <p className='h6'>Rs/-{data.price}</p>

            {/* <FaPlus className='text-success' onClick={()=>{setPValue(pvalue+1)}}/><span className='text-dark fs-6'>1</span><FaMinus onClick={()=>{setPValue(pvalue-1)}} className='text-danger'/> */}

            <FaTrash className='text-danger' onClick={() => { dispatch(DeleteFromCart(data._id)) }} />
            <hr></hr>
          </div>

          <div className='w-100'>
            <img src={data.image} alt='' className='img-fluid mx-2 my-2' style={{ height: '150px', width: '15rem' }} />
          </div>
          <hr></hr>
        </div>


      )}

      <button className='btn btn-danger my-2' onClick={() => { dispatch(ClearCart(myState.cartItems)); { history('/') } }}>Order</button>

    </>


  )
}

export default Cart