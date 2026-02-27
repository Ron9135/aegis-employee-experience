import React from "react";
import {
  User,
  Settings,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  Building,
  Smartphone,
} from "lucide-react";

export default function MenuScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-6 px-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">Menu</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Summary */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-900">Alex Johnson</h2>
            <p className="text-sm text-gray-500">alex.johnson@aegis.com</p>
            <button className="mt-1 text-xs font-semibold text-brand-primary">
              View Profile
            </button>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-4">
          <MenuSection title="Workplace">
            <MenuItem
              icon={<Building size={20} />}
              label="Facilities & Maintenance"
              onClick={() => onNavigate("issue")}
            />
            <MenuItem
              icon={<Smartphone size={20} />}
              label="IT Support"
              onClick={() => onNavigate("issue")}
            />
            <MenuItem icon={<FileText size={20} />} label="Company Policies" />
          </MenuSection>

          <MenuSection title="Account">
            <MenuItem icon={<User size={20} />} label="Personal Information" />
            <MenuItem icon={<Settings size={20} />} label="App Settings" />
            <MenuItem icon={<HelpCircle size={20} />} label="Help & Feedback" />
          </MenuSection>
        </div>

        <button className="w-full py-4 mt-4 bg-white border border-gray-200 rounded-xl text-red-600 font-semibold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </div>
  );
}

function MenuSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-2">
        {title}
      </h3>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-3 text-gray-700">
        <div className="text-gray-400">{icon}</div>
        <span className="font-medium text-sm">{label}</span>
      </div>
      <ChevronRight size={18} className="text-gray-300" />
    </button>
  );
}
