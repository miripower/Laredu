interface LogoutProps {
    onLogout: () => void;
}

export default function LogoutButton({ onLogout }: LogoutProps) {
    return (
        <button
            onClick={onLogout}
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 cursor-pointer transition-all hover:scale-105"
        >
            Cerrar Sesión
        </button>
    );
} 