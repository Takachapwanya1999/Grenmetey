import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, AlertCircle, CheckCircle, Leaf, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'South Africa',
    userType: 'customer',
    agreeToTerms: false,
    agreeToMarketing: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (stepNumber: number) => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (stepNumber === 2) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'Password must contain uppercase, lowercase, and a number';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      if (!formData.street) newErrors.street = 'Street address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State/Province is required';
      if (!formData.zipCode) newErrors.zipCode = 'Postal code is required';
    }

    if (stepNumber === 3) {
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;

    setIsLoading(true);
    
    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password as any,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country
        }
      });
      
      setShowSuccess(true);
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (err: any) {
      const msg = err?.message || 'Registration failed. Please try again.';
      setErrors({ general: msg });
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Grenmetey Investments!</h2>
          <p className="text-gray-600 mb-4">Your account has been created successfully.</p>
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="flex min-h-screen">
        {/* Left side - Form */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-lg">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-green-600 text-white p-3 rounded-2xl">
                <Leaf className="h-8 w-8" />
              </div>
            </div>

            <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
              Join Grenmetey Investments
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Create your account to access fresh, local produce from trusted farmers
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
                <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-lg">
            <div className="bg-white py-8 px-6 shadow-2xl rounded-2xl border border-gray-100">
              {/* User Type Selection - Step 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      I want to join as:
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                        formData.userType === 'customer' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="userType"
                          value="customer"
                          checked={formData.userType === 'customer'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <ShoppingBag className="h-8 w-8 mx-auto mb-2 text-green-600" />
                          <div className="font-medium text-gray-900">Customer</div>
                          <div className="text-sm text-gray-500">Buy fresh produce</div>
                        </div>
                      </label>
                      
                      <label className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                        formData.userType === 'farmer' 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="userType"
                          value="farmer"
                          checked={formData.userType === 'farmer'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <Leaf className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                          <div className="font-medium text-gray-900">Farmer</div>
                          <div className="text-sm text-gray-500">Sell your harvest</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                            errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="First name"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                            errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Last name"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="+27 123 456 7890"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Continue
                  </button>
                </div>
              )}

              {/* Step 2: Password and Address */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Security & Address</h3>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-10 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-10 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
                      Street address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        value={formData.street}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.street ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="123 Main Street"
                      />
                    </div>
                    {errors.street && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.street}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`block w-full px-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Cape Town"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                        Province
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`block w-full px-3 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.state ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Province</option>
                        <option value="Western Cape">Western Cape</option>
                        <option value="Eastern Cape">Eastern Cape</option>
                        <option value="Northern Cape">Northern Cape</option>
                        <option value="Free State">Free State</option>
                        <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                        <option value="North West">North West</option>
                        <option value="Gauteng">Gauteng</option>
                        <option value="Mpumalanga">Mpumalanga</option>
                        <option value="Limpopo">Limpopo</option>
                      </select>
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.state}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Postal code
                    </label>
                    <input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                        errors.zipCode ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="7700"
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.zipCode}
                      </p>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Terms and Finish */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Almost there!</h3>
                    <p className="text-gray-600 mb-6">
                      Review your information and agree to our terms to complete your registration.
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Name:</span>
                      <span className="text-sm font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Email:</span>
                      <span className="text-sm font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Account type:</span>
                      <span className="text-sm font-medium capitalize">{formData.userType}</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.general && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="text-red-700 text-sm">{errors.general}</span>
                    </div>
                  )}

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="h-4 w-4 mt-1 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">
                        I agree to the{' '}
                        <Link to="/terms" className="text-green-600 hover:text-green-500 font-medium">
                          Terms and Conditions
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-green-600 hover:text-green-500 font-medium">
                          Privacy Policy
                        </Link>
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="ml-7 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.agreeToTerms}
                      </p>
                    )}

                    <div className="flex items-start">
                      <input
                        id="agreeToMarketing"
                        name="agreeToMarketing"
                        type="checkbox"
                        checked={formData.agreeToMarketing}
                        onChange={handleInputChange}
                        className="h-4 w-4 mt-1 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="agreeToMarketing" className="ml-3 text-sm text-gray-700">
                        I would like to receive updates about new products, special offers, and farming tips
                      </label>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Creating account...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Create my account
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <h1 className="text-4xl font-bold mb-6">
              Join Our Growing Community
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Connect with {formData.userType === 'farmer' ? 'customers looking for fresh produce' : 'local farmers and enjoy fresh produce'}
            </p>
            
            <div className="space-y-6">
              {formData.userType === 'customer' ? (
                <>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Fresh & Organic</div>
                      <div className="text-sm opacity-90">Direct from local farms</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Easy Shopping</div>
                      <div className="text-sm opacity-90">Browse and order with ease</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Quality Guaranteed</div>
                      <div className="text-sm opacity-90">100% satisfaction promise</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Reach More Customers</div>
                      <div className="text-sm opacity-90">Expand your market reach</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Fair Pricing</div>
                      <div className="text-sm opacity-90">Get the best value for your produce</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Easy Management</div>
                      <div className="text-sm opacity-90">Simple tools to manage your listings</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
