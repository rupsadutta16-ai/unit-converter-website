import { FaCircle } from "react-icons/fa6";
const Footer = ({ dark }) => {
    return (
        <footer
            className={`mt-20 py-7  text-center border-t 
        ${dark ? "bg-gray-900 border-gray-700 text-gray-200" : "bg-gray-200 border-gray-400 text-gray-700"}
      `}
        >

            <p className="text-blue-500 text-md md:text-lg font-medium mb-2">
                Simple. Fast. Reliable unit conversions.
            </p>


            <p className={`flex justify-center items-center gap-2 text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
                <span>&copy; 2025 QuickConvert</span> <FaCircle className="text-[6px]" /> <span>Designed & Developed by Rupsa</span>
            </p>
        </footer>
    );
};

export default Footer;
