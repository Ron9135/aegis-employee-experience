import React, { useState } from "react";
import {
  Home,
  Map as MapIcon,
  IdCard,
  MessageSquare,
  Menu as MenuIcon,
} from "lucide-react";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import BadgeScreen from "./screens/BadgeScreen";
import ChatScreen from "./screens/ChatScreen";
import MenuScreen from "./screens/MenuScreen";
import FoodScreen from "./screens/FoodScreen";
import IssueScreen from "./screens/IssueScreen";
import EmergencyScreen from "./screens/EmergencyScreen";
import AddResourceScreen from "./screens/AddResourceScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedResources, setSelectedResources] = useState([
    "workday",
    "m365",
    "nurse",
    "discounts",
  ]);

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} selectedResources={selectedResources} />;
      case "add-resource":
        return <AddResourceScreen onNavigate={setActiveTab} selectedResources={selectedResources} setSelectedResources={setSelectedResources} />;
      case "map":
        return <MapScreen />;
      case "badge":
        return <BadgeScreen />;
      case "chat":
        return <ChatScreen />;
      case "menu":
        return <MenuScreen onNavigate={setActiveTab} />;
      case "food":
        return <FoodScreen onNavigate={setActiveTab} />;
      case "issue":
        return <IssueScreen onNavigate={setActiveTab} />;
      case "emergency":
        return <EmergencyScreen onNavigate={setActiveTab} />;
      default:
        return <HomeScreen onNavigate={setActiveTab} selectedResources={selectedResources} />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 overflow-hidden shadow-2xl relative">
      <div className="flex-1 overflow-y-auto pb-20">{renderScreen()}</div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50">
        <NavItem
          icon={<Home />}
          label="Home"
          isActive={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <NavItem
          icon={<MapIcon />}
          label="Map"
          isActive={activeTab === "map"}
          onClick={() => setActiveTab("map")}
        />
        <div className="relative -top-6">
          <button
            onClick={() => setActiveTab("badge")}
            className={`p-4 rounded-full shadow-lg text-white transition-transform ${activeTab === "badge" ? "bg-brand-secondary scale-110" : "bg-brand-primary hover:bg-brand-secondary"}`}
          >
            <IdCard size={28} />
          </button>
        </div>
        <NavItem
          icon={<MessageSquare />}
          label="AI Chat"
          isActive={activeTab === "chat"}
          onClick={() => setActiveTab("chat")}
        />
        <NavItem
          icon={<MenuIcon />}
          label="Menu"
          isActive={activeTab === "menu"}
          onClick={() => setActiveTab("menu")}
        />
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-16 transition-colors ${isActive ? "text-brand-primary" : "text-gray-400 hover:text-gray-600"}`}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
