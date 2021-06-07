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
               items.map((obj, index) =>
                  <li
                  onClick={()=>changeActive(index)}
                  className={active===index ? 'active':''}
                  key={`${obj.type}_${index}`}
                  >{obj.name}</li>)
            }
         </ul>
      </div>
   )
}

export default SortPoPup
