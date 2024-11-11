import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Comment fonctionne lm3lm ?",
      answer: "lm3lm met en relation les clients avec des artisans qualifiés. Vous pouvez publier votre besoin ou parcourir les profils des professionnels, puis les contacter directement via la plateforme."
    },
    {
      question: "Comment sont sélectionnés les artisans ?",
      answer: "Tous nos artisans passent par un processus de vérification qui inclut la validation de leurs compétences et de leur expérience professionnelle."
    },
    {
      question: "Quels sont les tarifs ?",
      answer: "Les tarifs varient selon le type de service et l'expérience du professionnel. Les prix commencent généralement à partir de 14 DH/heure, conformément au SMIG marocain."
    },
    {
      question: "Comment puis-je payer ?",
      answer: "Le paiement se fait directement entre vous et l'artisan. Nous recommandons de bien définir les modalités de paiement avant le début des travaux."
    },
    {
      question: "Y a-t-il une garantie sur les travaux ?",
      answer: "Chaque artisan est responsable de la qualité de son travail. Nous encourageons les clients à laisser des avis pour maintenir un standard de qualité élevé."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Questions Fréquentes</h1>
          <p className="mt-4 text-xl text-gray-600">
            Tout ce que vous devez savoir sur lm3lm
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous avez d'autres questions ?
          </h2>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;