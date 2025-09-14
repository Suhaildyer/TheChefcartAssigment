import { FaChevronUp } from "react-icons/fa";
import DishCard from "./DishCard";

const DishList = ({ dishes, cart, handleAddToCart, handleRemoveFromCart, onSelectDish }) => (
    <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold text-gray-700">North Indian</h3>
            <FaChevronUp />
        </div>
        <div className="divide-y">
            {dishes.length > 0 ? dishes.map(dish => (
                <DishCard 
                    key={dish.id} 
                    dish={dish} 
                    cart={cart}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    onSelectDish={onSelectDish}
                />
            )) : (
                <p className="text-center text-gray-500 p-8">No dishes match your criteria.</p>
            )}
        </div>
    </div>
);
export default DishList;