'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import YearlyPlansModal from '@/components/PlansModal';

export default function PlansPage() {
  const [showModal, setShowModal] = useState(false);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const plans = [
    {
      name: "Home",
      description: "Homes & Casual Users",
      price: "$29.99",
      annualPrice: "$360/year",
      features: [
        "100 Mbps Download Speed",
        "Unlimited Data Usage",
        "Free Wi-Fi Router",
        "24/7 Technical Support"
      ],
      cta: "Get A Plan",
      popular: false
    },
    {
      name: "Business",
      description: "Small & Medium Businesses",
      price: "$99.99",
      annualPrice: "$1,199/year",
      features: [
        "500 Mbps Download Speed",
        "Unlimited Data with SLA",
        "Business-Class Wi-Fi Router",
        "Dedicated Customer Portal"
      ],
      cta: "Get A Plan",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Large Enterprises & ISPs",
      price: "$399.99",
      annualPrice: "$4,799/year",
      features: [
        "1 Gbps+ Dedicated Bandwidth",
        "Multi-Location Connectivity",
        "Redundant Backup Connection",
        "Customizable Security Suite"
      ],
      cta: "Get A Plan",
      popular: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Internet Plans & Pricing
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Find the perfect plan for your home or business
          </motion.p>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Exclusive Deals Just for You!</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Take advantage of our limited-time offers designed to enhance your internet experience.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto">
            {/* Image Card - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative h-64 lg:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/offers/special-offer.jpg"
                  alt="Special Internet Offer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">Limited Time Offer</h3>
                    <p className="text-lg">Upgrade today and enjoy premium features</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Yearly Savings - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center h-full">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  15<span className="text-3xl">%</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Yearly Savings</h3>
                <p className="text-gray-600 mb-4">
                  Save 15% when you pay annually instead of monthly
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Lock in your rate for 12 months
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    No price increases during your term
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Free premium router included
                  </li>
                </ul>
                <button 
        onClick={() => setShowModal(true)}
className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        View Yearly Plans
      </button>

      <YearlyPlansModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
                <div>
      
    </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our packages offer exceptional performance tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-lg p-6 ${plan.popular ? 'border-blue-500 shadow-xl relative' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold absolute -top-3 left-1/2 transform -translate-x-1/2">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/month*</span>
                  <p className="text-sm text-gray-500 mt-1">*Paid annually at {plan.annualPrice}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What&apos;s Included?</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/signup"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Add-Ons and Upgrades</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Enhance Your Internet Experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-3">Speed Boost</h3>
              <p className="text-gray-600 mb-4">Increase internet speed for 4K streaming, gaming, and smart devices.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-3">Premium Wi-Fi Router</h3>
              <p className="text-gray-600 mb-4">Upgrade for stronger signal, wider coverage, and faster performance on all devices.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-3">Advanced Protection</h3>
              <p className="text-gray-600 mb-4">Keep your network secure with firewall, VPN, and threat monitoring.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-3">PowerBank</h3>
              <p className="text-gray-600 mb-4">Stay connected during outages with our high-capacity backup power solution.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-3">Extended Support</h3>
              <p className="text-gray-600 mb-4">Get priority support with faster responses and extended service hours.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-3">Wi-Fi Range Extender</h3>
              <p className="text-gray-600 mb-4">Expand Wi-Fi coverage to eliminate dead zones and ensure stable connections.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers enjoying reliable, high-speed internet
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-100 transition"
              >
                Sign Up Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}