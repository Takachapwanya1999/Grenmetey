# Grenmetey Investments JSON Prompt System Documentation

## Overview

The JSON Prompt System is an AI-powered feature that enhances your Grenmetey Investments e-commerce platform with intelligent agricultural advice, product recommendations, and farming guidance. It uses structured JSON prompts to provide contextual, relevant responses to users' agricultural queries.

## Features Implemented

### 1. AI Assistant Component (`AgriAssistant.tsx`)
- **Purpose**: Interactive chat interface for agricultural guidance
- **Location**: Header button + Floating button on all pages
- **Capabilities**:
  - Product search with AI recommendations
  - Pest control advice
  - Soil health guidance
  - Crop planning assistance
  - Weather impact analysis
  - Seasonal farming tips

### 2. Smart Search Bar (`SmartSearchBar.tsx`)
- **Purpose**: AI-enhanced product search with intelligent suggestions
- **Features**:
  - Natural language product queries
  - Smart suggestions based on agricultural context
  - Recent search history
  - AI-powered product recommendations

### 3. JSON Prompt Service (`jsonPromptService.ts`)
- **Purpose**: Core service handling AI interactions
- **Features**:
  - Structured prompt generation
  - Fallback responses for offline functionality
  - Multiple prompt types for different agricultural needs
  - South African agricultural context

### 4. Custom Hook (`useJSONPrompt.ts`)
- **Purpose**: React hook for easy AI integration
- **Benefits**:
  - Simplified AI interactions in components
  - Loading and error state management
  - Helper functions for common agricultural queries

## How JSON Prompts Work

### 1. Structured Input
```typescript
const request: JSONPromptRequest = {
  type: 'product_search',
  query: 'Find organic tomato seeds for small farm',
  context: {
    userLocation: 'South Africa',
    farmSize: 'small',
    sustainabilityFocus: true,
    seasonality: 'spring'
  },
  preferences: {
    organic: true,
    localOnly: false,
    priceRange: { min: 0, max: 500 }
  }
};
```

### 2. AI Processing
The system sends structured prompts to AI services with:
- Clear context about user needs
- Agricultural expertise guidance
- South African farming conditions
- Seasonal considerations
- Sustainability focus

### 3. Structured Output
```typescript
const response: JSONPromptResponse = {
  success: true,
  data: {
    recommendations: [
      {
        id: 'seed-001',
        name: 'Organic Roma Tomato Seeds',
        price: 45.99,
        rating: 4.8,
        organicCertified: true,
        localProducer: true,
        plantingGuide: {
          sowingTime: 'August - October',
          harvestTime: '90-120 days',
          soilRequirements: 'Well-draining, pH 6.0-6.8'
        }
      }
    ],
    insights: [
      'Spring planting provides best yields',
      'Local varieties perform better than imports'
    ],
    actionItems: [
      'Check soil pH before planting',
      'Prepare seedbeds 2 weeks in advance'
    ]
  }
};
```

## Implementation Benefits

### For Your Grenmetey Investments Platform:

1. **Enhanced User Experience**
   - Intelligent product discovery
   - Personalized recommendations
   - Agricultural expertise at users' fingertips

2. **Increased Sales**
   - Better product matching
   - Context-aware recommendations
   - Reduced search abandonment

3. **Customer Education**
   - Farming best practices
   - Seasonal guidance
   - Pest and disease management

4. **Competitive Advantage**
   - AI-powered agricultural expertise
   - Personalized user experience
   - Professional agricultural guidance

## Setup Instructions

### 1. Environment Configuration
Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

### 2. AI Service Integration
Choose your AI provider and add API key:
- **OpenAI**: Most comprehensive for agricultural knowledge
- **Anthropic Claude**: Excellent for detailed explanations
- **Google PaLM**: Good for structured responses

### 3. API Endpoint Setup
Update the API endpoint in `jsonPromptService.ts`:
```typescript
private apiEndpoint = 'https://your-backend.com/api/agricultural-prompt';
```

### 4. Enable Features
The system includes feature flags in the environment:
```env
VITE_ENABLE_AI_ASSISTANT=true
VITE_ENABLE_SMART_SEARCH=true
VITE_ENABLE_JSON_PROMPTS=true
```

## Usage Examples

### 1. Product Search
```typescript
const { searchProducts } = useJSONPrompt();

const results = await searchProducts(
  "drought-resistant maize for summer planting",
  {
    userLocation: "Western Cape",
    organic: true,
    priceRange: { min: 100, max: 1000 }
  }
);
```

### 2. Agricultural Advice
```typescript
const { getAgriculturalAdvice } = useJSONPrompt();

const advice = await getAgriculturalAdvice(
  "How to improve clay soil for vegetable farming?",
  {
    farmSize: "small",
    experienceLevel: "beginner",
    seasonality: "autumn"
  }
);
```

### 3. Pest Control Guidance
```typescript
const { getPestControlAdvice } = useJSONPrompt();

const pestAdvice = await getPestControlAdvice(
  "White flies on tomato plants",
  "tomatoes",
  true // sustainability focus
);
```

## Customization Options

### 1. Prompt Templates
Modify prompts in `jsonPromptService.ts` to match your specific agricultural focus:
- Crop-specific guidance
- Regional agricultural practices
- Seasonal adaptations
- Local supplier preferences

### 2. Fallback Responses
Customize offline responses for when AI services are unavailable:
- Local agricultural knowledge
- Seasonal farming calendars
- Common pest solutions
- Basic product recommendations

### 3. UI Components
Customize the AI assistant interface:
- Brand colors and styling
- Agricultural terminology
- Local language support
- Mobile optimization

## Performance Considerations

1. **Caching**: Implement response caching for common queries
2. **Fallbacks**: Always provide offline fallback responses
3. **Rate Limiting**: Respect AI service rate limits
4. **Error Handling**: Graceful degradation when AI services fail

## Security Best Practices

1. **API Keys**: Store securely in environment variables
2. **Input Validation**: Sanitize user inputs before sending to AI
3. **Rate Limiting**: Implement user-based rate limiting
4. **Content Filtering**: Filter inappropriate responses

## Future Enhancements

1. **Multi-language Support**: Support for local South African languages
2. **Voice Integration**: Voice-based agricultural queries
3. **Image Analysis**: Crop disease identification from photos
4. **Weather Integration**: Real-time weather-based recommendations
5. **Market Prices**: Live market price integration
6. **Expert Network**: Connect users with human agricultural experts

## Support and Maintenance

- Monitor AI service costs and usage
- Regularly update agricultural knowledge base
- Collect user feedback for prompt improvements
- Update seasonal recommendations
- Review and improve fallback responses

## Conclusion

The JSON Prompt System transforms your Grenmetey Investments platform into an intelligent agricultural advisor, providing users with expert guidance while driving sales through smart recommendations. The system is designed to be scalable, maintainable, and adaptable to your specific agricultural market needs.
