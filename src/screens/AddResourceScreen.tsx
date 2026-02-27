import React, { useState } from 'react';
import { ArrowLeft, GripVertical, Plus, Minus } from 'lucide-react';
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
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const toggleResource = (id: string) => {
    if (selectedResources.includes(id)) {
      setSelectedResources(selectedResources.filter(rId => rId !== id));
    } else {
      setSelectedResources([...selectedResources, id]);
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIdx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === targetIdx) return;

    const newSelected = [...selectedResources];
    const [draggedItem] = newSelected.splice(draggedIdx, 1);
    newSelected.splice(targetIdx, 0, draggedItem);

    setSelectedResources(newSelected);
    setDraggedIdx(null);
  };

  const selectedItems = selectedResources.map(id => ALL_RESOURCES.find(r => r.id === id)).filter(Boolean) as typeof ALL_RESOURCES;
  const availableItems = ALL_RESOURCES.filter(r => !selectedResources.includes(r.id));

  return (
    <div className="flex flex-col min-h-full bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-4 px-4 flex items-center gap-3 border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <button onClick={() => onNavigate('home')} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Personalize Resources</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Selected Section */}
        <div>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Selected (Drag to Reorder)</h2>
          <div className="space-y-2">
            {selectedItems.map((resource, index) => (
              <div
                key={resource.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={() => setDraggedIdx(null)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all cursor-grab active:cursor-grabbing ${draggedIdx === index ? 'opacity-50 ring-2 ring-brand-primary' : 'bg-white border-gray-100 shadow-sm hover:border-brand-primary/30'
                  }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-gray-300 p-1 flex-shrink-0">
                    <GripVertical size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg bg-brand-primary text-white flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div className="text-left flex-1 select-none">
                    <h4 className="font-semibold text-sm text-gray-900">{resource.title}</h4>
                    <p className="text-xs text-gray-500 truncate">{resource.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleResource(resource.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors flex-shrink-0 ml-2"
                  title="Remove"
                >
                  <Minus size={16} />
                  <span className="sr-only">Remove</span>
                </button>
              </div>
            ))}
            {selectedItems.length === 0 && (
              <div className="p-4 text-center text-sm text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
                No resources selected.
              </div>
            )}
          </div>
        </div>

        {/* Available Section */}
        <div>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Available Resources</h2>
          <div className="space-y-2">
            {availableItems.map((resource) => (
              <button
                key={resource.id}
                onClick={() => toggleResource(resource.id)}
                className="w-full flex items-center justify-between p-3 rounded-2xl border bg-white border-gray-100 hover:border-gray-200 shadow-sm transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg bg-gray-50 text-gray-400">
                    {resource.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm text-gray-700">{resource.title}</h4>
                    <p className="text-xs text-gray-400">{resource.subtitle}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10 transition-colors">
                  <Plus size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
