import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { ALL_RESOURCES } from '../data';

export default function AddResourceScreen({ 
  onNavigate, 
  selectedResources, 
  setSelectedResources 
}: { 
  onNavigate: (screen: string) => void,
  selectedResources: string[],
  setSelectedResources: (ids: string[]) => void
}) {
  const toggleResource = (id: string) => {
    if (selectedResources.includes(id)) {
      setSelectedResources(selectedResources.filter(rId => rId !== id));
    } else {
      setSelectedResources([...selectedResources, id]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-4 px-4 flex items-center gap-3 border-b border-gray-100 sticky top-0 z-10">
        <button onClick={() => onNavigate('home')} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Personalize Resources</h1>
      </div>

      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-500 mb-2 px-2">Select the resources you want to appear on your home screen.</p>
        
        {ALL_RESOURCES.map((resource) => {
          const isSelected = selectedResources.includes(resource.id);
          return (
            <button 
              key={resource.id}
              onClick={() => toggleResource(resource.id)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                isSelected ? 'bg-brand-primary/5 border-brand-primary/30' : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  isSelected ? 'bg-brand-primary text-white' : 'bg-brand-light/20 text-brand-primary'
                }`}>
                  {resource.icon}
                </div>
                <div className="text-left">
                  <h4 className={`font-semibold text-sm ${isSelected ? 'text-brand-primary' : 'text-gray-900'}`}>{resource.title}</h4>
                  <p className="text-xs text-gray-500">{resource.subtitle}</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                isSelected ? 'bg-brand-primary border-brand-primary text-white' : 'border-gray-300 text-transparent'
              }`}>
                <Check size={14} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
