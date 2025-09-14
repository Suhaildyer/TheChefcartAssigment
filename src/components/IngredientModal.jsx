const FoodTypeIcon = ({ type }) => ( <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${type === 'veg' ? 'border-green-500' : 'border-red-500'}`}><div className={`w-2 h-2 rounded-full ${type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}></div></div>);
const IngredientIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M15.042 21.672L13.684 16.6-9.42 7.16l-2.828 2.828-4.243 4.242 1.414 1.414 2.122-2.121 2.828-2.828 2.829 2.829 2.121 2.121-2.12 2.121 1.413 1.414 4.244-4.243 2.828-2.828 7.16 9.42-5.07 1.358z"/><path d="m21.672 15.042-1.414-1.414 4.243-4.242-1.414-1.414-4.242 4.242-1.415-1.414 4.243-4.243-1.414-1.414-4.243 4.243-1.414-1.414 2.828-2.828 4.243 4.242.707.707 2.122-2.121.707.707 4.242-4.242.707.707 2.122-2.121.707.707"/></svg>);
import { useNavigate } from "react-router-dom";

const IngredientModal = ({ dish, onClose, cart, handleAddToCart, handleRemoveFromCart ,selectIngredient,setRecipe }) => {
    
    if (!dish) return null;
    
    return (
        <div className="fixed inset-0 bg-transprent bg-opacity-50 flex justify-center items-end z-50 backdrop-brightness-25" onClick={onClose}>
            <div className="bg-white rounded-t-2xl w-full max-w-md p-6 relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                        <h3 className="text-2xl font-bold text-gray-900">{dish.name}</h3>
                        <FoodTypeIcon type={dish.type} />
                    </div>
                     {cart[dish.id] ? (
                        <button onClick={() => { handleRemoveFromCart(dish.id); onClose(); }} className="bg-red-100 text-red-600 font-bold py-2 px-6 rounded-lg text-sm border border-red-200 hover:bg-red-200 transition-colors">
                            Remove
                        </button>
                    ) : (
                        <button onClick={() => { handleAddToCart(dish.id); onClose(); }} className="bg-orange-100 text-orange-600 font-bold py-2 px-6 rounded-lg text-sm border border-orange-200 hover:bg-orange-200 transition-colors">
                            Add
                        </button>
                    )}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm"><span className="font-semibold">{dish.cuisine}</span> - {dish.description}</p>
                
                <button className="flex items-center space-x-2 text-orange-500 font-semibold" onClick={()=>selectIngredient(setRecipe(dish))}>
                    <IngredientIcon />
                    <span>Ingredient</span>
                </button>
            </div>
             <style>{`
                @keyframes slide-up {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
                .animate-slide-up { animation: slide-up 0.3s ease-out; }
            `}</style>
        </div>
    );
};
export default IngredientModal;