import React from 'react';

interface CobwebProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  opacity?: number;
  color?: string;
  variant?: 'classic' | 'agricultural' | 'modern' | 'rustic';
}

export const Cobweb: React.FC<CobwebProps> = ({
  size = 'md',
  position = 'top-right',
  className = '',
  opacity = 0.15,
  color = '#16a34a',
  variant = 'agricultural'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  // Enhanced agricultural variant with farm-inspired elements
  if (variant === 'agricultural') {
    return (
      <div 
        className={`absolute ${sizeClasses[size]} ${positionClasses[position]} pointer-events-none ${className}`}
        style={{ opacity }}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Agricultural-themed cobweb with farm elements */}
          <defs>
            <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.8" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
              <stop offset="100%" stopColor={color} stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main web structure - enhanced for agricultural theme */}
          <g stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.7" filter="url(#glow)">
            <line x1="0" y1="0" x2="60" y2="60" className="animate-web-shimmer" />
            <line x1="0" y1="0" x2="120" y2="0" className="animate-web-shimmer" style={{animationDelay: '0.5s'}} />
            <line x1="0" y1="0" x2="0" y2="120" className="animate-web-shimmer" style={{animationDelay: '1s'}} />
            <line x1="0" y1="0" x2="90" y2="30" className="animate-web-shimmer" style={{animationDelay: '1.5s'}} />
            <line x1="0" y1="0" x2="30" y2="90" className="animate-web-shimmer" style={{animationDelay: '2s'}} />
            <line x1="0" y1="0" x2="100" y2="20" className="animate-web-shimmer" style={{animationDelay: '2.5s'}} />
            <line x1="0" y1="0" x2="20" y2="100" className="animate-web-shimmer" style={{animationDelay: '3s'}} />
          </g>

          {/* Enhanced concentric web curves - more agricultural */}
          <g stroke={color} strokeWidth="0.5" fill="none" opacity="0.5">
            <path 
              d="M 8 0 Q 12 4 16 0 Q 20 8 24 0 Q 28 12 32 0"
              className="animate-web-shimmer"
              style={{animationDelay: '0.2s'}}
            />
            <path 
              d="M 0 8 Q 4 12 0 16 Q 8 20 0 24 Q 12 28 0 32"
              className="animate-web-shimmer"
              style={{animationDelay: '0.7s'}}
            />
            <path 
              d="M 16 8 Q 24 12 32 8 Q 40 16 48 8"
              className="animate-web-shimmer"
              style={{animationDelay: '1.2s'}}
            />
            <path 
              d="M 8 16 Q 12 24 8 32 Q 16 40 8 48"
              className="animate-web-shimmer"
              style={{animationDelay: '1.7s'}}
            />
            <path 
              d="M 24 16 Q 32 20 40 16 Q 48 24 56 16"
              className="animate-web-shimmer"
              style={{animationDelay: '2.2s'}}
            />
          </g>

          {/* Premium dewdrops with agricultural sparkle */}
          <g fill={color} opacity="0.8">
            <circle cx="24" cy="16" r="1.2" className="animate-dewdrop-glimmer">
              <animate attributeName="fill-opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
              <animate attributeName="r" values="1.2;1.6;1.2" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="28" r="1" className="animate-dewdrop-glimmer" style={{animationDelay: '1s'}}>
              <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
              <animate attributeName="r" values="1;1.4;1" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="16" cy="40" r="0.8" className="animate-dewdrop-glimmer" style={{animationDelay: '2s'}}>
              <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite" />
              <animate attributeName="r" values="0.8;1.2;0.8" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="56" cy="48" r="1.1" className="animate-dewdrop-glimmer" style={{animationDelay: '3s'}}>
              <animate attributeName="fill-opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="1.1;1.5;1.1" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Agricultural spider with farm characteristics */}
          <g 
            fill={color} 
            opacity="0.6" 
            className="animate-spider-crawl"
            transform="translate(32, 32)"
          >
            {/* Enhanced spider body - more detailed for agricultural theme */}
            <ellipse cx="0" cy="0" rx="2.5" ry="3.5" />
            <ellipse cx="0" cy="-1" rx="1.5" ry="2" opacity="0.8" />
            
            {/* Enhanced spider legs with agricultural feel */}
            <g stroke={color} strokeWidth="0.6" fill="none" opacity="0.8">
              <line x1="-2.5" y1="-2" x2="-5" y2="-4" strokeLinecap="round" />
              <line x1="-2.5" y1="-0.5" x2="-5.5" y2="-1" strokeLinecap="round" />
              <line x1="-2.5" y1="1" x2="-5" y2="3" strokeLinecap="round" />
              <line x1="-2.5" y1="2.5" x2="-4.5" y2="5" strokeLinecap="round" />
              <line x1="2.5" y1="-2" x2="5" y2="-4" strokeLinecap="round" />
              <line x1="2.5" y1="-0.5" x2="5.5" y2="-1" strokeLinecap="round" />
              <line x1="2.5" y1="1" x2="5" y2="3" strokeLinecap="round" />
              <line x1="2.5" y1="2.5" x2="4.5" y2="5" strokeLinecap="round" />
            </g>
            
            {/* Spider eyes for character */}
            <g fill="#22c55e" opacity="0.9">
              <circle cx="-0.8" cy="-1.5" r="0.3" />
              <circle cx="0.8" cy="-1.5" r="0.3" />
            </g>
          </g>

          {/* Agricultural elements - wheat strands */}
          <g stroke="#f59e0b" strokeWidth="0.3" opacity="0.3" className="animate-float">
            <path d="M 70 10 Q 72 8 74 10 Q 76 12 78 10" />
            <path d="M 10 70 Q 8 72 10 74 Q 12 76 10 78" />
            <circle cx="72" cy="10" r="0.5" fill="#f59e0b" />
            <circle cx="10" cy="72" r="0.5" fill="#f59e0b" />
          </g>

          {/* Leaf accents for agricultural theme */}
          <g fill="#22c55e" opacity="0.4" className="animate-float-delayed">
            <ellipse cx="85" cy="15" rx="2" ry="1" transform="rotate(45 85 15)" />
            <ellipse cx="15" cy="85" rx="1.5" ry="0.8" transform="rotate(-45 15 85)" />
          </g>

          {/* Subtle agricultural sparkle effects */}
          <g fill="#fbbf24" opacity="0.6">
            <polygon points="95,8 96,10 98,10 96.5,11.5 97,13 95,12 93,13 93.5,11.5 92,10 94,10" className="animate-pulse-slow">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 95 10"
                to="360 95 10"
                dur="10s"
                repeatCount="indefinite"
              />
            </polygon>
            <polygon points="8,95 9,97 11,97 9.5,98.5 10,100 8,99 6,100 6.5,98.5 5,97 7,97" className="animate-pulse-slow" style={{animationDelay: '2s'}}>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 8 97"
                to="360 8 97"
                dur="12s"
                repeatCount="indefinite"
              />
            </polygon>
          </g>
        </svg>
      </div>
    );
  }

  // Fallback to classic variant for other cases
  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${positionClasses[position]} pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-pulse-slow"
      >
        {/* Classic cobweb design */}
        <g stroke={color} strokeWidth="0.5" opacity="0.6">
          <line x1="0" y1="0" x2="50" y2="50" />
          <line x1="0" y1="0" x2="100" y2="0" />
          <line x1="0" y1="0" x2="0" y2="100" />
          <line x1="0" y1="0" x2="70" y2="30" />
          <line x1="0" y1="0" x2="30" y2="70" />
        </g>
        <g stroke={color} strokeWidth="0.3" fill="none" opacity="0.4">
          <path d="M 5 5 Q 15 10 25 5 Q 35 10 45 5" />
          <path d="M 5 5 Q 10 15 5 25 Q 10 35 5 45" />
        </g>
      </svg>
    </div>
  );
};

export default Cobweb;
