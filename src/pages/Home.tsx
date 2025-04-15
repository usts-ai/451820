import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { SERVICES, TESTIMONIALS, PROFESSIONALS } from '../data/mockData';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Section des services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nos services d'urgence</h2>
            <p className="text-gray-600 text-lg">
              Nous proposons une large gamme de services d'urgence disponibles 24/7 pour répondre à tous vos besoins imprévus.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comment ça marche</h2>
            <p className="text-gray-600 text-lg">
              Trouvez et réservez un professionnel en quelques clics, en toute simplicité.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -z-10 transform -translate-y-1/2"></div>
            
            {/* Étape 1 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Choisissez un service</h3>
              <p className="text-gray-600">
                Sélectionnez le type de service d'urgence dont vous avez besoin parmi notre large gamme de professionnels qualifiés.
              </p>
            </motion.div>
            
            {/* Étape 2 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Géolocalisation</h3>
              <p className="text-gray-600">
                Nous localisons les professionnels disponibles les plus proches de chez vous pour une intervention rapide.
              </p>
            </motion.div>
            
            {/* Étape 3 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Réservation instantanée</h3>
              <p className="text-gray-600">
                Réservez directement en ligne et obtenez une confirmation immédiate. Paiement sécurisé une fois le service rendu.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/search"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              Trouver un professionnel
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section des professionnels en vedette */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        {/* Formes d'arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les meilleurs professionnels à votre service</h2>
            <p className="text-blue-100 text-lg">
              Des professionnels qualifiés, disponibles 24/7 et rigoureusement sélectionnés pour garantir un service de qualité.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROFESSIONALS.slice(0, 3).map((professional) => (
              <motion.div 
                key={professional.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="text-xl font-semibold">{professional.name}</h3>
                      <p className="text-gray-600">{professional.profession}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(professional.rating) ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-700">{professional.rating} ({professional.reviewCount})</span>
                    </div>
                    <p className="text-gray-600">{professional.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {professional.services.map((service, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/professional/${professional.id}`}
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Voir le profil
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/search"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
            >
              Voir tous les professionnels
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ce que disent nos clients</h2>
            <p className="text-gray-600 text-lg">
              Découvrez les témoignages de personnes satisfaites par la qualité de nos services d'urgence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à trouver un professionnel ?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Des milliers de professionnels sont disponibles pour vous aider en cas d'urgence, 24/7.
            </p>
            <Link 
              to="/search"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg shadow-lg"
            >
              Trouver un professionnel maintenant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
