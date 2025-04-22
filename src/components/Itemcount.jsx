import { useState } from "react"

const Itemcount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)
       
   const add = () => {
       if(count < stock){
           setCount( count + 1 )
       }
   }

   const substract = () => {
    if(count > 0){
        setCount(count - 1)
    }
}
//const comprar = () => {
//    onAdd(count)
//}



return (
  <div>
      <div>
      <button className='btn btn-primary' onClick={substract}>-</button>
      <span className='btn'>{count}</span>
      <button className='btn btn-primary' onClick={add}>+</button>
      </div>
      <button className='btn btn-primary' onClick={()=>onAdd(count)}>Agregar al carrito</button>
  </div>
)
}

export default Itemcount
