import React from 'react';
import { Users, UserPlus, BarChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Total Employees</h2>
          <p className="text-3xl font-bold">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <UserPlus className="w-12 h-12 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">New Hires (This Month)</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart className="w-12 h-12 text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Departments</h2>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;