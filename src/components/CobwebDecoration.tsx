import React from 'react';
import { Cobweb } from './Cobweb';

interface CobwebDecorationProps {
  theme?: 'farm' | 'garden' | 'harvest' | 'organic';
  intensity?: 'light' | 'medium' | 'heavy';
  animated?: boolean;
}

export const CobwebDecoration: React.FC<CobwebDecorationProps> = ({
  theme = 'farm',
  intensity = 'light',
  animated = true
}) => {
  const themeColors = {
    farm: '#16a34a',
    garden: '#22c55e', 
    harvest: '#f59e0b',
    organic: '#059669'
  };

  const intensitySettings = {
    light: { opacity: 0.06, count: 1 },
    medium: { opacity: 0.12, count: 2 },
    heavy: { opacity: 0.18, count: 3 }
  };

  const settings = intensitySettings[intensity];
  const color = themeColors[theme];

  return (
    <>
      {Array.from({ length: settings.count }, (_, index) => (
        <Cobweb
          key={index}
          size={index === 0 ? 'md' : 'sm'}
          position={index % 2 === 0 ? 'top-right' : 'bottom-left'}
          color={color}
          opacity={settings.opacity}
          className={animated ? `animate-cobweb-sway animation-delay-${index * 200}` : ''}
        />
      ))}
    </>
  );
};

export default CobwebDecoration;
