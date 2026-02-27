import { useState } from "react";
import { QrCode, Shield, RefreshCw, Share2, Building, Briefcase, Mail, Phone, Globe } from "lucide-react";

export default function BadgeScreen() {
  const [mode, setMode] = useState<'access' | 'business'>('access');

  return (
    <div className="flex flex-col h-full bg-brand-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-brand-primary/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-brand-light/20 rounded-full blur-3xl"></div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 z-10 pb-20">
        
        {/* Mode Toggle */}
        <div className="mb-6 bg-white/10 p-1 rounded-full flex gap-1 backdrop-blur-sm border border-white/20">
          <button 
            onClick={() => setMode('access')}
            className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors ${mode === 'access' ? 'bg-white text-brand-secondary shadow-sm' : 'text-white/80 hover:text-white'}`}
          >
            <Building size={16} /> Access
          </button>
          <button 
            onClick={() => setMode('business')}
            className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors ${mode === 'business' ? 'bg-white text-brand-secondary shadow-sm' : 'text-white/80 hover:text-white'}`}
          >
            <Briefcase size={16} /> Business Card
          </button>
        </div>

        {/* Logo Placeholder */}
        <div className="mb-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Shield size={20} className="text-brand-primary" />
          </div>
          <span className="text-white font-bold tracking-widest text-xl uppercase">
            Aegis
          </span>
        </div>

        {/* Badge Card */}
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300">
          {/* Top colored bar */}
          <div className={`h-3 w-full transition-colors ${mode === 'access' ? 'bg-brand-primary' : 'bg-brand-accent'}`}></div>

          <div className="p-8 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mb-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
                alt="Alex Johnson"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">Alex Johnson</h1>
            <p className="text-brand-primary font-medium mt-1">
              Specialist, Marketing Operations
            </p>
            
            {mode === 'access' ? (
              <>
                <p className="text-sm text-gray-500 mt-1">Employee ID: 8472910</p>
                <div className="w-full h-px bg-gray-100 my-6"></div>
                {/* QR Code Area */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 w-full flex flex-col items-center">
                  <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-sm flex items-center justify-center">
                    <QrCode
                      size={140}
                      className="text-gray-800"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-xs text-gray-500 font-medium">
                    <RefreshCw size={12} className="animate-spin-slow" />
                    Auto-refreshes every 30s
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-px bg-gray-100 my-4"></div>
                
                <div className="w-full space-y-3 text-left mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <Mail size={16} />
                    </div>
                    <span>alex.johnson@aegis.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <Phone size={16} />
                    </div>
                    <span>+1 (555) 019-8472</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <Globe size={16} />
                    </div>
                    <span>www.aegis-financial.com</span>
                  </div>
                </div>

                <div className="flex gap-3 w-full">
                  <button className="flex-1 py-3 bg-brand-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-secondary transition-colors shadow-md shadow-brand-primary/20">
                    <QrCode size={18} /> Show QR
                  </button>
                  <button className="flex-1 py-3 bg-brand-accent text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-md shadow-brand-accent/20">
                    <Share2 size={18} /> Share Link
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              {mode === 'access' ? 'Tap to access building' : 'Aegis Financial Services'}
            </p>
          </div>
        </div>

        {/* NFC Indicator */}
        {mode === 'access' && (
          <div className="mt-8 flex flex-col items-center animate-pulse">
            <div className="w-16 h-1 bg-white/30 rounded-full mb-2"></div>
            <div className="w-12 h-1 bg-white/20 rounded-full mb-2"></div>
            <div className="w-8 h-1 bg-white/10 rounded-full"></div>
            <p className="text-white/60 text-xs mt-4 font-medium">
              Hold near reader
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
