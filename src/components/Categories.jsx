
import React from 'react'


function Categories({ items, onClickItem }) {

   

   const [itemCategory, setItemCategory] = React.useState(null)

   const changeItemCategory = (index) => {
      setItemCategory(index)
      onClickItem(index)

   }

   return (
      <div>
         <div className="categories">
            <ul>
               <li
                 onClick={()=>setItemCategory(null)}
                 className={itemCategory===null ? 'active':''}
               >Все</li>

               {items&&
                  items.map((name, index) =>
                     <li
                        onClick={() => changeItemCategory(index)}
                        className={itemCategory===index ? 'active':''}
                        key={`${name}_${index}`}>
                        {name}</li>)

               }
            </ul>
         </div>
      </div >
   )
}

export default Categories
