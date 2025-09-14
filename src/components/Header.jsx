import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Header = ({ searchQuery, setSearchQuery }) => (
    <header className="p-4 border-b bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-4">
            <button className="p-1"><FaChevronLeft /></button>
            <div className="relative flex-grow">
                <input
                    type="text"
                    placeholder="Search dish for your party......"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3"><FaSearch /></div>
            </div>
        </div>
    </header>
);
export default Header;