import React from 'react';
import {
  User,
  FolderKanban,
  BarChart2,
  Settings,
  PackageOpen,
  LayoutDashboard,
  ArrowUpRight,
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const DashboardAdminPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
    </div>
  );
};

export default DashboardAdminPage;
