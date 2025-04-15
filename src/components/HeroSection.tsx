import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CITIES, SERVICES } from '../data/mockData';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search', { 
      state: { 
        service: selectedService,
        city: selectedCity 
      } 
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative bg-blue-600 text-white min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFF" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trouvez un professionnel en urgence près de chez vous
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Des professionnels qualifiés disponibles 24/7 pour répondre à toutes vos urgences
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Quel service d'urgence ?
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-gray-700"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                  Dans quelle ville ?
                </label>
                <select
                  id="city"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-gray-700"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez une ville</option>
                  {CITIES.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  Rechercher
                </button>
              </div>
            </div>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-gray-700 font-medium mb-4">Services populaires :</h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {SERVICES.map(service => (
                <motion.button
                  key={service.id}
                  variants={itemVariants}
                  onClick={() => setSelectedService(service.name)}
                  className={`flex items-center px-4 py-2 rounded-full border transition-colors duration-300 ${
                    selectedService === service.name 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                  }`}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-blue-100 mb-4">Déjà plus de 10 000 interventions réussies</p>
          <div className="flex justify-center space-x-8 md:space-x-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">1500+</h3>
              <p className="text-blue-100">Professionnels</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">98%</h3>
              <p className="text-blue-100">Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">30 min</h3>
              <p className="text-blue-100">Délai moyen</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
