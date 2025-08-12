// JSON Prompt Types for Grenmetey Investments E-commerce Platform
export interface JSONPromptRequest {
  type: 'product_search' | 'agricultural_advice' | 'farming_guidance' | 'pest_control' | 'soil_analysis' | 'crop_planning' | 'market_pricing' | 'weather_impact' | 'organic_certification' | 'equipment_recommendation' | 'livestock_management' | 'irrigation_systems' | 'fertilizer_guidance' | 'harvest_techniques' | 'storage_solutions' | 'disease_management' | 'seed_selection' | 'farm_management' | 'sustainability_practices' | 'general_agriculture';
  context: {
    userLocation?: string;
    seasonality?: 'spring' | 'summer' | 'autumn' | 'winter';
    farmSize?: 'small' | 'medium' | 'large' | 'commercial';
    cropType?: string;
    experienceLevel?: 'beginner' | 'intermediate' | 'expert';
    budget?: 'low' | 'medium' | 'high';
    sustainabilityFocus?: boolean;
    farmingType?: 'traditional' | 'organic' | 'hydroponic' | 'permaculture' | 'commercial' | 'subsistence';
    soilType?: string;
    climateZone?: string;
  };
  query: string;
  preferences?: {
    organic?: boolean;
    localOnly?: boolean;
    priceRange?: { min: number; max: number };
    deliverySpeed?: 'same_day' | 'next_day' | 'standard';
  };
}

export interface JSONPromptResponse {
  success: boolean;
  data: {
    recommendations: ProductRecommendation[] | AdviceRecommendation[];
    insights: string[];
    actionItems?: string[];
    relatedProducts?: Product[];
    seasonalTips?: string[];
    weatherAlerts?: string[];
    marketTrends?: MarketTrend[];
  };
  metadata: {
    confidence: number;
    sources: string[];
    lastUpdated: string;
    expertVerified: boolean;
  };
}

export interface ProductRecommendation {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  availability: 'in_stock' | 'low_stock' | 'out_of_stock';
  sustainabilityScore: number;
  localProducer: boolean;
  organicCertified: boolean;
  seasonality: string[];
  matchReasons: string[];
  estimatedYield?: string;
  plantingGuide?: {
    sowingTime: string;
    harvestTime: string;
    soilRequirements: string;
    waterRequirements: string;
  };
}

export interface AdviceRecommendation {
  title: string;
  category: 'planting' | 'harvesting' | 'pest_control' | 'soil_health' | 'marketing' | 'equipment' | 'weather';
  priority: 'high' | 'medium' | 'low';
  urgency: 'immediate' | 'this_week' | 'this_month' | 'seasonal';
  description: string;
  steps: string[];
  expectedOutcome: string;
  timeframe: string;
  costEstimate?: string;
  requiredProducts?: string[];
  expertTip: string;
}

export interface MarketTrend {
  product: string;
  trend: 'increasing' | 'decreasing' | 'stable';
  priceChange: number;
  demandLevel: 'high' | 'medium' | 'low';
  seasonalFactor: boolean;
  recommendation: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  organic: boolean;
  local: boolean;
}
