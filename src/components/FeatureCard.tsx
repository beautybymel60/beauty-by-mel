import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center text-beige">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-salon-black mb-3 text-center">{title}</h3>
      <p className="text-salon-black opacity-70 text-center leading-relaxed">{description}</p>
    </div>
  );
}
