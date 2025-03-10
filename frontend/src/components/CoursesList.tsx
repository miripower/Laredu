import { useEffect, useState } from "react";

interface Course {
  id: number;
  name: string;
  description: string;
}

export default function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/courses", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch(() => setError("Error al obtener los cursos"));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Cursos</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {course.name}
            </h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}