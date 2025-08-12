import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import type { Certificate } from '../types';

const partnerSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  
  // Business Information
  businessName: z.string().min(2, 'Business name is required'),
  businessRegistrationNumber: z.string().min(5, 'Business registration number is required'),
  taxNumber: z.string().min(5, 'Tax number is required'),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  
  // Address Information
  street: z.string().min(5, 'Street address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().min(5, 'ZIP code is required'),
  country: z.string().min(2, 'Country is required'),
  
  // Business Address (if different)
  businessStreet: z.string().min(5, 'Business street address is required'),
  businessCity: z.string().min(2, 'Business city is required'),
  businessState: z.string().min(2, 'Business state is required'),
  businessZipCode: z.string().min(5, 'Business ZIP code is required'),
  businessCountry: z.string().min(2, 'Business country is required'),
  
  // Terms and Conditions
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions'),
  agreeToContract: z.boolean().refine(val => val === true, 'You must agree to the partnership contract')
});

type PartnerFormData = z.infer<typeof partnerSchema>;

export function PartnerRegister() {
  const [currentStep, setCurrentStep] = useState(1);
  const [certificates, setCertificates] = useState<Partial<Certificate>[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContract, setShowContract] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
    mode: 'onChange'
  });

  const steps = [
    { id: 1, name: 'Personal Information', description: 'Basic contact details' },
    { id: 2, name: 'Business Information', description: 'Business registration and details' },
    { id: 3, name: 'Certificates & Licenses', description: 'Upload your certifications' },
    { id: 4, name: 'Partnership Contract', description: 'Review and sign the agreement' },
    { id: 5, name: 'Confirmation', description: 'Complete your registration' }
  ];

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof PartnerFormData)[] => {
    switch (step) {
      case 1:
        return ['firstName', 'lastName', 'email', 'phone'];
      case 2:
        return ['businessName', 'businessRegistrationNumber', 'taxNumber', 'description', 'street', 'city', 'state', 'zipCode', 'country', 'businessStreet', 'businessCity', 'businessState', 'businessZipCode', 'businessCountry'];
      case 4:
        return ['agreeToTerms', 'agreeToContract'];
      default:
        return [];
    }
  };

  const addCertificate = () => {
    setCertificates([...certificates, {
      name: '',
      issuingAuthority: '',
      certificateNumber: '',
      issueDate: new Date(),
      expiryDate: new Date(),
      documentUrl: '',
      isVerified: false
    }]);
  };

  const removeCertificate = (index: number) => {
    setCertificates(certificates.filter((_, i) => i !== index));
  };

  const updateCertificate = (index: number, field: string, value: string | Date) => {
    const updated = [...certificates];
    updated[index] = { ...updated[index], [field]: value };
    setCertificates(updated);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_data: PartnerFormData) => {
    setIsSubmitting(true);
    try {
      // Mock API call to submit partner application
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(5);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contractText = `
PARTNERSHIP AGREEMENT

This Partnership Agreement ("Agreement") is entered into between Grenmetey Investments ("Platform") and the Partner ("You").

TERMS AND CONDITIONS:

1. PARTNERSHIP TERMS
   - Commission rate: 15% of gross sales
   - Payment terms: Net 15 days
   - Minimum order fulfillment time: 24 hours

2. PRODUCT REQUIREMENTS
   - All products must meet quality standards
   - Organic certifications must be valid
   - Products must be accurately described

3. RESPONSIBILITIES
   - Maintain adequate inventory
   - Provide accurate product information
   - Handle customer service for your products
   - Comply with all applicable laws and regulations

4. QUALITY ASSURANCE
   - All products subject to quality inspection
   - Right to remove non-compliant products
   - Maintain food safety standards

5. TERMINATION
   - Either party may terminate with 30 days notice
   - Immediate termination for breach of terms

By signing this agreement, you acknowledge that you have read, understood, and agree to be bound by these terms.
`;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.id
                        ? 'bg-agricultural-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div className="text-sm font-medium text-gray-900">{step.name}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`hidden sm:block flex-1 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-agricultural-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
                  <p className="text-gray-600">Please provide your contact details.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName')}
                      className="input-field"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName')}
                      className="input-field"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="input-field"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="input-field"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Personal Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        {...register('street')}
                        className="input-field"
                        placeholder="Enter your street address"
                      />
                      {errors.street && (
                        <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        {...register('city')}
                        className="input-field"
                        placeholder="Enter your city"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        {...register('state')}
                        className="input-field"
                        placeholder="Enter your state"
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        {...register('zipCode')}
                        className="input-field"
                        placeholder="Enter your ZIP code"
                      />
                      {errors.zipCode && (
                        <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <select {...register('country')} className="input-field">
                        <option value="">Select your country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="MX">Mexico</option>
                      </select>
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Information</h2>
                  <p className="text-gray-600">Tell us about your agricultural business.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      {...register('businessName')}
                      className="input-field"
                      placeholder="Enter your business name"
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Registration Number *
                    </label>
                    <input
                      {...register('businessRegistrationNumber')}
                      className="input-field"
                      placeholder="Enter registration number"
                    />
                    {errors.businessRegistrationNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.businessRegistrationNumber.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tax Number *
                    </label>
                    <input
                      {...register('taxNumber')}
                      className="input-field"
                      placeholder="Enter tax number"
                    />
                    {errors.taxNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.taxNumber.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website (Optional)
                    </label>
                    <input
                      {...register('website')}
                      type="url"
                      className="input-field"
                      placeholder="https://your-website.com"
                    />
                    {errors.website && (
                      <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Description *
                    </label>
                    <textarea
                      {...register('description')}
                      rows={4}
                      className="input-field"
                      placeholder="Describe your agricultural business, products, and farming practices..."
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Business Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Street Address *
                      </label>
                      <input
                        {...register('businessStreet')}
                        className="input-field"
                        placeholder="Enter business street address"
                      />
                      {errors.businessStreet && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessStreet.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business City *
                      </label>
                      <input
                        {...register('businessCity')}
                        className="input-field"
                        placeholder="Enter business city"
                      />
                      {errors.businessCity && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessCity.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business State *
                      </label>
                      <input
                        {...register('businessState')}
                        className="input-field"
                        placeholder="Enter business state"
                      />
                      {errors.businessState && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessState.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business ZIP Code *
                      </label>
                      <input
                        {...register('businessZipCode')}
                        className="input-field"
                        placeholder="Enter business ZIP code"
                      />
                      {errors.businessZipCode && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessZipCode.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Country *
                      </label>
                      <select {...register('businessCountry')} className="input-field">
                        <option value="">Select business country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="MX">Mexico</option>
                      </select>
                      {errors.businessCountry && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessCountry.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Certificates & Licenses */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Certificates & Licenses</h2>
                  <p className="text-gray-600">Upload your agricultural certifications and business licenses.</p>
                </div>

                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-gray-900">Certificate {index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeCertificate(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Certificate Name
                          </label>
                          <input
                            type="text"
                            value={cert.name || ''}
                            onChange={(e) => updateCertificate(index, 'name', e.target.value)}
                            className="input-field"
                            placeholder="e.g., USDA Organic Certification"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Issuing Authority
                          </label>
                          <input
                            type="text"
                            value={cert.issuingAuthority || ''}
                            onChange={(e) => updateCertificate(index, 'issuingAuthority', e.target.value)}
                            className="input-field"
                            placeholder="e.g., USDA"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Certificate Number
                          </label>
                          <input
                            type="text"
                            value={cert.certificateNumber || ''}
                            onChange={(e) => updateCertificate(index, 'certificateNumber', e.target.value)}
                            className="input-field"
                            placeholder="Enter certificate number"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Document
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addCertificate}
                    className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-agricultural-500 hover:bg-agricultural-50"
                  >
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Add Certificate</p>
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800">Important Note</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        All certificates will be verified by our team. Please ensure all documents are valid and up-to-date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Partnership Contract */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Partnership Contract</h2>
                  <p className="text-gray-600">Please review and agree to our partnership terms.</p>
                </div>

                <div className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Partnership Agreement
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowContract(!showContract)}
                      className="text-agricultural-600 hover:text-agricultural-700"
                    >
                      {showContract ? 'Hide' : 'Show'} Full Contract
                    </button>
                  </div>
                  
                  {showContract && (
                    <div className="p-4 max-h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700">
                        {contractText}
                      </pre>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      {...register('agreeToTerms')}
                      type="checkbox"
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-700">
                      I agree to the <span className="text-agricultural-600 hover:underline cursor-pointer">Terms and Conditions</span> and <span className="text-agricultural-600 hover:underline cursor-pointer">Privacy Policy</span>
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
                  )}

                  <div className="flex items-start">
                    <input
                      {...register('agreeToContract')}
                      type="checkbox"
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-700">
                      I have read and agree to the Partnership Contract above, including the commission structure and partnership terms
                    </label>
                  </div>
                  {errors.agreeToContract && (
                    <p className="text-red-500 text-sm">{errors.agreeToContract.message}</p>
                  )}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-green-800">Next Steps</h4>
                      <p className="text-sm text-green-700 mt-1">
                        After submission, our team will review your application within 3-5 business days. 
                        You'll receive an email notification once your partnership is approved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="text-center space-y-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
                  <p className="text-gray-600">
                    Thank you for applying to become a partner. We'll review your application and get back to you soon.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">What happens next?</h3>
                  <div className="space-y-2 text-sm text-gray-600 text-left">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-agricultural-500 rounded-full mr-3"></div>
                      Application review (3-5 business days)
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-agricultural-500 rounded-full mr-3"></div>
                      Certificate verification
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-agricultural-500 rounded-full mr-3"></div>
                      Partnership approval notification
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-agricultural-500 rounded-full mr-3"></div>
                      Access to partner dashboard
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => window.location.href = '/'}
                    className="btn-secondary"
                  >
                    Return Home
                  </button>
                  <button
                    type="button"
                    onClick={() => window.location.href = '/login'}
                    className="btn-primary"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex justify-between pt-8 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentStep === 4 ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
