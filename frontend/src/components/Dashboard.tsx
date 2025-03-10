import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Bienvenido de nuevo</h1>
      <p className="text-gray-600 text-lg mb-6">Gestiona tus cursos, asignaturas y tareas desde aquí.</p>

      <div className="grid grid-cols-3 gap-6">
        <DashboardCard title="Cursos" description="Administra tus cursos y explora contenido nuevo." link="/courses" />
        <DashboardCard title="Asignaturas" description="Consulta las asignaturas disponibles y su contenido." link="/subjects" />
        <DashboardCard title="Tareas" description="Gestiona tus tareas pendientes y completadas." link="/assignments" />
        <DashboardCard title="Entregas" description="Revisa y sube entregas de tus actividades." link="/submissions" />
        <DashboardCard title="Mensajes" description="Consulta y responde mensajes de profesores." link="/messages" />
      </div>
    </div>
  );
}