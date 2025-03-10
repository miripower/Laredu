import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

interface NavbarProps {
    onLogout: () => void;
}

export default function Navbar({ onLogout }: NavbarProps) {
    return (
        <nav className="bg-blue-700 text-white py-6 px-12 flex justify-between items-center shadow-lg">
            <Link to="/" className="text-3xl font-bold">📚 Laredu</Link>
            <div className="flex items-center gap-12 text-lg">
                <Link to="/courses" className="p-2 hover:bg-blue-500 transition-all cursor-pointer rounded-lg hover:scale-105">Cursos</Link>
                <Link to="/subjects" className="p-2 hover:bg-blue-500 transition-all cursor-pointer rounded-lg hover:scale-105">Asignaturas</Link>
                <Link to="/assignments" className="p-2 hover:bg-blue-500 transition-all cursor-pointer rounded-lg hover:scale-105">Tareas</Link>
                <Link to="/submissions" className="p-2 hover:bg-blue-500 transition-all cursor-pointer rounded-lg hover:scale-105">Entregas</Link>
                <Link to="/messages" className="p-2 hover:bg-blue-500 transition-all cursor-pointer rounded-lg hover:scale-105">Mensajes</Link>
            </div>
            <LogoutButton onLogout={onLogout} />
        </nav>
    );
} 