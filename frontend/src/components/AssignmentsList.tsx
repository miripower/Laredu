import { useEffect, useState } from "react";

interface Assignment {
  id: number;
  title: string;
  due_date: string;
  subject_id: number;
}

export default function AssignmentsList() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/assignments", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((data) => setAssignments(data))
      .catch(() => setError("Error al obtener las tareas"));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Lista de Tareas</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {assignment.title}
            </h3>
            <p className="text-gray-600">Fecha de entrega: {assignment.due_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}