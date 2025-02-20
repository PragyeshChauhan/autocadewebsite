import React from 'react';
import { Building2, PenTool, Ruler, FileCheck, Clock, Users } from 'lucide-react';

const services = [
  {
    title: 'Architectural Drafting',
    description: 'Detailed architectural drawings for residential and commercial projects.',
    icon: Building2,
  },
  {
    title: 'MEP Drafting',
    description: 'Mechanical, electrical, and plumbing system drawings.',
    icon: PenTool,
  },
  {
    title: 'Structural Drafting',
    description: 'Comprehensive structural engineering drawings and details.',
    icon: Ruler,
  },
  {
    title: 'As-Built Drawings',
    description: 'Accurate documentation of existing buildings and structures.',
    icon: FileCheck,
  },
  {
    title: 'Quick Turnaround',
    description: 'Fast delivery without compromising quality.',
    icon: Clock,
  },
  {
    title: 'Dedicated Support',
    description: '24/7 customer support and project management.',
    icon: Users,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive CAD drafting solutions for all your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;