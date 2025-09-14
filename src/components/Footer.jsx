import { FaChevronRight } from "react-icons/fa";


const Footer = ({ totalSelected }) => (
     <footer className="p-4 bg-white border-t sticky bottom-0">
        <div className="flex justify-between items-center bg-orange-50 p-3 rounded-lg">
            <p className="text-orange-600 font-bold">Total Dish Selected {totalSelected}</p>
            <FaChevronRight />
        </div>
        <button className="w-full mt-3 bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Continue
        </button>
    </footer>
);

export default Footer;