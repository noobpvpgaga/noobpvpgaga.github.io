import React from 'react';
import { Wrench, Zap, Flame, PaintBucket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-blue-900" />,
      title: 'Plomberie',
      description: 'Installation, réparation et maintenance de systèmes de plomberie',
      price: 'À partir de 18 DH/heure'
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-900" />,
      title: 'Électricité',
      description: 'Installation électrique, dépannage et mise aux normes',
      price: 'À partir de 20 DH/heure'
    },
    {
      icon: <Flame className="h-12 w-12 text-blue-900" />,
      title: 'Chauffagiste',
      description: 'Installation et maintenance de systèmes de chauffage',
      price: 'À partir de 20 DH/heure'
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-blue-900" />,
      title: 'Rénovation',
      description: 'Travaux de peinture, carrelage et rénovation générale',
      price: 'À partir de 16 DH/heure'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Nos Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Des services professionnels adaptés à vos besoins
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <p className="text-blue-900 font-semibold">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Vous ne trouvez pas le service que vous cherchez ?
          </h2>
          <p className="text-blue-100 mb-6">
            Contactez-nous pour tout autre type de service dont vous avez besoin
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;