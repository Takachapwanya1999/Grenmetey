import { useState, useEffect } from 'react';
import { Search, Filter, Sparkles, Clock, TrendingUp } from 'lucide-react';
import { useJSONPrompt } from '../hooks/useJSONPrompt';
import type { ProductRecommendation } from '../types/jsonPrompt';

interface SmartSearchBarProps {
  onSearch: (query: string) => void;
  onSmartRecommendations?: (recommendations: ProductRecommendation[]) => void;
  placeholder?: string;
  className?: string;
}

export function SmartSearchBar({ 
  onSearch, 
  onSmartRecommendations, 
  placeholder = "Search products or ask for farming advice...",
  className = ""
}: SmartSearchBarProps) {
  const [query, setQuery] = useState('');
  const [isSmartMode, setIsSmartMode] = useState(false);
  const [recentQueries, setRecentQueries] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const { searchProducts, isLoading } = useJSONPrompt();

  // Load recent queries from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('grenmetey-investments-recent-searches');
    if (stored) {
      try {
        setRecentQueries(JSON.parse(stored).slice(0, 5));
      } catch (e) {
        console.error('Error loading recent searches:', e);
      }
    }
  }, []);

  // Generate suggestions based on input
  useEffect(() => {
    // Smart search suggestions based on agricultural context
    const smartSuggestions = [
      "organic tomato seeds for small farm",
      "drought-resistant maize varieties",
      "natural pest control for vegetables",
      "soil fertilizer for acidic conditions",
      "hydroponics equipment for beginners",
      "companion plants for tomatoes",
      "winter crops for South Africa",
      "organic pesticides for fruit trees"
    ];

    if (query.length > 2) {
      const filtered = smartSuggestions.filter((suggestion: string) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 4));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Save to recent queries
    const newRecentQueries = [query, ...recentQueries.filter(q => q !== query)].slice(0, 5);
    setRecentQueries(newRecentQueries);
    localStorage.setItem('grenmetey-investments-recent-searches', JSON.stringify(newRecentQueries));

    setShowSuggestions(false);

    if (isSmartMode) {
      // Use AI-powered search
      try {
        const response = await searchProducts(query, {
          userLocation: 'South Africa',
          organic: true,
          localOnly: false
        });
        
        if (response?.success && response.data.recommendations) {
          const productRecs = response.data.recommendations.filter(
            (rec): rec is ProductRecommendation => 'name' in rec
          );
          onSmartRecommendations?.(productRecs);
        }
      } catch (error) {
        console.error('Smart search error:', error);
      }
    }

    // Always perform regular search
    onSearch(query);
  };

  const selectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(query.length > 2)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder={placeholder}
            className="w-full pl-12 pr-32 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm bg-gray-50 focus:bg-white focus:shadow-lg"
          />
          
          <Search className="absolute left-4 top-4.5 h-5 w-5 text-gray-400" />
          
          <div className="absolute right-2 top-2 flex items-center space-x-2">
            {/* Smart Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsSmartMode(!isSmartMode)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isSmartMode 
                  ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
              title={isSmartMode ? "AI Smart Search Enabled" : "Enable AI Smart Search"}
            >
              <Sparkles className="h-4 w-4" />
            </button>
            
            {/* Search Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>AI</span>
                </div>
              ) : (
                'Search'
              )}
            </button>
          </div>
        </div>

        {/* AI Mode Indicator */}
        {isSmartMode && (
          <div className="absolute -bottom-6 left-0 flex items-center space-x-1 text-xs text-green-600">
            <Sparkles className="h-3 w-3" />
            <span>AI-powered agricultural search active</span>
          </div>
        )}
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && (suggestions.length > 0 || recentQueries.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 mb-2">
                <Filter className="h-3 w-3" />
                <span>Suggestions</span>
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => selectSuggestion(suggestion)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-gray-400" />
                    <span>{suggestion}</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Recent Queries */}
          {recentQueries.length > 0 && (
            <div className="p-3">
              <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 mb-2">
                <Clock className="h-3 w-3" />
                <span>Recent Searches</span>
              </div>
              {recentQueries.map((recentQuery, index) => (
                <button
                  key={index}
                  onClick={() => selectSuggestion(recentQuery)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{recentQuery}</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          <div className="p-3 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 mb-2">
              <TrendingUp className="h-3 w-3" />
              <span>Popular in Agriculture</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Organic Seeds', 'Pest Control', 'Soil Health', 'Irrigation'].map((tag, index) => (
                <button
                  key={index}
                  onClick={() => selectSuggestion(tag.toLowerCase())}
                  className="px-3 py-1 text-xs bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
