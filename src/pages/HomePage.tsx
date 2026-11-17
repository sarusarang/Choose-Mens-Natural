import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { HeroSection } from '../components/hero/HeroSection';
import { MarqueeBanner } from '../components/sections/MarqueeBanner';
import { SoapCollectionSection } from '../components/sections/SoapCollectionSection';
import { NaturalIngredientsSection } from '../components/sections/NaturalIngredientsSection';
import { MedicalDirectorsSection } from '../components/sections/MedicalDirectorsSection';
import { ExploreByCategorySection } from '../components/sections/ExploreByCategorySection';
import { CustomerReviewsSection } from '../components/sections/CustomerReviewsSection';
import { YourRitualSection } from '../components/sections/YourRitualSection';
import { JoinCommunitySection } from '../components/sections/JoinCommunitySection';

export const HomePage: React.FC = () => {
  useSEO({
    title: 'Aaramam Ayurveda Sanctuary • Motherhood Begins with Love and Care',
    description: 'Dedicated maternal & newborn sanctuary in Feroke, Kerala. Authentic Ayurvedic postnatal therapies (Prasava Raksha), doctor-guided care, Abhyanga, and traditional healing.',
    image: '/home-hero.jpeg',
    url: 'https://aaramamcare.com/',
  });

  return (
    <div className="w-full flex flex-col">
      {/* Exact Hero Section as shown in the design image */}
      <HeroSection />

      {/* Smooth Marquee Banner */}
      <MarqueeBanner />

      {/* Flagship Natural Bath Soap Collection */}
      <SoapCollectionSection />

      {/* Our Natural Ingredients Orbital Section */}
      <NaturalIngredientsSection />

      {/* Medical Directors Leadership Section */}
      <MedicalDirectorsSection />

      {/* Explore By Category Section */}
      <ExploreByCategorySection />

      {/* 750K+ Customer Love & Verified Reviews */}
      <CustomerReviewsSection />

      {/* Your Skin, Your Ritual Feature Section */}
      <YourRitualSection />

      {/* Join the Community CTA Section */}
      <JoinCommunitySection />
    </div>
  );
};
