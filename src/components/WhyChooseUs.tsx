import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  'Over 15 years of industry experience',
  'Certified AutoCAD professionals',
  'Quick turnaround time',
  'Competitive pricing',
  'Quality assurance guarantee',
  '24/7 customer support',
  'Secure file handling',
  'Revision support',
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We deliver excellence in every project with our experienced team and
              commitment to quality. Here's why clients trust us:
            </p>
            <div className="mt-8 space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team working on AutoCAD project"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;