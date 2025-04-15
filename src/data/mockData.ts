// Suppression de l'importation incorrecte de next/image
// import { StaticImageData } from 'next/image';

export interface Professional {
  id: number;
  name: string;
  profession: string;
  speciality: string;
  address: string;
  distance: string;
  rating: number;
  reviewCount: number;
  availability: string[];
  image: string;
  services: string[];
  price: string;
  description: string;
}

export interface Service {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  profession: string;
  comment: string;
  rating: number;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    name: "Plomberie d'urgence",
    icon: "🔧",
    description: "Intervention rapide pour fuites, canalisations bouchées et autres problèmes de plomberie"
  },
  {
    id: 2,
    name: "Électricité",
    icon: "⚡",
    description: "Dépannage électrique, court-circuit, panne générale, installation"
  },
  {
    id: 3,
    name: "Serrurerie",
    icon: "🔑",
    description: "Ouverture de porte, changement de serrure, clés perdues"
  },
  {
    id: 4,
    name: "Chauffage",
    icon: "🔥",
    description: "Panne de chauffage, entretien de chaudière, thermostat défectueux"
  },
  {
    id: 5,
    name: "Vitrerie",
    icon: "🪟",
    description: "Remplacement de vitres cassées, double vitrage, fenêtres"
  },
  {
    id: 6,
    name: "Assistance médicale",
    icon: "🩺",
    description: "Médecins de garde, infirmiers à domicile, assistance médicale urgente"
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: "Jean Dupont",
    profession: "Plombier",
    speciality: "Plomberie d'urgence",
    address: "12 Rue de la République, 75001 Paris",
    distance: "2,4 km",
    rating: 4.9,
    reviewCount: 153,
    availability: ["Aujourd'hui", "Demain", "Après-demain"],
    image: "/img/plumber.jpg",
    services: ["Réparation de fuites", "Débouchage de canalisations", "Installation sanitaire"],
    price: "À partir de 80€",
    description: "Plombier expérimenté avec plus de 15 ans d'expérience. Intervention rapide et service de qualité garanti."
  },
  {
    id: 2,
    name: "Marie Leroy",
    profession: "Électricienne",
    speciality: "Dépannage électrique",
    address: "45 Avenue Victor Hugo, 75016 Paris",
    distance: "3,1 km",
    rating: 4.8,
    reviewCount: 127,
    availability: ["Aujourd'hui", "Demain"],
    image: "/img/electrician.jpg",
    services: ["Réparation de panne", "Installation électrique", "Mise aux normes"],
    price: "À partir de 75€",
    description: "Électricienne certifiée disponible 24/7 pour tous vos problèmes électriques. Intervention rapide et professionnelle."
  },
  {
    id: 3,
    name: "Thomas Martin",
    profession: "Serrurier",
    speciality: "Ouverture de porte",
    address: "8 Rue du Faubourg Saint-Honoré, 75008 Paris",
    distance: "1,7 km",
    rating: 4.7,
    reviewCount: 98,
    availability: ["Aujourd'hui"],
    image: "/img/locksmith.jpg",
    services: ["Ouverture de porte", "Changement de serrure", "Installation de sécurité"],
    price: "À partir de 90€",
    description: "Serrurier professionnel disponible en urgence. Intervention rapide et tarifs transparents."
  },
  {
    id: 4,
    name: "Sophie Bernard",
    profession: "Médecin",
    speciality: "Médecine générale",
    address: "27 Boulevard Haussmann, 75009 Paris",
    distance: "4,2 km",
    rating: 4.9,
    reviewCount: 215,
    availability: ["Aujourd'hui", "Demain", "Après-demain"],
    image: "/img/doctor.jpg",
    services: ["Consultation urgente", "Visite à domicile", "Téléconsultation"],
    price: "À partir de 60€",
    description: "Médecin généraliste disponible pour consultations d'urgence. Service humain et attentionné."
  },
  {
    id: 5,
    name: "Philippe Petit",
    profession: "Chauffagiste",
    speciality: "Dépannage de chaudière",
    address: "15 Rue de Rivoli, 75004 Paris",
    distance: "3,8 km",
    rating: 4.6,
    reviewCount: 87,
    availability: ["Demain", "Après-demain"],
    image: "/img/heating_tech.jpg",
    services: ["Réparation de chaudière", "Entretien de système de chauffage", "Installation"],
    price: "À partir de 95€",
    description: "Chauffagiste spécialisé dans le dépannage de tous types de chaudières et systèmes de chauffage."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Pierre Moreau",
    profession: "Enseignant",
    comment: "Service rapide et efficace ! J'ai pu trouver un plombier disponible en moins de 30 minutes pour une fuite d'eau urgente.",
    rating: 5,
    image: "/img/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Lucie Girard",
    profession: "Avocate",
    comment: "Excellente plateforme. L'application est très intuitive et j'ai pu prendre rendez-vous avec un médecin tard le soir quand ma fille était malade.",
    rating: 5,
    image: "/img/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Antoine Dubois",
    profession: "Restaurateur",
    comment: "Un service qui m'a sauvé ! Panne d'électricité dans mon restaurant en plein service, un électricien était là en 20 minutes.",
    rating: 4,
    image: "/img/testimonial3.jpg"
  }
];

export const CITIES = [
  "Paris", "Lyon", "Marseille", "Bordeaux", "Lille", "Strasbourg", "Nantes", "Toulouse", "Montpellier", "Nice"
];
