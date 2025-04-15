import React from 'react';
import { Testimonial } from '../data/mockData';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4">
        <div className="flex items-center text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">"{testimonial.comment}"</p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4"></div>
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.profession}</p>
        </div>
      </div>
      <div className="absolute -top-3 -left-3 text-blue-600 text-6xl opacity-20">"</div>
    </motion.div>
  );
};

export default TestimonialCard;
