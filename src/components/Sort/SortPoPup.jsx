import React from 'react'

function SortPoPup({OpenItems, items, active, setActive}) {

   
   

   const changeActive=(index)=>{
      setActive(index)
      OpenItems(false)
   }
   return (
      <div className="sort__popup">
         <ul>
            {
               items.map((name, index) =>
                  <li
                  onClick={()=>changeActive(index)}
                  className={active===index ? 'active':''}
                  key={`${name}_${index}`}
                  >{name}</li>)
            }
         </ul>
      </div>
   )
}

export default SortPoPup
