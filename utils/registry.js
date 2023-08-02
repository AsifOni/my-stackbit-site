// Custom Imports
import { Card as RewardsCard } from '../components/Card';
import { Hero as RewardsHero } from '../components/Hero';
import { ThreeColumnCard } from '../components/ThreeColumnCard';
import { TwoColumnSection } from '../components/TwoColumnSection';

export function ComponentRegistry() {
  return {
    rewardsHero: RewardsHero,
    rewardsCard: RewardsCard,
    threeColumnCardSection: ThreeColumnCard,
    twoColumnSection: TwoColumnSection,
  };
}
