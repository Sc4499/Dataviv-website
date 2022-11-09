import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

const Profile = () => {
    const dispatch = useDispatch();


    const{counter}=useSelector((state)=>state.custom)

    const add =()=>{
dispatch({
    type:"INCREMENT"
})
    }
    const sub =()=>{
dispatch({
    type : "DECREMENT"
})
    }
    const byvalue =()=>{
dispatch({
    type :"BYVALUE",
    payload : 10
})
    }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
      <button onClick={byvalue}>BYVALUE</button>
    </div>
  )
}

export default Profile
