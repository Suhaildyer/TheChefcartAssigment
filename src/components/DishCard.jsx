
const FoodTypeIcon = ({ type }) => ( <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${type === 'veg' ? 'border-green-500' : 'border-red-500'}`}><div className={`w-2 h-2 rounded-full ${type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}></div></div>);
const IngredientIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M15.042 21.672L13.684 16.6-9.42 7.16l-2.828 2.828-4.243 4.242 1.414 1.414 2.122-2.121 2.828-2.828 2.829 2.829 2.121 2.121-2.12 2.121 1.413 1.414 4.244-4.243 2.828-2.828 7.16 9.42-5.07 1.358z"/><path d="m21.672 15.042-1.414-1.414 4.243-4.242-1.414-1.414-4.242 4.242-1.415-1.414 4.243-4.243-1.414-1.414-4.243 4.243-1.414-1.414 2.828-2.828 4.243 4.242.707.707 2.122-2.121.707.707 4.242-4.242.707.707 2.122-2.121.707.707"/></svg>);

const DishCard = ({ dish, cart, handleAddToCart, handleRemoveFromCart, onSelectDish }) => (
    <div className="flex p-4 space-x-4 " >
        <div className="flex-grow" onClick={() => onSelectDish(dish)}>
            <div className="flex items-center space-x-2" >
                <h4 className="font-bold text-gray-900">{dish.name}</h4>
                <FoodTypeIcon type={dish.type} />
            </div>
            <p className="text-sm text-gray-600 mt-1">
                {dish.description.substring(0, 50)}...
                <button className="text-orange-500 font-semibold ml-1">Read more</button>
            </p>
            <button  className="flex items-center space-x-1 mt-3 text-orange-500 text-sm font-semibold">
                <IngredientIcon />
                <span>Ingredient</span>
            </button>
        </div>
        <div className="flex-shrink-0 w-24 h-24 relative">
            <img src={dish.image} alt={dish.name} className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20">
                {cart[dish.id] ? (
                    <button onClick={() => handleRemoveFromCart(dish.id)} className="w-full bg-red-500 text-white font-bold py-1 px-4 rounded-lg shadow-lg hover:bg-red-600 transition-colors">
                        Remove
                    </button>
                ) : (
                    <button onClick={() => handleAddToCart(dish.id)} className="w-full bg-white text-orange-500 font-bold py-1 px-4 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        Add
                    </button>
                )}
            </div>
        </div>
    </div>
);
export default DishCard;