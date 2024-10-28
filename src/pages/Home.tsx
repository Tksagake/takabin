import * as React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Trash2, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Smart Waste Management for a{' '}
          <span className="text-emerald-600">Cleaner Future</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join our community of eco-conscious individuals and organizations making
          a difference through responsible waste management.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/waste-sorting"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Start Sorting
          </Link>
          <Link
            to="/login"
            className="bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition"
          >
            Join Now
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Recycle className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Smart Sorting</h3>
          <p className="text-gray-600">
            Learn how to properly sort your waste and contribute to a sustainable future.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Trash2 className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Collection</h3>
          <p className="text-gray-600">
            Schedule waste collection at your convenience with our network of certified collectors.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
          <p className="text-gray-600">
            Get points and cash rewards for your contribution to recycling and proper waste management.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: 'Sign Up',
              description: 'Create an account as a waste thrower or collector',
              icon: <Users className="h-6 w-6" />,
            },
            {
              step: 2,
              title: 'Sort Waste',
              description: 'Use our guide to sort your waste properly',
              icon: <Recycle className="h-6 w-6" />,
            },
            {
              step: 3,
              title: 'Schedule Collection',
              description: 'Request a pickup when you are ready',
              icon: <Trash2 className="h-6 w-6" />,
            },
            {
              step: 4,
              title: 'Earn Rewards',
              description: 'Get points and cash for recycling',
              icon: <Award className="h-6 w-6" />,
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">Step {item.step}</h3>
              <h4 className="text-lg font-medium mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
