import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROFESSIONALS, Professional } from '../data/mockData';

const ProfessionalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [professional, setProfessional] = useState<Professional | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const pro = PROFESSIONALS.find(p => p.id === parseInt(id));
      if (pro) {
        setProfessional(pro);
      }
    }
  }, [id]);

  const availableTimes = [
    '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setShowConfirmation(true);
    }
  };

  if (!professional) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Professionnel non trouvé</h2>
          <p className="text-gray-600 mb-6">Nous n'avons pas pu trouver le professionnel que vous recherchez.</p>
          <Link to="/search" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Retour à la recherche
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      {/* Hero section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full mb-6 md:mb-0 md:mr-8"></div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{professional.name}</h1>
              <p className="text-xl text-blue-100 mb-4">{professional.profession} - {professional.speciality}</p>
              <div className="flex items-center text-yellow-300 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(professional.rating) ? 'text-yellow-300' : 'text-blue-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="ml-2">{professional.rating} ({professional.reviewCount} avis)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{professional.address} ({professional.distance})</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations détaillées */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">À propos</h2>
              <p className="text-gray-700 mb-6">
                {professional.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Services proposés</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {professional.services.map((service, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {service}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Disponibilité</h3>
              <div className="flex flex-wrap gap-3">
                {professional.availability.map((day, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {day}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Avis clients */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Avis clients ({professional.reviewCount})
              </h2>
              
              {/* Avis exemple */}
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b border-gray-200 py-6 last:border-0 last:pb-0">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Client {review}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < 5 - review % 2 ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">il y a {review + 1} jour{review > 0 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {review === 1 
                      ? `Service impeccable et très professionnel. Intervention rapide et efficace. Je recommande vivement ${professional.name}.`
                      : review === 2 
                        ? `Excellent travail, réalisé dans les temps et avec un grand professionnalisme. Prix raisonnable pour la qualité du service.`
                        : `Très satisfait de l'intervention. Professionnel ponctuel, efficace et agréable. N'hésitez pas à faire appel à ses services !`
                    }
                  </p>
                </div>
              ))}
              
              <button className="text-blue-600 font-medium mt-4 hover:text-blue-800">
                Voir tous les avis
              </button>
            </div>
          </motion.div>

          {/* Formulaire de réservation */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              {!showConfirmation ? (
                <>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Réserver maintenant</h2>
                  <p className="text-gray-700 mb-6">{professional.price}</p>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Sélectionnez une date
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    >
                      <option value="">Choisir une date</option>
                      {professional.availability.map((day, index) => (
                        <option key={index} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Sélectionnez une heure
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                      disabled={!selectedDate}
                    >
                      <option value="">Choisir une heure</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Description de votre besoin
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                      placeholder="Décrivez votre besoin en détail..."
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full py-3 px-4 rounded-lg font-medium ${
                      selectedDate && selectedTime
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    } transition-colors duration-300`}
                  >
                    Réserver maintenant
                  </button>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Réservation confirmée !</h2>
                  <p className="text-gray-700 mb-6">
                    Votre rendez-vous avec {professional.name} a été confirmé pour le {selectedDate} à {selectedTime}.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Un email de confirmation a été envoyé à votre adresse email avec tous les détails de votre réservation.
                  </p>
                  <Link 
                    to="/"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Retour à l'accueil
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;
