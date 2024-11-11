import React from 'react';
import { useLocation } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';

const ClientDashboard = () => {
  const location = useLocation();
  const { serviceNeeded } = location.state as { serviceNeeded: string };

  // Simulated service providers based on selected service
  const serviceProviders = [
    {
      id: 1,
      name: "Hassan El Amrani",
      profession: serviceNeeded,
      rating: 4.8,
      reviews: 127,
      location: "Casablanca - Maârif",
      availability: "Disponible aujourd'hui",
      price: "À partir de 20 DH/h"
    },
    {
      id: 2,
      name: "Fatima Benali",
      profession: serviceNeeded,
      rating: 4.9,
      reviews: 89,
      location: "Casablanca - Ain Diab",
      availability: "Disponible demain",
      price: "À partir de 18 DH/h"
    },
    {
      id: 3,
      name: "Youssef Tazi",
      profession: serviceNeeded,
      rating: 4.7,
      reviews: 156,
      location: "Rabat - Agdal",
      availability: "Disponible cette semaine",
      price: "À partir de 25 DH/h"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Professionnels disponibles</h1>
          <p className="mt-2 text-gray-600">Les meilleurs {serviceNeeded}s près de chez vous</p>
        </div>

        <div className="space-y-6">
          {serviceProviders.map((provider) => (
            <div key={provider.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                  <p className="text-gray-600">{provider.profession}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-gray-900">{provider.rating}</span>
                  <span className="ml-1 text-gray-600">({provider.reviews} avis)</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {provider.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  {provider.availability}
                </div>
                <div className="text-gray-600">
                  {provider.price}
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Voir le profil
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800">
                  Contacter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;