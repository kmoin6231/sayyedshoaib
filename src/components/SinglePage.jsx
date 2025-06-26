import React from 'react';
import { FaPhone } from 'react-icons/fa';

function SinglePage() {
  return (
    <div className="single-page-content">
      {/* Hero Section */}
      <section className="py-12" id="home">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Air Conditioning Services</h1>
              <p className="text-gray-600 mb-8">Keep your home comfortable all year round with our expert AC repair and maintenance services.</p>
              <a href="tel:+917620373841">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors active:scale-95">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Comprehensive air conditioning solutions for residential and commercial properties.
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="services">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-4xl mb-4">🧊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Repair</h3>
              <p className="text-gray-600 mb-4">Expert diagnosis and repair of all air conditioning issues, from simple fixes to complex system failures.</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Complete system diagnostics</li>
                <li>• Compressor repairs and replacement</li>
                <li>• Refrigerant leak detection and repair</li>
                <li>• Electrical component troubleshooting</li>
                <li>• Thermostat repairs and upgrades</li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-4xl mb-4">🧹</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Maintenance</h3>
              <p className="text-gray-600 mb-4">Regular maintenance to keep your system running efficiently and extend its lifespan.</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Cleaning of filters, coils, and fins</li>
                <li>• Checking refrigerant levels</li>
                <li>• Inspecting electrical connections</li>
                <li>• Lubricating moving parts</li>
                <li>• Performance evaluation</li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">New AC Installation</h3>
              <p className="text-gray-600 mb-4">Professional installation of new air conditioning systems tailored to your space.</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Expert consultation and system sizing</li>
                <li>• Quality installation by certified technicians</li>
                <li>• Setup and configuration</li>
                <li>• Post-installation inspection</li>
                <li>• Warranty registration assistance</li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Replacement</h3>
              <p className="text-gray-600 mb-4">Upgrade your old system to a more efficient, modern air conditioner.</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• System evaluation and recommendations</li>
                <li>• Removal and disposal of old unit</li>
                <li>• Installation of new system</li>
                <li>• Energy efficiency optimization</li>
                <li>• Complete testing and demonstration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">About Cool Air Repairs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Trusted AC repair and maintenance services for homes and businesses across India.
          </p>
          
          {/* Our Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-500 text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">We never compromise on quality. From the parts we use to the service we provide, excellence is our standard.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-500 text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">We show up when we say we will and complete the job within the promised timeframe.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-500 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">Transparent pricing, honest recommendations, and no unnecessary upselling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to schedule a service?</h2>
            <p className="text-gray-600 mb-6">Our expert technicians are just a call away.</p>
            <a href="tel:+917620373841">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors active:scale-95">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Reach out to our team for AC installation, repairs, or maintenance services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
            {/* Contact Information */}
            <div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <FaPhone className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Call or WhatsApp</h3>
                      <p className="text-sm text-gray-600 mb-2">Contact us anytime via call or WhatsApp!</p>
                      
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <a href="tel:+917620373841" className="inline-flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                            <FaPhone className="mr-1 text-xs" /> Call: +91 7620373841
                          </a>
                          <a href="https://wa.me/917620373841" className="inline-flex items-center text-gray-600 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SinglePage;
