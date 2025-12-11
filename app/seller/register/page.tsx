'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SellerRegistrationPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        name: '',
        email: '',
        mobile: '',
        password: '',
        // Step 2
        storeName: '',
        businessType: 'individual',
        gstNumber: '',
        panNumber: '',
        // Step 3
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',
        // Step 4
        accountHolder: '',
        bankName: '',
        accountNumber: '',
        ifsc: '',
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
        setStep(5); // Success step
    };

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
        'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
        'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
        'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
        'Uttarakhand', 'West Bengal', 'Delhi', 'Mumbai'
    ];

    if (step === 5) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#2D3436] mb-2">Registration Successful!</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                        Your seller account is currently <span className="font-bold text-yellow-600">Under Review</span>.
                        We will notify you via email once your details are verified.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#FF6B6B] hover:bg-[#FF5252] transition-colors"
                    >
                        Return to Home
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
                {/* Background decoration */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Progress Bar */}
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-[#2D3436] text-center mb-10 tracking-tight">Become a Seller</h1>
                    <div className="flex items-center justify-between relative max-w-2xl mx-auto">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
                        <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-primary -z-10 transition-all duration-500 rounded-full`} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>

                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md transition-all duration-300 ${step >= i ? 'bg-primary text-white scale-110' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>
                                    {i}
                                </div>
                                <span className={`text-xs font-semibold mt-2 uppercase tracking-wide transition-colors duration-300 ${step >= i ? 'text-primary' : 'text-gray-400'}`}>
                                    {i === 1 ? 'Basic' : i === 2 ? 'Business' : i === 3 ? 'Address' : 'Bank'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <form onSubmit={handleSubmit} className="p-8 md:p-12">
                        {/* Step 1: Basic Details */}
                        {step === 1 && (
                            <div className="space-y-8 animate-fade-in-up">
                                <div className="border-b border-gray-100 pb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Basic Details</h3>
                                    <p className="text-gray-500 text-sm mt-1">Tell us a bit about yourself.</p>
                                </div>

                                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="Enter full name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="Enter email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                                        <input type="tel" name="mobile" required pattern="[0-9]{10}" value={formData.mobile} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="10 digits" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                                        <input type="password" name="password" required value={formData.password} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="Create a password" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Business Info */}
                        {step === 2 && (
                            <div className="space-y-8 animate-fade-in-up">
                                <div className="border-b border-gray-100 pb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Business Information</h3>
                                    <p className="text-gray-500 text-sm mt-1">Details about your store and business type.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Store / Business Name</label>
                                        <input type="text" name="storeName" required value={formData.storeName} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="e.g. My Awesome Store" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
                                        <select name="businessType" value={formData.businessType} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors">
                                            <option value="individual">Individual / Sole Proprietor</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="pvtltd">Private Limited</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">GST Number (Optional)</label>
                                        <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="GSTIN" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Number (Optional)</label>
                                        <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="PAN" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Address */}
                        {step === 3 && (
                            <div className="space-y-8 animate-fade-in-up">
                                <div className="border-b border-gray-100 pb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Pickup Address</h3>
                                    <p className="text-gray-500 text-sm mt-1">Where should we pick up your products from?</p>
                                </div>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Address Line 1</label>
                                        <input type="text" name="addressLine1" required value={formData.addressLine1} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="Building, Street, Area" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Address Line 2</label>
                                        <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="Landmark, etc." />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                                        <input type="text" name="city" required value={formData.city} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                                        <select name="state" required value={formData.state} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors">
                                            <option value="">Select State</option>
                                            {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
                                        <input type="text" name="pincode" required pattern="[0-9]{6}" value={formData.pincode} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Bank Details */}
                        {step === 4 && (
                            <div className="space-y-8 animate-fade-in-up">
                                <div className="border-b border-gray-100 pb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Bank Details</h3>
                                    <p className="text-gray-500 text-sm mt-1">For receiving payments.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Account Holder Name</label>
                                        <input type="text" name="accountHolder" required value={formData.accountHolder} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" placeholder="As per bank records" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name</label>
                                        <input type="text" name="bankName" required value={formData.bankName} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Account Number</label>
                                        <input type="text" name="accountNumber" required value={formData.accountNumber} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">IFSC Code</label>
                                        <input type="text" name="ifsc" required value={formData.ifsc} onChange={handleChange} className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="mt-10 flex justify-between pt-6 border-t border-gray-100">
                            {step > 1 ? (
                                <button type="button" onClick={handleBack} className="bg-white py-3 px-8 border border-gray-300 rounded-full shadow-sm text-sm font-bold uppercase tracking-wide text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 hover:shadow-md">
                                    Back
                                </button>
                            ) : <div></div>}

                            {step < 4 ? (
                                <button type="button" onClick={handleNext} className="bg-primary py-3 px-10 border border-transparent rounded-full shadow-lg text-sm font-bold uppercase tracking-wide text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:-translate-y-0.5">
                                    Next
                                </button>
                            ) : (
                                <button type="submit" disabled={loading} className="bg-green-600 py-3 px-10 border border-transparent rounded-full shadow-lg text-sm font-bold uppercase tracking-wide text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-all duration-300 transform hover:-translate-y-0.5">
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}
