import { useState, useCallback } from 'react';
import { jsonPromptService } from '../services/jsonPromptService';
import type { JSONPromptRequest, JSONPromptResponse } from '../types/jsonPrompt';

export function useJSONPrompt() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastResponse, setLastResponse] = useState<JSONPromptResponse | null>(null);

  const processPrompt = useCallback(async (request: JSONPromptRequest): Promise<JSONPromptResponse | null> => {
    if (!jsonPromptService.validateRequest(request)) {
      setError('Invalid request format');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await jsonPromptService.processPrompt(request);
      setLastResponse(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process prompt';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Helper function for product search prompts
  const searchProducts = useCallback(async (
    query: string,
    context?: {
      userLocation?: string;
      organic?: boolean;
      localOnly?: boolean;
      priceRange?: { min: number; max: number };
    }
  ) => {
    const request: JSONPromptRequest = {
      type: 'product_search',
      query,
      context: {
        userLocation: context?.userLocation || 'South Africa',
        sustainabilityFocus: context?.organic || false,
      },
      preferences: {
        organic: context?.organic,
        localOnly: context?.localOnly,
        priceRange: context?.priceRange,
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Enhanced helper function for any agricultural advice
  const getAgriculturalAdvice = useCallback(async (
    query: string,
    context?: {
      farmSize?: 'small' | 'medium' | 'large' | 'commercial';
      experienceLevel?: 'beginner' | 'intermediate' | 'expert';
      cropType?: string;
      seasonality?: 'spring' | 'summer' | 'autumn' | 'winter';
      farmingType?: 'traditional' | 'organic' | 'hydroponic' | 'permaculture' | 'commercial' | 'subsistence';
      sustainabilityFocus?: boolean;
    }
  ) => {
    const request: JSONPromptRequest = {
      type: 'general_agriculture',
      query,
      context: {
        farmSize: context?.farmSize || 'medium',
        experienceLevel: context?.experienceLevel || 'intermediate',
        cropType: context?.cropType,
        seasonality: context?.seasonality,
        farmingType: context?.farmingType || 'traditional',
        userLocation: 'South Africa',
        sustainabilityFocus: context?.sustainabilityFocus ?? true,
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Helper function for pest control advice
  const getPestControlAdvice = useCallback(async (
    pestDescription: string,
    cropType?: string,
    sustainabilityFocus: boolean = true
  ) => {
    const request: JSONPromptRequest = {
      type: 'pest_control',
      query: `Pest control advice for: ${pestDescription}${cropType ? ` on ${cropType}` : ''}`,
      context: {
        cropType,
        sustainabilityFocus,
        userLocation: 'South Africa',
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Helper function for soil analysis recommendations
  const getSoilAdvice = useCallback(async (
    soilCondition: string,
    intendedCrop?: string
  ) => {
    const request: JSONPromptRequest = {
      type: 'soil_analysis',
      query: `Soil improvement advice for: ${soilCondition}${intendedCrop ? ` for growing ${intendedCrop}` : ''}`,
      context: {
        cropType: intendedCrop,
        userLocation: 'South Africa',
        sustainabilityFocus: true,
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Helper function for crop planning
  const getCropPlanningAdvice = useCallback(async (
    planningQuery: string,
    context?: {
      farmSize?: 'small' | 'medium' | 'large' | 'commercial';
      budget?: 'low' | 'medium' | 'high';
      seasonality?: 'spring' | 'summer' | 'autumn' | 'winter';
    }
  ) => {
    const request: JSONPromptRequest = {
      type: 'crop_planning',
      query: planningQuery,
      context: {
        farmSize: context?.farmSize || 'medium',
        budget: context?.budget || 'medium',
        seasonality: context?.seasonality,
        userLocation: 'South Africa',
        sustainabilityFocus: true,
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Helper function for weather impact analysis
  const getWeatherImpactAdvice = useCallback(async (
    weatherQuery: string,
    cropType?: string
  ) => {
    const request: JSONPromptRequest = {
      type: 'weather_impact',
      query: weatherQuery,
      context: {
        cropType,
        userLocation: 'South Africa',
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // New helper functions for comprehensive agricultural support

  // Livestock management advice
  const getLivestockAdvice = useCallback(async (
    livestockQuery: string,
    animalType?: string,
    farmSize?: 'small' | 'medium' | 'large' | 'commercial'
  ) => {
    const request: JSONPromptRequest = {
      type: 'livestock_management',
      query: livestockQuery,
      context: {
        cropType: animalType, // Reusing cropType field for animal type
        farmSize: farmSize || 'medium',
        userLocation: 'South Africa',
        sustainabilityFocus: true,
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Sustainable farming practices
  const getSustainabilityAdvice = useCallback(async (
    sustainabilityQuery: string,
    farmingType?: 'traditional' | 'organic' | 'hydroponic' | 'permaculture'
  ) => {
    const request: JSONPromptRequest = {
      type: 'sustainability_practices',
      query: sustainabilityQuery,
      context: {
        farmingType: farmingType || 'traditional',
        userLocation: 'South Africa',
        sustainabilityFocus: true,
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Farm equipment and tools
  const getEquipmentAdvice = useCallback(async (
    equipmentQuery: string,
    farmSize?: 'small' | 'medium' | 'large' | 'commercial',
    budget?: 'low' | 'medium' | 'high'
  ) => {
    const request: JSONPromptRequest = {
      type: 'equipment_recommendation',
      query: equipmentQuery,
      context: {
        farmSize: farmSize || 'medium',
        budget: budget || 'medium',
        userLocation: 'South Africa',
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // Market and business advice
  const getMarketAdvice = useCallback(async (
    marketQuery: string,
    cropType?: string,
    farmSize?: 'small' | 'medium' | 'large' | 'commercial'
  ) => {
    const request: JSONPromptRequest = {
      type: 'market_pricing',
      query: marketQuery,
      context: {
        cropType,
        farmSize: farmSize || 'medium',
        userLocation: 'South Africa',
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  // General farming guidance for any question
  const getGeneralFarmingAdvice = useCallback(async (
    generalQuery: string,
    context?: {
      experienceLevel?: 'beginner' | 'intermediate' | 'expert';
      farmSize?: 'small' | 'medium' | 'large' | 'commercial';
      sustainabilityFocus?: boolean;
    }
  ) => {
    const request: JSONPromptRequest = {
      type: 'general_agriculture',
      query: generalQuery,
      context: {
        experienceLevel: context?.experienceLevel || 'intermediate',
        farmSize: context?.farmSize || 'medium',
        sustainabilityFocus: context?.sustainabilityFocus ?? true,
        userLocation: 'South Africa',
      }
    };

    return await processPrompt(request);
  }, [processPrompt]);

  return {
    // Core functionality
    processPrompt,
    isLoading,
    error,
    lastResponse,
    
    // Helper functions for common use cases
    searchProducts,
    getAgriculturalAdvice,
    getPestControlAdvice,
    getSoilAdvice,
    getCropPlanningAdvice,
    getWeatherImpactAdvice,
    
    // Extended agricultural expertise
    getLivestockAdvice,
    getSustainabilityAdvice,
    getEquipmentAdvice,
    getMarketAdvice,
    getGeneralFarmingAdvice,
    
    // Utility functions
    clearError: () => setError(null),
    clearLastResponse: () => setLastResponse(null),
  };
}
