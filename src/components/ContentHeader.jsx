const ContentHeader = ({ activeCategory, count, handleVegToggle, handleNonVegToggle, showVeg, showNonVeg }) => (
    <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-gray-800">
            {activeCategory}s Selected ({count})
        </h2>
        <div className="flex items-center space-x-2">
            <button onClick={handleVegToggle} className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${showVeg ? 'bg-green-500 justify-end' :'bg-green-300 justify-start'}`}>
                <span className="w-5 h-5 bg-white rounded-full shadow-md transform mx-0.5"></span>
            </button>
            <button onClick={handleNonVegToggle} className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${showNonVeg ? 'bg-red-500 justify-end' : 'bg-red-300 justify-start'}`}>
                <span className="w-5 h-5 bg-white rounded-full shadow-md transform mx-0.5"></span>
            </button>
        </div>
    </div>
);
export default ContentHeader;