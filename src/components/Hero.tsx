import React from 'react';
import { Wrench, UserCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-blue-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Trouvez des professionnels qualifiés près de chez vous
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Connectez-vous avec des artisans certifiés pour tous vos besoins à domicile. Simple, rapide et fiable.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/professional-signup')}
                className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2"
              >
                <Wrench size={20} />
                Je suis un professionnel
              </button>
              <button 
                onClick={() => navigate('/client-signup')}
                className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2"
              >
                <UserCircle2 size={20} />
                Je suis un client
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              alt="Professional at work"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </div>
  );
}

export default Hero;