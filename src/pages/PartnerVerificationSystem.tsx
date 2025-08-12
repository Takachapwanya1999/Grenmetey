import { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Eye,
  Download,
  X,
  Star,
  Award,
  FileText,
  MapPin,
  Calendar
} from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  location: string;
  verificationLevel: 'pending' | 'basic' | 'verified' | 'premium' | 'rejected';
  applicationDate: string;
  lastActive: string;
  documents: {
    businessRegistration?: string;
    taxCertificate?: string;
    agriculturalLicense?: string;
    organicCertification?: string;
    insurancePolicy?: string;
    bankStatements?: string;
  };
  farmDetails: {
    size: string;
    crops: string[];
    organicCertified: boolean;
    yearsInBusiness: number;
  };
  verificationNotes: string;
  rating: number;
  totalSales: number;
}

export function PartnerVerificationSystem() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const [partners] = useState<Partner[]>([
    {
      id: '1',
      name: 'John Mthembu',
      businessName: 'Sunshine Organic Farm',
      email: 'john@sunshineorganics.co.za',
      phone: '+27 82 555 0123',
      location: 'KwaZulu-Natal, Pietermaritzburg',
      verificationLevel: 'pending',
      applicationDate: '2024-08-01',
      lastActive: '2024-08-07',
      documents: {
        businessRegistration: 'business_reg_001.pdf',
        agriculturalLicense: 'agri_license_001.pdf',
        organicCertification: 'organic_cert_001.pdf'
      },
      farmDetails: {
        size: '50 hectares',
        crops: ['Tomatoes', 'Spinach', 'Lettuce', 'Carrots'],
        organicCertified: true,
        yearsInBusiness: 8
      },
      verificationNotes: '',
      rating: 0,
      totalSales: 0
    },
    {
      id: '2',
      name: 'Sarah van der Merwe',
      businessName: 'Heritage Valley Produce',
      email: 'sarah@heritagevalley.co.za',
      phone: '+27 83 444 0156',
      location: 'Western Cape, Stellenbosch',
      verificationLevel: 'verified',
      applicationDate: '2024-07-15',
      lastActive: '2024-08-07',
      documents: {
        businessRegistration: 'business_reg_002.pdf',
        taxCertificate: 'tax_cert_002.pdf',
        agriculturalLicense: 'agri_license_002.pdf',
        insurancePolicy: 'insurance_002.pdf'
      },
      farmDetails: {
        size: '25 hectares',
        crops: ['Grapes', 'Olives', 'Citrus', 'Herbs'],
        organicCertified: false,
        yearsInBusiness: 12
      },
      verificationNotes: 'All documents verified. Excellent farm inspection results.',
      rating: 4.8,
      totalSales: 245600
    },
    {
      id: '3',
      name: 'Thabo Mokoena',
      businessName: 'Green Fields Collective',
      email: 'thabo@greenfields.co.za',
      phone: '+27 81 777 0234',
      location: 'Gauteng, Johannesburg',
      verificationLevel: 'basic',
      applicationDate: '2024-07-28',
      lastActive: '2024-08-06',
      documents: {
        businessRegistration: 'business_reg_003.pdf',
        agriculturalLicense: 'agri_license_003.pdf'
      },
      farmDetails: {
        size: '15 hectares',
        crops: ['Cabbage', 'Onions', 'Potatoes', 'Beans'],
        organicCertified: false,
        yearsInBusiness: 5
      },
      verificationNotes: 'Basic verification complete. Pending insurance documentation.',
      rating: 4.2,
      totalSales: 89300
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'basic':
        return <Shield className="h-5 w-5 text-blue-500" />;
      case 'verified':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'premium':
        return <Award className="h-5 w-5 text-purple-500" />;
      case 'rejected':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      basic: 'bg-blue-100 text-blue-800',
      verified: 'bg-green-100 text-green-800',
      premium: 'bg-purple-100 text-purple-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.businessName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || partner.verificationLevel === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleVerificationAction = (partnerId: string, action: 'approve' | 'reject' | 'request_info') => {
    // In real app, this would call an API
    console.log(`Action: ${action} for partner: ${partnerId}`);
    // For demo, just close the modal
    setSelectedPartner(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Partner Verification Center</h1>
          <p className="text-gray-600 mt-1">Review and verify partner applications and documentation</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-gray-900">
                  {partners.filter(p => p.verificationLevel === 'pending').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Verified Partners</p>
                <p className="text-2xl font-bold text-gray-900">
                  {partners.filter(p => p.verificationLevel === 'verified' || p.verificationLevel === 'premium').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Basic Verified</p>
                <p className="text-2xl font-bold text-gray-900">
                  {partners.filter(p => p.verificationLevel === 'basic').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Premium Partners</p>
                <p className="text-2xl font-bold text-gray-900">
                  {partners.filter(p => p.verificationLevel === 'premium').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="basic">Basic</option>
              <option value="verified">Verified</option>
              <option value="premium">Premium</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Partners Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Partner</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Business</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Location</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Application Date</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPartners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{partner.name}</p>
                        <p className="text-sm text-gray-600">{partner.email}</p>
                        <p className="text-sm text-gray-600">{partner.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{partner.businessName}</p>
                        <p className="text-sm text-gray-600">{partner.farmDetails.size}</p>
                        <p className="text-sm text-gray-600">{partner.farmDetails.yearsInBusiness} years</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{partner.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(partner.verificationLevel)}
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(partner.verificationLevel)}`}>
                          {partner.verificationLevel}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{partner.applicationDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => setSelectedPartner(partner)}
                        className="flex items-center space-x-1 text-green-600 hover:text-green-800 font-medium text-sm"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Review</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Partner Detail Modal */}
        {selectedPartner && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{selectedPartner.businessName}</h3>
                  <p className="text-green-100">{selectedPartner.name}</p>
                </div>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Basic Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Contact Email</p>
                      <p className="text-gray-900">{selectedPartner.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Phone Number</p>
                      <p className="text-gray-900">{selectedPartner.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Location</p>
                      <p className="text-gray-900">{selectedPartner.location}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Application Date</p>
                      <p className="text-gray-900">{selectedPartner.applicationDate}</p>
                    </div>
                  </div>
                </div>

                {/* Farm Details */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Farm Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Farm Size</p>
                      <p className="text-gray-900">{selectedPartner.farmDetails.size}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Years in Business</p>
                      <p className="text-gray-900">{selectedPartner.farmDetails.yearsInBusiness} years</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Organic Certified</p>
                      <p className="text-gray-900">
                        {selectedPartner.farmDetails.organicCertified ? (
                          <span className="text-green-600 font-medium">Yes</span>
                        ) : (
                          <span className="text-gray-600">No</span>
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Main Crops</p>
                      <p className="text-gray-900">{selectedPartner.farmDetails.crops.join(', ')}</p>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Submitted Documents</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedPartner.documents).map(([docType, filename]) => (
                      filename && (
                        <div key={docType} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="font-medium text-gray-900">
                                {docType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                              </p>
                              <p className="text-sm text-gray-600">{filename}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Performance (if verified) */}
                {selectedPartner.verificationLevel !== 'pending' && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          <span className="text-xl font-bold text-gray-900">{selectedPartner.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">Average Rating</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-xl font-bold text-gray-900">R{selectedPartner.totalSales.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Total Sales</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-xl font-bold text-gray-900">98%</p>
                        <p className="text-sm text-gray-600">Order Fulfillment</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Verification Notes */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Verification Notes</h4>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    rows={3}
                    placeholder="Add verification notes..."
                    defaultValue={selectedPartner.verificationNotes}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => handleVerificationAction(selectedPartner.id, 'reject')}
                    className="px-6 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Reject Application
                  </button>
                  <button
                    onClick={() => handleVerificationAction(selectedPartner.id, 'request_info')}
                    className="px-6 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Request More Info
                  </button>
                  <button
                    onClick={() => handleVerificationAction(selectedPartner.id, 'approve')}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Approve & Verify
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
