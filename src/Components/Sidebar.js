import React from "react";
import { FaFire } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col justify-start items-center bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<FaFire size={28} />} />
      <SidebarIcon icon={<FaFire size={28} />} />
      <SidebarIcon icon={<FaFire size={28} />} />
      <SidebarIcon icon={<FaFire size={28} />} />
      <SidebarIcon icon={<FaFire size={28} />} />
    </div>
  );
};

export default Sidebar;

const SidebarIcon = ({ icon, text="tooltip" }) => {
  return <div className="sidebar-icon group">{icon}
  <span className="sidebar-tooltip group-hover:scale-100">
    {text}</span></div>;
};
