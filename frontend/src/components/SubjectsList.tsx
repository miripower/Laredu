import { useEffect, useState } from "react";

interface Subject {
  id: number;
  name: string;
  course_id: number;
}

export default function SubjectsList() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/subjects", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((data) => setSubjects(data))
      .catch(() => setError("Error al obtener las asignaturas"));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Asignaturas</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
            <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
            <p className="text-gray-600">ID Curso: {subject.course_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}