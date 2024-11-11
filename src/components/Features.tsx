import React from 'react';
import { Shield, Clock, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-900" />,
      title: "Professionnels certifiés",
      description: "Tous nos artisans sont vérifiés et certifiés pour garantir un service de qualité."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-900" />,
      title: "Service rapide",
      description: "Trouvez un professionnel disponible en quelques clics, 24/7."
    },
    {
      icon: <Star className="w-12 h-12 text-blue-900" />,
      title: "Avis vérifiés",
      description: "Consultez les évaluations des clients pour choisir le meilleur professionnel."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Pourquoi choisir lm3lm ?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une solution simple et efficace pour tous vos besoins
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;