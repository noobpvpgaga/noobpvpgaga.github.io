import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-blue-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="pt-16 pb-12 px-6 sm:pt-20 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                <span className="block">Prêt à commencer ?</span>
                <span className="block">Inscrivez-vous gratuitement aujourd'hui.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-50">
                Rejoignez notre communauté de professionnels et clients satisfaits.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Commencer maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;