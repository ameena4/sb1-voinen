import React from 'react';
import { Info, ArrowDown, ArrowUp, Lock, Coins, Clock } from 'lucide-react';

const auctionTypes = [
  {
    title: 'English Auction',
    description: 'Prices start low and increase as buyers bid. Highest bidder wins.',
    icon: <ArrowUp className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Dutch Auction',
    description: 'Prices start high and decrease until a buyer accepts.',
    icon: <ArrowDown className="w-6 h-6 text-green-500" />
  },
  {
    title: 'Vickrey Auction',
    description: 'Sealed bids, winner pays second-highest bid price.',
    icon: <Info className="w-6 h-6 text-purple-500" />
  },
  {
    title: 'Double Auction',
    description: 'Multiple buyers and sellers can bid and ask simultaneously.',
    icon: <Clock className="w-6 h-6 text-orange-500" />
  },
  {
    title: 'Sealed Bid',
    description: 'All bids are private until the auction ends.',
    icon: <Lock className="w-6 h-6 text-red-500" />
  },
  {
    title: 'Penny Auction',
    description: 'Each bid increases price by small amount and extends time.',
    icon: <Coins className="w-6 h-6 text-yellow-500" />
  }
];

export function AuctionTypes() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Auction Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctionTypes.map((type) => (
          <div key={type.title} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:border-blue-500 transition-colors">
            {type.icon}
            <div>
              <h3 className="font-semibold text-gray-900">{type.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{type.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}