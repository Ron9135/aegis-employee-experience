import { useState } from "react";
import {
  ArrowLeft,
  Camera,
  MapPin,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function IssueScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) {
  const [step, setStep] = useState(1);

  if (step === 2) {
    return (
      <div className="flex flex-col h-full bg-white items-center justify-center p-6 text-center pb-24">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Issue Reported
        </h1>
        <p className="text-gray-500 mb-8">
          Ticket #REQ-8492 has been created. Facilities team has been notified
          and you will receive updates via the app.
        </p>
        <button
          onClick={() => onNavigate("home")}
          className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-secondary transition-colors"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-4 px-4 flex items-center gap-3 border-b border-gray-100 sticky top-0 z-10">
        <button
          onClick={() => onNavigate("home")}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Report an Issue</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Issue Category
          </label>
          <div className="grid grid-cols-2 gap-3">
            <CategoryButton label="Facilities" active />
            <CategoryButton label="IT / Tech" />
            <CategoryButton label="Cleaning" />
            <CategoryButton label="Other" />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Location
          </label>
          <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3">
            <MapPin size={20} className="text-brand-primary" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                Auto-detected
              </p>
              <p className="text-xs text-gray-500">Floor 4, Near Restrooms</p>
            </div>
            <button className="text-xs font-bold text-brand-primary">
              Edit
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            rows={4}
            placeholder="Please describe the issue..."
            className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm outline-none focus:border-brand-primary resize-none"
          ></textarea>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Add Photo (Optional)
          </label>
          <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center gap-2 text-gray-500 bg-white hover:bg-gray-50 transition-colors">
            <Camera size={32} className="text-gray-400" />
            <span className="text-sm font-medium">Tap to take a photo</span>
          </button>
        </div>

        {/* Submit */}
        <button
          onClick={() => setStep(2)}
          className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-secondary transition-colors mt-8 shadow-md shadow-brand-primary/20"
        >
          <AlertCircle size={20} /> Submit Report
        </button>
      </div>
    </div>
  );
}

function CategoryButton({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-colors ${active ? "bg-brand-primary/10 border-brand-primary text-brand-primary" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}`}
    >
      {label}
    </button>
  );
}
