import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Mail, Briefcase } from 'lucide-react';

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}

const EmployeeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    // Fetch employee data based on id
    // For now, we'll use mock data
    setEmployee({
      id: parseInt(id!),
      name: 'John Doe',
      email: 'john@example.com',
      position: 'Developer',
    });
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employee Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <User className="w-6 h-6 text-gray-500 mr-2" />
          <h2 className="text-xl font-semibold">{employee.name}</h2>
        </div>
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 text-gray-500 mr-2" />
          <p>{employee.email}</p>
        </div>
        <div className="flex items-center mb-6">
          <Briefcase className="w-6 h-6 text-gray-500 mr-2" />
          <p>{employee.position}</p>
        </div>
        <div className="flex justify-between">
          <Link
            to={`/employees/${employee.id}/edit`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit Employee
          </Link>
          <Link
            to="/employees"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;