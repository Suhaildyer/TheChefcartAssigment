// import { useMemo, useState } from "react";
// import ContentHeader from "./components/ContentHeader";
// import DishList from "./components/DishList";
// import Filters from "./components/Filters";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import IngredientModal from "./components/IngredientModal";
// import  initialDishes  from "./data/mockDishes";
// import { toast } from "react-toastify";
// import { Route, Routes } from "react-router-dom";
// import IngredientPage from "./Pages/IngredientPage";
// export default function App() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('Main Course');
//     const [showVeg, setShowVeg] = useState(false);
//     const [showNonVeg, setShowNonVeg] = useState(false);
//     const [cart, setCart] = useState({}); // { dishId: 1 }
//     const [selectedDish, setSelectedDish] = useState(null);

//     const categories = ['Starter', 'Main Course', 'Desert', 'Sides'];

//     const filteredDishes = useMemo(() => {
//         return initialDishes.filter(dish => {
//             const matchesCategory = dish.category === activeCategory;
//             const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
            
//             if (showVeg && !showNonVeg) {
//                 return matchesCategory && matchesSearch && dish.type === 'veg';
//             }
//             if (!showVeg && showNonVeg) {
//                  return matchesCategory && matchesSearch && dish.type === 'non-veg';
//             }
            
//             return matchesCategory && matchesSearch;
//         });
//     }, [activeCategory, searchQuery, showVeg, showNonVeg]);
    
//     const getCountByCategory = (category) => {
//         return Object.keys(cart).reduce((acc, dishId) => {
//             const dish = initialDishes.find(d => d.id === parseInt(dishId));
//             if (dish && dish.category === category) {
//                 return acc + cart[dishId];
//             }
//             return acc;
//         }, 0);
//     };

//     const totalSelected = Object.keys(cart).length;

//     const handleAddToCart = (dishId) => {
//         setCart(prevCart => ({ ...prevCart, [dishId]: 1 }));
//         toast.success("Dish Added");
//     };

//     const handleRemoveFromCart = (dishId) => {
//         setCart(prevCart => {
//             const newCart = { ...prevCart };
//             delete newCart[dishId];
//             return newCart;
//         });
//         toast.error("Dish Removed");
//     };
    
//     const handleVegToggle = () => {
//         setShowVeg(v => !v);
//         if (showNonVeg) setShowNonVeg(false);
//     };
    
//     const handleNonVegToggle = () => {
//         setShowNonVeg(v => !v);
//         if (showVeg) setShowVeg(false);
//     };

//     const handleSelectDish = (dish) => setSelectedDish(dish);
//     const handleCloseModal = () => setSelectedDish(null);

//     return (
//         <div>
//         <Routes>
//           <Route path="/" element={}
//           <Route path="Ingredient" element={<IngredientPage/>}/>
//         </Routes>
//        </div>
        
//     );
// }
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
