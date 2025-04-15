import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROFESSIONALS, SERVICES, CITIES, Professional } from '../data/mockData';
import ProfessionalCard from '../components/ProfessionalCard';

interface LocationState {
  service?: string;
  city?: string;
}

const Search: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  const [selectedService, setSelectedService] = useState<string>(state?.service || '');
  const [selectedCity, setSelectedCity] = useState<string>(state?.city || '');
  const [sortOption, setSortOption] = useState<string>('distance');
  const [filteredProfessionals, setFilteredProfessionals] = useState<Professional[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [availability, setAvailability] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);

  useEffect(() => {
    let filtered = [...PROFESSIONALS];
    
    if (selectedService) {
      filtered = filtered.filter(pro => 
        pro.profession.toLowerCase().includes(selectedService.toLowerCase()) || 
        pro.speciality.toLowerCase().includes(selectedService.toLowerCase())
      );
    }
    
    if (selectedCity) {
      filtered = filtered.filter(pro => 
        pro.address.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }
    
    if (availability) {
      filtered = filtered.filter(pro => 
        pro.availability.includes(availability)
      );
    }
    
    if (minRating > 0) {
      filtered = filtered.filter(pro => pro.rating >= minRating);
    }
    
    // Tri
    if (sortOption === 'distance') {
      filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'reviews') {
      filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    
    setFilteredProfessionals(filtered);
  }, [selectedService, selectedCity, sortOption, availability, minRating]);

  const handleReset = () => {
    setSelectedService('');
    setSelectedCity('');
    setAvailability('');
    setMinRating(0);
    setSortOption('distance');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rechercher un professionnel
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trouvez le professionnel idéal pour répondre à votre urgence
          </motion.p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:space-x-8">
          {/* Filtres pour desktop */}
          <motion.div 
            className="hidden lg:block lg:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Filtres</h2>
              
              <div className="mb-6">
                <label htmlFor="desktop-service" className="block text-gray-700 font-medium mb-2">
                  Service
                </label>
                <select
                  id="desktop-service"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Tous les services</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="desktop-city" className="block text-gray-700 font-medium mb-2">
                  Ville
                </label>
                <select
                  id="desktop-city"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Toutes les villes</option>
                  {CITIES.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="desktop-availability" className="block text-gray-700 font-medium mb-2">
                  Disponibilité
                </label>
                <select
                  id="desktop-availability"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                >
                  <option value="">Toutes les disponibilités</option>
                  <option value="Aujourd'hui">Aujourd'hui</option>
                  <option value="Demain">Demain</option>
                  <option value="Après-demain">Après-demain</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="desktop-rating" className="block text-gray-700 font-medium mb-2">
                  Note minimale
                </label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`w-full h-10 flex items-center justify-center ${
                        minRating >= rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleReset}
                className="w-full bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </motion.div>
          
          {/* Contenu principal */}
          <div className="lg:w-3/4">
            {/* Barre d'actions mobile */}
            <motion.div 
              className="lg:hidden bg-white rounded-xl shadow-md p-4 mb-4 flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-gray-700 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                Filtres
              </button>
              
              <div className="flex items-center">
                <label htmlFor="mobile-sort" className="text-gray-700 font-medium mr-2">
                  Trier par:
                </label>
                <select
                  id="mobile-sort"
                  className="px-2 py-1 rounded-lg border border-gray-300"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="distance">Distance</option>
                  <option value="rating">Note</option>
                  <option value="reviews">Avis</option>
                </select>
              </div>
            </motion.div>
            
            {/* Filtres pour mobile */}
            {showFilters && (
              <motion.div 
                className="lg:hidden bg-white rounded-xl shadow-md p-6 mb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mobile-service" className="block text-gray-700 font-medium mb-2">
                      Service
                    </label>
                    <select
                      id="mobile-service"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="">Tous les services</option>
                      {SERVICES.map(service => (
                        <option key={service.id} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mobile-city" className="block text-gray-700 font-medium mb-2">
                      Ville
                    </label>
                    <select
                      id="mobile-city"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      <option value="">Toutes les villes</option>
                      {CITIES.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mobile-availability" className="block text-gray-700 font-medium mb-2">
                      Disponibilité
                    </label>
                    <select
                      id="mobile-availability"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                    >
                      <option value="">Toutes les disponibilités</option>
                      <option value="Aujourd'hui">Aujourd'hui</option>
                      <option value="Demain">Demain</option>
                      <option value="Après-demain">Après-demain</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Note minimale
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg h-10 px-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => setMinRating(rating)}
                          className={`w-full h-8 flex items-center justify-center ${
                            minRating >= rating ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                  >
                    Réinitialiser
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Appliquer
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Barre d'actions desktop */}
            <motion.div 
              className="hidden lg:flex bg-white rounded-xl shadow-md p-4 mb-6 justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <span className="text-gray-700">
                  {filteredProfessionals.length} {filteredProfessionals.length > 1 ? 'résultats' : 'résultat'} trouvés
                </span>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="desktop-sort" className="text-gray-700 font-medium mr-3">
                  Trier par:
                </label>
                <select
                  id="desktop-sort"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="distance">Distance</option>
                  <option value="rating">Note</option>
                  <option value="reviews">Nombre d'avis</option>
                </select>
              </div>
            </motion.div>
            
            {/* Liste des professionnels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredProfessionals.length > 0 ? (
                filteredProfessionals.map((professional) => (
                  <ProfessionalCard key={professional.id} professional={professional} />
                ))
              ) : (
                <div className="col-span-full bg-white rounded-xl shadow-md p-8 text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Aucun résultat trouvé</h3>
                  <p className="text-gray-600 mb-4">
                    Nous n'avons pas trouvé de professionnels correspondant à vos critères de recherche.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
