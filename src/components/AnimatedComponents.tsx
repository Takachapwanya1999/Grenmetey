// Animated wrapper component for Home page sections
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: 'button' | 'a';
}

export function AnimatedButton({ 
  children, 
  className = '', 
  onClick, 
  href, 
  as = 'button' 
}: AnimatedButtonProps) {
  const MotionComponent = motion[as];
  
  return (
    <MotionComponent
      className={className}
      onClick={onClick}
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionComponent>
  );
}

export function AnimatedHero({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStats({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingIcon({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

  export const Mission: React.FC = () => (
    <section className="bg-green-200 py-10 px-4 rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-green-900 mb-4">Mission Statement</h2>
      <p className="text-gray-900">
        Being driven by innovation we cultivate prosperity from seed to shelf. Our mission is to harmonize agriculture, sustainability, and community by creating a seamless value chain that nourishes the land, empowers farmers and delivers wholesome products to every table.
      </p>
    </section>
  );
export const OurStory: React.FC = () => (
  <section className="bg-green-50 py-10 px-4 rounded-lg shadow-md max-w-3xl mx-auto my-8">
    <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>
    <p className="text-gray-800 mb-4">
      Founded in 2020 in the heart of Zimbabwe, Grenmetey Investments Pvt. Ltd. began as a modest supplier of meat products and maize grains. But behind its humble beginnings was a bold ambition—to transform agriculture into a force of resilience, innovation, and prosperity.
    </p>
    <p className="text-gray-800 mb-4">
      The inspiration for Grenmetey was born from Zimbabwe’s recurring droughts, which exposed the fragility of traditional farming systems and the urgent need for sustainable solutions. These crises ignited a vision: to revolutionize agribusiness by integrating technology, value addition, and market intelligence into every stage of the agricultural value chain.
    </p>
    <p className="text-gray-800 mb-4">
      Today, Grenmetey stands as a rising titan in the agro-sector, evolving into a fully-fledged Integrated Agro-Value Enterprise. Its operations span the entire spectrum of agricultural production and marketing—from high-quality vegetable and crop seeds to cereal grains, ready-for-market harvests, livestock, meat, processed food products, and end-to-end supply chain services.
    </p>
    <p className="text-gray-800 mb-4">
      At its core, Grenmetey is driven by a mission to eradicate poverty and hunger through sustainable agriculture and innovation. The company is committed to ensuring that basic food needs are consistently available and accessible at affordable prices, empowering communities and fortifying national food security.
    </p>
    <p className="text-gray-800">
      With a relentless focus on quality, efficiency, and impact, Grenmetey is not just growing crops—it’s growing futures. By 2030, the company aims to become the dominant force in Africa’s agro-value landscape, setting new standards in productivity, market reach, and technological advancement.
    </p>
  </section>
);
  export const Vision: React.FC = () => (
    <section className="bg-green-100 py-10 px-4 rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Vision</h2>
      <p className="text-gray-900">
        Our vision is to revolutionize agriculture by becoming the leading and most trusted Integrated Agro-Value Enterprise by 2030, driving sustainable production, innovative value addition and dynamic marketing of agricultural products across global markets. Grenmetey Investments Pvt. Ltd, envisions a future where every harvest is maximized, every product is elevated, and every farmer thrives through our transformative agro-solutions.
      </p>
    </section>
  );
  export const CoreValues: React.FC = () => (
    <section className="bg-green-300 py-10 px-4 rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-green-900 mb-4">Core Values</h2>
      <ul className="list-disc pl-6 text-gray-900 space-y-3">
        <li>We are a customer centric organization where our aim is to put smiles (satisfaction) on our customers.</li>
        <li>We embrace technological developments to ensure effective services are provided.</li>
        <li>Quality matters more than price to us.</li>
        <li>Accessibility and diversity is a guarantee.</li>
      </ul>
    </section>
  );
  export const ReturnAndRefundPolicy: React.FC = () => (
    <section className="bg-green-50 py-10 px-4 rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Return &amp; Refund Policy</h2>
      <p className="text-gray-800 mb-6 font-semibold">www.grenmeteyinvestments.com Return &amp; Refund Policy</p>
      <ol className="list-decimal pl-6 text-gray-900 space-y-4">
        <li>
          <strong>Overview</strong><br />
          At Grenmetey Investments, customer satisfaction is our top priority. Goods can be returned under the conditions of damages, wrong order delivered, and expiry. If you are not completely satisfied with your purchase, you may return eligible items under the terms outlined below.
        </li>
        <li>
          <strong>Return Window &amp; Eligibility</strong><br />
          Products eligible for return can be returned unless explicitly stated as Non-Refundable. You may initiate a return within 24 hours of the delivery date.<br />
          Items must be returned in their original, unused condition, with all packaging and tags intact.
        </li>
        <li>
          <strong>Refunds, Exchanges &amp; Credits</strong><br />
          Refunds will be issued using the original payment method within 7–10 business days after we receive and inspect the item.<br />
          <em>Exchanges or Store Credit:</em> You may opt for a replacement, exchange, or store credit instead of a refund.
        </li>
        <li>
          <strong>Return Shipping &amp; Restocking Fee</strong><br />
          <em>Returned for Defect or Error:</em> If the return is due to our error (e.g., defective product, wrong item), we will cover return shipping.<br />
          <em>Change of Mind:</em> Customers are responsible for return shipping. A restocking fee of 10% of the purchase price may apply if the item is not defective.
        </li>
        <li>
          <strong>Exceptions &amp; Exclusions</strong><br />
          Certain items may be non-returnable, such as personalized products or sealed items for hygiene reasons once opened.<br />
          We reserve the right to refuse refunds on items returned in unsellable or used condition.
        </li>
        <li>
          <strong>Fraud Prevention &amp; Abuse Mitigation</strong><br />
          To maintain fairness and reduce abuse, we employ fraud-detection measures and may limit or deny returns for suspicious activity.
        </li>
        <li>
          <strong>Legal Rights &amp; Dispute Resolution</strong><br />
          If disputes arise, customers may pursue chargebacks via their card issuer, though the responsibility lies with the merchant to demonstrate the validity of the return.
        </li>
        <li>
          <strong>How to Initiate a Return</strong><br />
          Visit our Returns Portal and enter your order number and email.<br />
          Select the items for return, choose your return option, and submit a request.<br />
          Print the prepaid return label (if eligible) or ship using a carrier of your choice.<br />
          Once the return arrives and passes inspection, we’ll process your refund or exchange.
        </li>
        <li>
          <strong>Visibility &amp; Accessibility</strong><br />
          Our return policy is prominently available via:<br />
          <ul className="list-disc pl-6">
            <li>A dedicated “Return Policy” page linked in the footer.</li>
            <li>During checkout, so customers can review it before confirming purchase.</li>
            <li>In order-confirmation emails and customer account portals.</li>
          </ul>
        </li>
        <li>
          <strong>Updates &amp; Modifications</strong><br />
          We may update this policy periodically (at least once per year or as circumstances change), and the last updated date will be noted at the top.
        </li>
      </ol>
    </section>
  );
