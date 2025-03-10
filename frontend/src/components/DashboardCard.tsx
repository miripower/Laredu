import { Link } from "react-router-dom";

interface DashboardCardProps {
  title: string;
  description: string;
  link: string;
}

export default function DashboardCard({ title, description, link }: DashboardCardProps) {
  return (
    <Link to={link} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}