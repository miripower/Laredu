import React, { useEffect, useState } from "react";

interface Submission {
  id: number;
  assignment_id: number;
  user_id: number;
  submitted_at: string;
  grade: number | null;
}

export default function SubmissionsList() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [assignmentId, setAssignmentId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/submissions", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch(() => setMessage("Error al obtener entregas"));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user || !user.id) {
      setMessage("Error: Usuario no autenticado");
      return;
    }

    fetch("http://127.0.0.1:8000/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        user_id: user.id,
        assignment_id: parseInt(assignmentId),
        submitted_at: new Date().toISOString(),
        grade: null,
      }),
    })
      .then((res) => res.json())
      .then(() => setMessage("Tarea entregada con éxito"))
      .catch(() => setMessage("Error al entregar tarea"));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Entregas de Tareas</h2>
      {message && <p className="text-red-500 text-center">{message}</p>}

      <form onSubmit={handleSubmit} className="mb-6 flex space-x-4">
        <input
          type="number"
          placeholder="ID de la Tarea"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
          value={assignmentId}
          onChange={(e) => setAssignmentId(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer">
          Entregar Tarea
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {submissions.map((submission) => (
          <div key={submission.id} className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-2 hover:scale-102">
            <strong className="text-gray-800">
              ID Tarea: {submission.assignment_id}
            </strong>{" "}
            <span className="text-gray-600">Entregado el {new Date(submission.submitted_at).toLocaleDateString()}</span>{" "}
            {submission.grade !== null ? (
              <span className="text-blue-600 font-bold">Nota: {submission.grade}</span>
            ) : (
              <span className="text-gray-500">Sin nota</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}