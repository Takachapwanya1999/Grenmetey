import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cobweb } from './components/Cobweb';
import { FloatingAIButton } from './components/FloatingAIButton';
import { FloatingCart } from './components/FloatingCart';
import { CartGuide } from './components/CartGuide';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PartnerRegister } from './pages/PartnerRegister';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Profile } from './pages/Profile';
import { Support } from './pages/Support';
import { PartnerDashboard } from './pages/PartnerDashboard';
import { AdvancedPartnerDashboard } from './pages/AdvancedPartnerDashboard';
import { Dashboard } from './pages/Dashboard';
import { AgriculturalProducts } from './pages/AgriculturalProducts';
import { LivestockProduction } from './pages/LivestockProduction';
import { CropsAndGrains } from './pages/CropsAndGrains';
import { BusinessConsultancy } from './pages/BusinessConsultancy';
import { AgriculturalInvestmentConsultancy } from './pages/AgriculturalInvestmentConsultancy';
import { FarmersInformationDesk } from './pages/FarmersInformationDesk';
import { AgronomyServices } from './pages/AgronomyServices';
import { AgriculturalResearchDevelopment } from './pages/AgriculturalResearchDevelopment';
import { SupplyChain } from './pages/SupplyChain';
import { SellingDistribution } from './pages/SellingDistribution';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Warehousing } from './pages/Warehousing';
// 🔥 NEW HIGH-IMPACT FEATURES
import { B2BWholesale } from './pages/B2BWholesale';
import { B2BSignup } from './pages/B2BSignup';
import { SubscriptionBoxes } from './pages/SubscriptionBoxes';
import { AIAgriculturalAssistant } from './pages/AIAgriculturalAssistant';
import { FinancialServices } from './pages/FinancialServices';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AccessDenied } from './pages/AccessDenied';

function App() {
  // Small admin guard component
  const RequireAdmin = ({ children }: { children: React.ReactElement }) => {
    const { user, loading } = useAuth();
    if (loading)
      return (
        <div className="w-full py-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-green-500 border-t-transparent"></div>
        </div>
      );
  if (!user) return <Navigate to="/login" replace state={{ from: '/dashboard' }} />;
  if (user.role !== 'admin') return <Navigate to="/access-denied" replace />;
    return children;
  };

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-x-hidden">
            {/* Premium agricultural cobwebs for consistent branding */}
            <Cobweb 
              size="sm" 
              position="top-left" 
              color="#16a34a" 
              opacity={0.05}
              variant="agricultural"
              className="animate-cobweb-sway"
            />
            <Cobweb 
              size="sm" 
              position="bottom-right" 
              color="#22c55e" 
              opacity={0.04}
              variant="agricultural"
              className="animate-web-shimmer"
            />
            
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/agricultural-products" element={<AgriculturalProducts />} />
                <Route path="/agricultural-products/livestock" element={<LivestockProduction />} />
                <Route path="/agricultural-products/crops" element={<CropsAndGrains />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/partner-register" element={<PartnerRegister />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/dashboard"
                  element={
                    <RequireAdmin>
                      <Dashboard />
                    </RequireAdmin>
                  }
                />
                <Route path="/support" element={<Support />} />
                <Route path="/partner-dashboard" element={<PartnerDashboard />} />
                <Route path="/advanced-partner-dashboard" element={<AdvancedPartnerDashboard />} />
                <Route path="/consultancy" element={<BusinessConsultancy />} />
                <Route path="/consultancy/investment" element={<AgriculturalInvestmentConsultancy />} />
                <Route path="/consultancy/information-desk" element={<FarmersInformationDesk />} />
                <Route path="/consultancy/agronomy" element={<AgronomyServices />} />
                <Route path="/consultancy/research-development" element={<AgriculturalResearchDevelopment />} />
                <Route path="/supply-chain" element={<SupplyChain />} />
                <Route path="/supply-chain/selling-distribution" element={<SellingDistribution />} />
                <Route path="/supply-chain/warehousing" element={<Warehousing />} />
                {/* 🔥 NEW HIGH-IMPACT REVENUE FEATURES */}
                <Route path="/b2b-wholesale" element={<B2BWholesale />} />
                <Route path="/b2b-signup" element={<B2BSignup />} />
                <Route path="/subscription-boxes" element={<SubscriptionBoxes />} />
                <Route path="/ai-assistant" element={<AIAgriculturalAssistant />} />
                <Route path="/financial-services" element={<FinancialServices />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/access-denied" element={<AccessDenied />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            
            {/* AI Assistant available on all pages */}
            <FloatingAIButton />
            
            {/* Floating Cart for easy access */}
            <FloatingCart />
            
            {/* Cart Guide for new users */}
            <CartGuide />
          </div>
        </Router>
      </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
