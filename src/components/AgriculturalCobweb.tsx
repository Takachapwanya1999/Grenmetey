import React from 'react';

interface AgriculturalCobwebProps {
  variant?: 'barn' | 'greenhouse' | 'silo' | 'farmhouse';
  size?: 'sm' | 'md' | 'lg';
  position?: 'corner' | 'edge' | 'floating';
  interactive?: boolean;
}

export const AgriculturalCobweb: React.FC<AgriculturalCobwebProps> = ({
  variant = 'barn',
  size = 'md',
  position = 'corner',
  interactive = false
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20', 
    lg: 'w-32 h-32'
  };

  const positionClasses = {
    corner: 'absolute top-0 right-0',
    edge: 'absolute top-1/4 right-0',
    floating: 'absolute top-1/3 right-1/4'
  };

  const variantColors = {
    barn: '#8b4513',
    greenhouse: '#228b22',
    silo: '#696969',
    farmhouse: '#654321'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${positionClasses[position]} pointer-events-none opacity-20 ${
        interactive ? 'hover:opacity-40 transition-opacity duration-300' : ''
      }`}
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Agricultural-themed cobweb design */}
        <defs>
          <pattern id="farmTexture" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="none"/>
            <circle cx="2" cy="2" r="0.5" fill={variantColors[variant]} opacity="0.3"/>
          </pattern>
        </defs>

        {/* Main web structure */}
        <g stroke={variantColors[variant]} strokeWidth="0.5" opacity="0.6">
          {/* Radial lines from corner */}
          <line x1="0" y1="0" x2="25" y2="25" />
          <line x1="0" y1="0" x2="40" y2="10" />
          <line x1="0" y1="0" x2="10" y2="40" />
          <line x1="0" y1="0" x2="60" y2="0" />
          <line x1="0" y1="0" x2="0" y2="60" />
        </g>

        {/* Concentric web curves */}
        <g stroke={variantColors[variant]} strokeWidth="0.3" fill="none" opacity="0.4">
          <path d="M 8 0 Q 4 4 0 8" />
          <path d="M 16 0 Q 8 8 0 16" />
          <path d="M 24 0 Q 12 12 0 24" />
          <path d="M 32 0 Q 16 16 0 32" />
        </g>

        {/* Dewdrops with agricultural theme */}
        <g fill={variantColors[variant]} opacity="0.5">
          <circle cx="12" cy="8" r="0.8">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="15" r="0.6">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Small agricultural elements */}
        {variant === 'barn' && (
          <g fill={variantColors[variant]} opacity="0.3" transform="translate(15, 15)">
            {/* Tiny hay strands */}
            <rect x="0" y="0" width="1" height="3" rx="0.5" />
            <rect x="2" y="1" width="1" height="2" rx="0.5" />
          </g>
        )}

        {variant === 'greenhouse' && (
          <g fill={variantColors[variant]} opacity="0.3" transform="translate(18, 18)">
            {/* Tiny leaf shapes */}
            <ellipse cx="0" cy="0" rx="1" ry="0.5" />
            <ellipse cx="2" cy="1" rx="0.8" ry="0.4" />
          </g>
        )}
      </svg>

      {/* Optional interactive tooltip */}
      {interactive && (
        <div className="absolute -bottom-8 -right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-auto">
          {variant} cobweb
        </div>
      )}
    </div>
  );
};

export default AgriculturalCobweb;
