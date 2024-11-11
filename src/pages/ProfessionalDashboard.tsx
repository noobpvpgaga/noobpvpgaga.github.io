import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Clock, Euro } from 'lucide-react';

const ProfessionalDashboard = () => {
  const location = useLocation();
  const { profession } = location.state as { profession: string };

  // Simulated job offers based on profession
  const jobOffers = [
    {
      id: 1,
      title: `Besoin d'un ${profession}`,
      description: "Problème urgent à résoudre",
      location: "Casablanca - Maârif",
      budget: "200 DH",
      timing: "Dès que possible",
      client: "Ahmed B.",
      status: "Nouveau"
    },
    {
      id: 2,
      title: `Recherche ${profession} expérimenté`,
      description: "Installation complète à réaliser",
      location: "Casablanca - Ain Diab",
      budget: "350 DH",
      timing: "Cette semaine",
      client: "Karim M.",
      status: "Nouveau"
    },
    {
      id: 3,
      title: `${profession} pour rénovation`,
      description: "Travaux de rénovation dans appartement",
      location: "Rabat - Agdal",
      budget: "500 DH",
      timing: "La semaine prochaine",
      client: "Yasmine L.",
      status: "Nouveau"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="mt-2 text-gray-600">Offres disponibles pour {profession}</p>
        </div>

        <div className="space-y-6">
          {jobOffers.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {job.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Euro className="h-5 w-5 mr-2" />
                  {job.budget}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  {job.timing}
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Client: {job.client}
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800">
                  Postuler
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;