import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { MarqueeBanner } from '../components/sections/MarqueeBanner';
import { SoapCollectionSection } from '../components/sections/SoapCollectionSection';
import { NaturalIngredientsSection } from '../components/sections/NaturalIngredientsSection';
import { ExploreByCategorySection } from '../components/sections/ExploreByCategorySection';
import { CustomerReviewsSection } from '../components/sections/CustomerReviewsSection';
import { YourRitualSection } from '../components/sections/YourRitualSection';
import { JoinCommunitySection } from '../components/sections/JoinCommunitySection';

export const HomePage: React.FC = () => {
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
