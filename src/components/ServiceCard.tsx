import React from 'react';
import { Service } from '../data/mockData';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center">
        <span className="text-4xl mb-4">{service.icon}</span>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
        <p className="text-gray-600">{service.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Trouver un pro
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
