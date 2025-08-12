<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# AgriMarket E-commerce Platform

This is a React-based e-commerce platform specifically designed for agricultural products. The platform connects farmers and agricultural producers with consumers, featuring partner registration, product management, search functionality, and support systems.

## Key Features

- **Partner Registration**: Comprehensive onboarding process for farmers/producers including contract signing and certificate verification
- **Product Catalog**: Search and filter agricultural products with detailed information
- **User Accounts**: Customer and partner account management
- **Shopping Cart**: Full e-commerce functionality
- **Support System**: Help desk with FAQ, contact forms, and ticket management
- **Responsive Design**: AgriMarket-optimized UI/UX designed for agricultural products

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom agricultural theme
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

- `/src/components/` - Reusable UI components (Header, Footer, etc.)
- `/src/pages/` - Page components for different routes
- `/src/context/` - React Context providers (Auth, Cart)
- `/src/types/` - TypeScript type definitions
- `/src/hooks/` - Custom React hooks

## Design Guidelines

- Use agricultural-themed colors (greens) defined in tailwind.config.js
- Follow AgriMarket-style layout patterns
- Ensure mobile-responsive design
- Prioritize search functionality and product discovery
- Maintain consistent spacing and typography

## Development Notes

- All forms should include proper validation
- Search functionality should be comprehensive and fast
- Partner registration requires contract agreement and certificate uploads
- Support system should handle multiple contact methods
- Future AI integration placeholder included

When working on this project, focus on agricultural use cases, farmer-friendly interfaces, and robust search/filter capabilities.
