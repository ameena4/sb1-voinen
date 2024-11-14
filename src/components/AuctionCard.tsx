import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Timer, Tag, DollarSign } from 'lucide-react';
import { Auction } from '../types';

interface AuctionCardProps {
  auction: Auction;
  onBid: (auctionId: string, amount: number) => void;
}

export function AuctionCard({ auction, onBid }: AuctionCardProps) {
  const [bidAmount, setBidAmount] = React.useState(auction.currentBid + 1);
  
  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    onBid(auction.id, bidAmount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={auction.imageUrl} 
        alt={auction.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{auction.title}</h3>
          <span className="flex items-center text-sm text-gray-600">
            <Tag size={16} className="mr-1" />
            {auction.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{auction.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-emerald-600">
            <DollarSign size={18} />
            <span className="font-bold text-lg">{auction.currentBid}</span>
          </div>
          <div className="flex items-center text-orange-500">
            <Timer size={16} className="mr-1" />
            <span className="text-sm">
              {formatDistanceToNow(new Date(auction.endTime), { addSuffix: true })}
            </span>
          </div>
        </div>

        <form onSubmit={handleBid} className="flex gap-2">
          <input
            type="number"
            min={auction.currentBid + 1}
            value={bidAmount}
            onChange={(e) => setBidAmount(Number(e.target.value))}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Place Bid
          </button>
        </form>
      </div>
    </div>
  );
}