import React from 'react';
import { Shield, Users, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">À propos de lm3lm</h1>
          <p className="mt-4 text-xl text-gray-600">
            Votre plateforme de confiance pour trouver des artisans qualifiés au Maroc
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-blue-900" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Sécurité et Confiance</h3>
              <p className="mt-2 text-gray-600">
                Tous nos artisans sont vérifiés et certifiés pour garantir des services de qualité.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-900" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Communauté Grandissante</h3>
              <p className="mt-2 text-gray-600">
                Des milliers d'artisans et de clients satisfaits à travers le Maroc.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <ThumbsUp className="h-12 w-12 text-blue-900" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Service de Qualité</h3>
              <p className="mt-2 text-gray-600">
                Un système d'évaluation transparent pour garantir la meilleure expérience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Notre Mission</h2>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            lm3lm a pour mission de faciliter la mise en relation entre les artisans qualifiés et les clients au Maroc. 
            Nous croyons en la valorisation du travail artisanal et en l'importance de fournir des services de qualité 
            à des prix équitables.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;