import React from 'react';
import { Cobweb } from './Cobweb';

interface GrenmeteyInvestmentsCobwebProps {
  section?: 'hero' | 'products' | 'footer' | 'sidebar';
  intensity?: 'subtle' | 'moderate' | 'prominent';
  theme?: 'fresh' | 'organic' | 'premium' | 'traditional';
}

export const GrenmeteyInvestmentsCobweb: React.FC<GrenmeteyInvestmentsCobwebProps> = ({
  section = 'products',
  intensity = 'subtle',
  theme = 'fresh'
}) => {
  const sectionConfig = {
    hero: {
      positions: ['top-left', 'top-right'] as const,
      sizes: ['lg', 'md'] as const,
      count: 2
    },
    products: {
      positions: ['top-right', 'bottom-left'] as const,
      sizes: ['xl', 'md'] as const,
      count: 2
    },
    footer: {
      positions: ['bottom-left', 'bottom-right'] as const,
      sizes: ['md', 'sm'] as const,
      count: 2
    },
    sidebar: {
      positions: ['top-right'] as const,
      sizes: ['sm'] as const,
      count: 1
    }
  };

  const intensityConfig = {
    subtle: { opacity: 0.04, baseOpacity: 0.06 },
    moderate: { opacity: 0.08, baseOpacity: 0.12 },
    prominent: { opacity: 0.12, baseOpacity: 0.18 }
  };

  const themeConfig = {
    fresh: { color: '#22c55e', accent: '#16a34a' },
    organic: { color: '#059669', accent: '#047857' },
    premium: { color: '#16a34a', accent: '#15803d' },
    traditional: { color: '#15803d', accent: '#166534' }
  };

  const config = sectionConfig[section];
  const intensity_settings = intensityConfig[intensity];
  const theme_colors = themeConfig[theme];

  return (
    <>
      {Array.from({ length: config.count }, (_, index) => (
        <Cobweb
          key={index}
          size={config.sizes[index]}
          position={config.positions[index]}
          color={index === 0 ? theme_colors.color : theme_colors.accent}
          opacity={index === 0 ? intensity_settings.baseOpacity : intensity_settings.opacity}
          variant="agricultural"
          className={`animate-${index === 0 ? 'cobweb-sway' : 'web-shimmer'}`}
        />
      ))}
    </>
  );
};

export default GrenmeteyInvestmentsCobweb;
