import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    })
      .then((res) => res.json())
      .then(() => setMessage("Usuario registrado con éxito"))
      .catch(() => setMessage("Error en el registro"));
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-sky-300 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Registro</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" placeholder="Nombre" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
          <select className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer">Registrarse</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          ¿Ya tienes una cuenta? <Link to="/" className="text-blue-600 hover:underline">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
}