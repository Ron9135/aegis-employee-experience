import { Search, MapPin, Navigation, Layers } from "lucide-react";

export default function MapScreen() {
  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Search Bar Overlay */}
      <div className="absolute top-0 w-full p-6 z-10 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="bg-white rounded-2xl shadow-lg flex items-center px-4 py-3 gap-3">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search rooms, people, amenities..."
            className="flex-1 bg-transparent outline-none text-sm font-medium"
          />
        </div>

        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
          <FilterPill label="Meeting Rooms" active />
          <FilterPill label="Restrooms" />
          <FilterPill label="Cafeteria" />
          <FilterPill label="Exits" />
        </div>
      </div>

      {/* Map Area (Placeholder) */}
      <div className="flex-1 bg-[#e5e7eb] relative overflow-hidden">
        {/* Fake Map Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#9ca3af 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Fake Building Outline */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 border-4 border-white bg-gray-200/50 rounded-lg shadow-xl">
          <div className="w-full h-full relative">
            {/* Rooms */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded border-2 border-gray-300 flex items-center justify-center text-xs font-bold text-gray-400">
              4A
            </div>
            <div className="absolute top-4 left-28 w-32 h-20 bg-brand-primary/20 rounded border-2 border-brand-primary flex flex-col items-center justify-center text-xs font-bold text-brand-primary shadow-[0_0_15px_rgba(0,71,187,0.3)]">
              <span>4B</span>
              <span className="text-[8px] font-normal">Next Meeting</span>
            </div>
            <div className="absolute bottom-4 right-4 w-40 h-32 bg-white rounded border-2 border-gray-300 flex items-center justify-center text-xs font-bold text-gray-400">
              Cafeteria
            </div>

            {/* User Location */}
            <div className="absolute bottom-12 left-12 flex flex-col items-center">
              <div className="w-4 h-4 bg-brand-accent rounded-full border-2 border-white shadow-md z-10 relative">
                <div className="absolute inset-0 bg-brand-accent rounded-full animate-ping opacity-75"></div>
              </div>
            </div>

            {/* Path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 5 }}
            >
              <path
                d="M 56 180 L 56 100 L 170 100"
                fill="none"
                stroke="#0047bb"
                strokeWidth="4"
                strokeDasharray="8 4"
                className="animate-[dash_1s_linear_infinite]"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="absolute bottom-0 w-full bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-6 pb-24 z-10">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Conference Room 4B
            </h2>
            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              <MapPin size={14} /> Floor 4, North Wing
            </p>
          </div>
          <div className="bg-brand-light/20 text-brand-primary px-3 py-1 rounded-full text-xs font-bold">
            4 min walk
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-brand-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md shadow-brand-primary/30">
            <Navigation size={18} /> Start Navigation
          </button>
          <button className="p-3 bg-gray-100 text-gray-700 rounded-xl font-semibold flex items-center justify-center">
            <Layers size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -12;
          }
        }
      `}</style>
    </div>
  );
}

function FilterPill({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold border ${active ? "bg-brand-primary text-white border-brand-primary" : "bg-white text-gray-600 border-gray-200 shadow-sm"}`}
    >
      {label}
    </button>
  );
}
