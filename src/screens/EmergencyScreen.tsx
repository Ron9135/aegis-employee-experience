import React from "react";
import { ArrowLeft, Phone, ShieldAlert, Navigation, Info } from "lucide-react";

export default function EmergencyScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) {
  return (
    <div className="flex flex-col h-full bg-red-50 pb-24">
      {/* Header */}
      <div className="bg-red-600 pt-12 pb-6 px-4 flex items-center gap-3 sticky top-0 z-10 text-white shadow-md">
        <button
          onClick={() => onNavigate("home")}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold flex items-center gap-2">
          <ShieldAlert size={24} /> Emergency
        </h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Active Alert (Simulated) */}
        <div className="bg-white border-2 border-red-500 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <div className="flex items-start gap-3">
            <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1 animate-pulse">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Fire Drill in Progress
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Please proceed calmly to the nearest exit. Do not use elevators.
                Follow instructions from floor wardens.
              </p>

              <button className="mt-4 w-full py-3 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-md">
                <Navigation size={18} /> Route to Nearest Exit
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">
            Emergency Contacts
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
            <ContactItem
              title="Campus Security"
              desc="Available 24/7"
              phone="555-0199"
              urgent
            />
            <ContactItem
              title="Medical Emergency"
              desc="Onsite Nurse / EMS"
              phone="911"
              urgent
            />
            <ContactItem
              title="IT Security Incident"
              desc="Report data breach"
              phone="555-0188"
            />
          </div>
        </div>

        {/* Procedures */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">
            Procedures
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <ProcedureCard title="Evacuation" icon={<Navigation size={20} />} />
            <ProcedureCard
              title="Active Shooter"
              icon={<ShieldAlert size={20} />}
            />
            <ProcedureCard title="Medical" icon={<Info size={20} />} />
            <ProcedureCard title="Severe Weather" icon={<Info size={20} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  title,
  desc,
  phone,
  urgent,
}: {
  title: string;
  desc: string;
  phone: string;
  urgent?: boolean;
}) {
  return (
    <div className="p-4 border-b border-gray-50 last:border-0 flex items-center justify-between">
      <div>
        <h4
          className={`font-bold text-sm ${urgent ? "text-red-600" : "text-gray-900"}`}
        >
          {title}
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      </div>
      <button
        className={`w-10 h-10 rounded-full flex items-center justify-center ${urgent ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"}`}
      >
        <Phone size={18} />
      </button>
    </div>
  );
}

function ProcedureCard({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <button className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors text-center">
      <div className="text-gray-500">{icon}</div>
      <span className="text-xs font-bold text-gray-700">{title}</span>
    </button>
  );
}
