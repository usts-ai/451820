import React from 'react';
import { Professional } from '../data/mockData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProfessionalCardProps {
  professional: Professional;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold">{professional.name}</h3>
            <p className="text-white/90">{professional.profession} - {professional.speciality}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(professional.rating) ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="ml-2 text-gray-700">{professional.rating} ({professional.reviewCount})</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-3 flex items-center">
          <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {professional.distance} • {professional.address}
        </p>
        
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-800 mb-1">Disponibilité</h4>
          <div className="flex space-x-2">
            {professional.availability.map((day, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {day}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {professional.services.slice(0, 2).map((service, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {service}
            </span>
          ))}
          {professional.services.length > 2 && (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              +{professional.services.length - 2}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <span className="font-semibold text-gray-800">{professional.price}</span>
          <Link 
            to={`/professional/${professional.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Réserver
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalCard;
