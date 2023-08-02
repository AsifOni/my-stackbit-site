// Custom Imports
import { Card as RewardsCard } from '../components/Card';
import { Hero as RewardsHero } from '../components/Hero';
import { Button as RewardsButton } from '../components/Button';
import { ThreeColumnCard } from '../components/ThreeColumnCard';
import { TwoColumnSection } from '../components/TwoColumnSection';

export function ComponentRegistry() {
  return {
    button: RewardsButton,
    hero: RewardsHero,
    rewardsCard: RewardsCard,
    threeColumnCardSection: ThreeColumnCard,
    twoColumnSection: TwoColumnSection,
  };
}
