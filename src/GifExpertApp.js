import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


// const useAdd = () => {
  
//   const [categories, setCategories] = useState(['One Punch']);

//   const handledAdd = (inputValue) => {
//     //setCategories([...categories, inputValue]);
//     setCategories(cats => [...cats, inputValue]);
//   }

//   return {categories, handledAdd}
// }

export const GifExpertApp = () => {

  //const {categories, handledAdd} = useAdd();
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h1 >GifExpertApp</h1>
      <AddCategory setCategories = { setCategories }/>
      <hr/>
      <ol>
        {
          categories.map(category => (
            <GifGrid 
              key = { category }
              category = { category } 
            />
          ))
        }
      </ol>
    </>
  );
}
