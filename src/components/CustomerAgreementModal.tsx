import React, { useState } from "react";

interface CustomerAgreementModalProps {
  open: boolean;
  onAgree: (data: any) => void;
}

export const CustomerAgreementModal: React.FC<CustomerAgreementModalProps> = ({ open, onAgree }) => {
  const [form, setForm] = useState({
    customerId: "",
    age: "",
    gender: "",
    productType: "Organic",
    rating: 5,
    orderStatus: "Completed",
    paymentMethod: "Bank",
    purchaseDate: "",
    shippingType: "Standard",
    productName: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === "checkbox") {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setForm(prev => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.agree) {
      onAgree(form);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Customer Data Agreement & Signature</h2>
        <p className="text-gray-700 mb-6 text-sm">Please review and complete the required information. By signing, you agree to our customer data policy.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Customer ID</label>
            <input name="customerId" value={form.customerId} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="User ID" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Age</label>
            <input name="age" type="number" min="1" value={form.age} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Product Type</label>
            <select name="productType" value={form.productType} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="Organic">Organic</option>
              <option value="Non Organic">Non Organic</option>
              <option value="Seeds">Seeds</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Rating (1-5)</label>
            <input name="rating" type="number" min="1" max="5" value={form.rating} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Order Status</label>
            <select name="orderStatus" value={form.orderStatus} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="Cancelled">Cancelled</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Payment Method</label>
            <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="Bank">Bank</option>
              <option value="Cash">Cash</option>
              <option value="Credit card">Credit card</option>
              <option value="Debit card">Debit card</option>
              <option value="Pay pal">Pay pal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Purchase Date</label>
            <input name="purchaseDate" type="date" value={form.purchaseDate} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Shipping Type</label>
            <select name="shippingType" value={form.shippingType} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="Expedited">Expedited (2 days)</option>
              <option value="Express">Express (Fast, Premium)</option>
              <option value="Overnight">Overnight (1 day)</option>
              <option value="Same Day">Same Day (24-48 hrs)</option>
              <option value="Standard">Standard (3-5 days)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Product Name</label>
            <input name="productName" value={form.productName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div className="flex items-center mt-4">
            <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} required className="h-5 w-5 text-green-600" />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-700">I agree to the customer data policy and sign this form.</label>
          </div>
        </div>
        <button type="submit" disabled={!form.agree} className="mt-6 w-full py-3 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition">Sign & Continue</button>
      </form>
    </div>
  );
};
