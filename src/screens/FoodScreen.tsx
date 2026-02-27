import React from "react";
import { ArrowLeft, Coffee, ShoppingBag, Clock } from "lucide-react";

export default function FoodScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) {
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
        <h1 className="text-xl font-bold text-gray-900">Food & Dining</h1>
        <div className="ml-auto relative">
          <button className="p-2 rounded-full bg-brand-primary/10 text-brand-primary">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-brand-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              2
            </span>
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <CategoryPill label="All" active />
          <CategoryPill label="Coffee" icon={<Coffee size={14} />} />
          <CategoryPill label="Lunch" />
          <CategoryPill label="Snacks" />
        </div>

        {/* Featured */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            Featured Today
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-32 bg-gray-200 relative">
              <img
                src="https://picsum.photos/seed/food1/400/200"
                alt="Special"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded-md">
                Special
              </div>
            </div>
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900">
                  Artisan Sandwich Combo
                </h3>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <Clock size={12} /> Ready in 10 mins
                </p>
              </div>
              <span className="font-bold text-brand-primary">$12.50</span>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full py-2 bg-brand-primary text-white rounded-xl font-semibold text-sm hover:bg-brand-secondary transition-colors">
                Add to Order
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            Popular Items
          </h2>
          <div className="space-y-3">
            <MenuItem
              title="Iced Caramel Macchiato"
              desc="Espresso, vanilla, milk, caramel drizzle"
              price="$4.50"
              img="https://picsum.photos/seed/coffee/100/100"
            />
            <MenuItem
              title="Chicken Caesar Salad"
              desc="Grilled chicken, romaine, parmesan, croutons"
              price="$9.00"
              img="https://picsum.photos/seed/salad/100/100"
            />
            <MenuItem
              title="Avocado Toast"
              desc="Sourdough, smashed avocado, chili flakes"
              price="$7.50"
              img="https://picsum.photos/seed/toast/100/100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryPill({
  label,
  active,
  icon,
}: {
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <button
      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border flex items-center gap-2 ${active ? "bg-brand-secondary text-white border-brand-secondary" : "bg-white text-gray-600 border-gray-200 shadow-sm"}`}
    >
      {icon} {label}
    </button>
  );
}

function MenuItem({
  title,
  desc,
  price,
  img,
}: {
  title: string;
  desc: string;
  price: string;
  img: string;
}) {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
      <div className="w-20 h-20 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{desc}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-brand-primary text-sm">{price}</span>
          <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors font-bold">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
