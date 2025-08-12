import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Wind, Droplets, Eye, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';

interface WeatherData {
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    visibility: number;
    icon: string;
  };
  forecast: Array<{
    date: string;
    high: number;
    low: number;
    condition: string;
    precipitation: number;
    icon: string;
  }>;
  farmingAlerts: Array<{
    type: 'warning' | 'info' | 'success';
    title: string;
    message: string;
    action?: string;
  }>;
}

export function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location] = useState('Johannesburg, South Africa');
  const [loading, setLoading] = useState(true);

  // Mock weather data - In production, integrate with weather API
  useEffect(() => {
    const mockWeatherData: WeatherData = {
      current: {
        temperature: 22,
        condition: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12,
        visibility: 10,
        icon: 'partly-cloudy'
      },
      forecast: [
        { date: 'Today', high: 25, low: 15, condition: 'Sunny', precipitation: 0, icon: 'sunny' },
        { date: 'Tomorrow', high: 23, low: 14, condition: 'Partly Cloudy', precipitation: 10, icon: 'partly-cloudy' },
        { date: 'Friday', high: 20, low: 12, condition: 'Light Rain', precipitation: 60, icon: 'rainy' },
        { date: 'Saturday', high: 22, low: 13, condition: 'Cloudy', precipitation: 20, icon: 'cloudy' },
        { date: 'Sunday', high: 26, low: 16, condition: 'Sunny', precipitation: 0, icon: 'sunny' }
      ],
      farmingAlerts: [
        {
          type: 'warning',
          title: 'Rain Expected Friday',
          message: 'Postpone outdoor harvesting activities. Perfect time for greenhouse work.',
          action: 'Plan Indoor Activities'
        },
        {
          type: 'success',
          title: 'Optimal Growing Conditions',
          message: 'Temperature and humidity levels are ideal for vegetable growth.',
          action: 'Continue Planting'
        },
        {
          type: 'info',
          title: 'Irrigation Recommendation',
          message: 'Reduce watering schedule due to expected rainfall this week.',
          action: 'Adjust Schedule'
        }
      ]
    };

    setTimeout(() => {
      setWeatherData(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (iconType: string) => {
    switch (iconType) {
      case 'sunny': return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'partly-cloudy': return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'cloudy': return <Cloud className="h-8 w-8 text-gray-600" />;
      case 'rainy': return <CloudRain className="h-8 w-8 text-blue-500" />;
      default: return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'success': return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'info': return <Calendar className="h-5 w-5 text-blue-500" />;
      default: return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (!weatherData) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Farm Weather Dashboard</h2>
            <p className="text-blue-100">{location}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{weatherData.current.temperature}°C</div>
            <div className="text-blue-100">{weatherData.current.condition}</div>
          </div>
        </div>
      </div>

      {/* Current Weather Details */}
      <div className="p-6 border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <div className="text-sm text-gray-500">Humidity</div>
              <div className="font-semibold">{weatherData.current.humidity}%</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Wind className="h-5 w-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Wind Speed</div>
              <div className="font-semibold">{weatherData.current.windSpeed} km/h</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Eye className="h-5 w-5 text-purple-500" />
            <div>
              <div className="text-sm text-gray-500">Visibility</div>
              <div className="font-semibold">{weatherData.current.visibility} km</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Thermometer className="h-5 w-5 text-red-500" />
            <div>
              <div className="text-sm text-gray-500">Feels Like</div>
              <div className="font-semibold">{weatherData.current.temperature + 2}°C</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-green-600" />
          5-Day Forecast
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-sm font-medium text-gray-600 mb-2">{day.date}</div>
              <div className="flex justify-center mb-2">
                {getWeatherIcon(day.icon)}
              </div>
              <div className="text-sm font-semibold">{day.high}°/{day.low}°</div>
              <div className="text-xs text-gray-500 mt-1">{day.condition}</div>
              {day.precipitation > 0 && (
                <div className="text-xs text-blue-500 mt-1">{day.precipitation}% rain</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Farming Alerts */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
          Farming Alerts & Recommendations
        </h3>
        <div className="space-y-3">
          {weatherData.farmingAlerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              alert.type === 'warning' ? 'bg-orange-50 border-orange-400' :
              alert.type === 'success' ? 'bg-green-50 border-green-400' :
              'bg-blue-50 border-blue-400'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div>
                    <div className="font-semibold text-gray-900">{alert.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{alert.message}</div>
                  </div>
                </div>
                {alert.action && (
                  <button className={`px-3 py-1 rounded-md text-xs font-medium ${
                    alert.type === 'warning' ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' :
                    alert.type === 'success' ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                    'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  } transition-colors`}>
                    {alert.action}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
