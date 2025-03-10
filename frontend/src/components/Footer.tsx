import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-blue-700 text-white py-6 px-12 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold">📚 Laredu</h2>
                <p className="text-sm">© {new Date().getFullYear()} Laredu. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    );
}