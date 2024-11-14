import React from 'react';
import { Users, Package, Tags, FileCheck, Search, DollarSign, Heart, BookOpen, TrendingUp, Globe } from 'lucide-react';

const features = [
  {
    title: 'Multiple User Profiles',
    description: 'Create and manage different profiles for buying and selling.',
    icon: <Users className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Auction Details',
    description: 'Comprehensive information about each item up for auction.',
    icon: <Package className="w-6 h-6 text-green-500" />
  },
  {
    title: 'Product Categorization',
    description: 'Easy-to-navigate categories for all items.',
    icon: <Tags className="w-6 h-6 text-yellow-500" />
  },
  {
    title: 'Selling Request',
    description: 'Simple process to list your items for auction.',
    icon: <FileCheck className="w-6 h-6 text-purple-500" />
  },
  {
    title: 'Smart Search',
    description: 'Advanced search functionality to find specific items.',
    icon: <Search className="w-6 h-6 text-red-500" />
  },
  {
    title: 'Minimum Selling Price',
    description: 'Set reserve prices for your auctions.',
    icon: <DollarSign className="w-6 h-6 text-indigo-500" />
  },
  {
    title: 'Favorites',
    description: "Save and track auctions you're interested in.",
    icon: <Heart className="w-6 h-6 text-pink-500" />
  },
  {
    title: 'Auction Guidelines',
    description: 'Clear rules and procedures for all auctions.',
    icon: <BookOpen className="w-6 h-6 text-teal-500" />
  },
  {
    title: 'Popular Products',
    description: 'Trending items and featured auctions.',
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />
  },
  {
    title: 'Online Bids',
    description: 'Real-time bidding from anywhere in the world.',
    icon: <Globe className="w-6 h-6 text-cyan-500" />
  }
];

export function Features() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:border-blue-500 transition-colors">
            {feature.icon}
            <div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}