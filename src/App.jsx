
import initialDishes from './data/mockDishes'
import React, { useState } from 'react'
import MenuPage from './Pages/MenuPage'
import IngredientPage from './Pages/IngredientPage'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const App = () => { 
  const [recipe, setRecipe]=useState({})
  const navigate=useNavigate()
  const selectIngredient=()=>{
    navigate('/Ingredient')
  }
  
 
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<MenuPage selectIngredient={selectIngredient}  setRecipe={setRecipe}/>}/>
          <Route path="Ingredient" element={<IngredientPage recipe={recipe} />}/>
        </Routes>
       </div>
      
    </div>
  )
}

export default App;
