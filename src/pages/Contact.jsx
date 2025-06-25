import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Reach out to our team for AC installation, repairs, or maintenance services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
              <select 
                id="service" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="repair">AC Repair</option>
                <option value="maintenance">AC Maintenance</option>
                <option value="installation">New AC Installation</option>
                <option value="replacement">AC Replacement</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Please provide details about your AC issue or service request..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        
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
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 7620373841</p>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">service@coolairrepairs.com</p>
                  <p className="text-gray-600">info@coolairrepairs.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Cooling Street, AC Tower</p>
                  <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FaClock className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600 font-semibold mt-1">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Service Areas</h2>
            <p className="text-gray-600 mb-4">We provide AC repair and maintenance services in the following areas:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-gray-600">• Mumbai</div>
              <div className="text-gray-600">• Thane</div>
              <div className="text-gray-600">• Navi Mumbai</div>
              <div className="text-gray-600">• Pune</div>
              <div className="text-gray-600">• Kalyan</div>
              <div className="text-gray-600">• Dombivli</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Map Placeholder */}
      <div className="bg-gray-200 h-80 rounded-lg mb-8 flex items-center justify-center">
        <p className="text-gray-600">Google Map will be displayed here</p>
      </div>
      
      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">How quickly can you respond to an emergency AC repair?</h3>
            <p className="text-gray-600 mt-2">For emergency repairs, we typically arrive within 2-4 hours of your call, depending on your location.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">Do you provide free estimates?</h3>
            <p className="text-gray-600 mt-2">Yes, we offer free estimates for all new installations and replacements. For repairs, there may be a diagnostic fee that gets waived if you proceed with the repair.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">What brands of air conditioners do you service?</h3>
            <p className="text-gray-600 mt-2">We service all major brands including Daikin, Carrier, Voltas, Blue Star, LG, Samsung, Hitachi, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
