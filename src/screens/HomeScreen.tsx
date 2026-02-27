import React from "react";
import {
  Bell,
  Wifi,
  AlertTriangle,
  Coffee,
  MapPin,
  Search,
  ChevronRight,
  ShieldAlert,
  Plus,
} from "lucide-react";
import { ALL_RESOURCES } from "../data";

export default function HomeScreen({
  onNavigate,
  selectedResources,
}: {
  onNavigate: (screen: string) => void;
  selectedResources: string[];
}) {
  return (
    <div className="flex flex-col min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-brand-primary text-white pt-12 pb-6 px-6 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden border-2 border-white/30">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-brand-light text-sm font-medium">
                Good morning,
              </p>
              <h1 className="text-2xl font-bold">Alex Johnson</h1>
            </div>
          </div>
          <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Bell size={24} />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-brand-accent rounded-full border-2 border-brand-primary"></span>
          </button>
        </div>

        {/* Smart Notification */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-start gap-3">
          <div className="bg-brand-accent/20 p-2 rounded-full text-brand-accent mt-0.5">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Next meeting in 15 mins</h3>
            <p className="text-xs text-white/80 mt-1 leading-relaxed">
              Conference Room 4B is a 4-minute walk away. Start leaving now to
              arrive on time.
            </p>
            <button
              onClick={() => onNavigate("map")}
              className="mt-2 text-xs font-semibold text-brand-accent hover:text-white transition-colors flex items-center gap-1"
            >
              Get Directions <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <div className="flex justify-between gap-4">
          <QuickAction
            icon={<Wifi />}
            label="1-Click WiFi"
            color="bg-blue-100 text-blue-600"
          />
          <QuickAction
            icon={<AlertTriangle />}
            label="Report Issue"
            color="bg-orange-100 text-orange-600"
            onClick={() => onNavigate("issue")}
          />
          <QuickAction
            icon={<ShieldAlert />}
            label="Emergency"
            color="bg-red-100 text-red-600"
            onClick={() => onNavigate("emergency")}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="px-6 pb-8 space-y-6">
        <Section title="Explore Campus">
          <div className="grid grid-cols-2 gap-4">
            <Card
              title="Food & Dining"
              subtitle="Order ahead"
              icon={<Coffee size={24} />}
              bg="bg-white"
              onClick={() => onNavigate("food")}
            />
            <Card
              title="Wayfinding"
              subtitle="Find a room"
              icon={<Search size={24} />}
              bg="bg-white"
              onClick={() => onNavigate("map")}
            />
          </div>
        </Section>

        <Section title="My Resources">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {selectedResources.map((id, index) => {
              const resource = ALL_RESOURCES.find((r) => r.id === id);
              if (!resource) return null;
              return (
                <ResourceItem
                  key={resource.id}
                  title={resource.title}
                  subtitle={resource.subtitle}
                  icon={resource.icon}
                  isLast={index === selectedResources.length - 1}
                />
              );
            })}
            {selectedResources.length === 0 && (
              <div className="p-6 text-center text-sm text-gray-500">
                No resources selected.
              </div>
            )}
          </div>
          <button 
            onClick={() => onNavigate('add-resource')}
            className="w-full mt-3 py-3 border-2 border-dashed border-gray-200 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-50 hover:text-brand-primary hover:border-brand-primary/30 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={16} /> Add Resource
          </button>
        </Section>
      </div>
    </div>
  );
}

function QuickAction({
  icon,
  label,
  color,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 flex-1"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${color}`}
      >
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-700 text-center">
        {label}
      </span>
    </button>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Card({
  title,
  subtitle,
  icon,
  bg,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bg: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${bg} p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-3 hover:shadow-md transition-shadow text-left`}
    >
      <div className="p-2 bg-gray-50 rounded-xl text-brand-primary">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
      </div>
    </button>
  );
}

function ResourceItem({
  title,
  subtitle,
  icon,
  isLast,
}: {
  key?: React.Key;
  title: string;
  subtitle: string;
  icon: string;
  isLast?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${!isLast ? "border-b border-gray-100" : ""}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-brand-light/20 text-brand-primary flex items-center justify-center font-bold text-lg">
          {icon}
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </button>
  );
}
