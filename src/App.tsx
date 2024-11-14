import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { AuctionCard } from './components/AuctionCard';
import { AuctionTypes } from './components/AuctionTypes';
import { Features } from './components/Features';
import type { Auction } from './types';

const MOCK_AUCTIONS: Auction[] = [
  {
    id: '1',
    title: 'Vintage Rolex Submariner',
    description: 'A rare 1960s Rolex Submariner in excellent condition. Original parts and documentation included.',
    imageUrl: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80',
    currentBid: 15000,
    startingBid: 10000,
    endTime: new Date(Date.now() + 86400000), // 24 hours from now
    seller: 'LuxuryWatches',
    category: 'Watches'
  },
  {
    id: '2',
    title: 'First Edition Harry Potter Book',
    description: 'First edition, first printing of Harry Potter and the Philosopher\'s Stone. Excellent condition.',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80',
    currentBid: 25000,
    startingBid: 20000,
    endTime: new Date(Date.now() + 172800000), // 48 hours from now
    seller: 'RareBooks',
    category: 'Books'
  },
  {
    id: '3',
    title: 'Original Andy Warhol Print',
    description: 'Authenticated Andy Warhol print from his famous Campbell\'s Soup series. Limited edition.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80',
    currentBid: 45000,
    startingBid: 40000,
    endTime: new Date(Date.now() + 259200000), // 72 hours from now
    seller: 'ModernArtGallery',
    category: 'Art'
  }
];

function App() {
  const [auctions, setAuctions] = React.useState<Auction[]>(MOCK_AUCTIONS);

  const handleBid = (auctionId: string, amount: number) => {
    setAuctions(prevAuctions =>
      prevAuctions.map(auction =>
        auction.id === auctionId
          ? { ...auction, currentBid: amount }
          : auction
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Active Auctions</h1>
          <div className="flex gap-4">
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Categories</option>
              <option value="art">Art</option>
              <option value="watches">Watches</option>
              <option value="books">Books</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="ending-soon">Ending Soon</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {auctions.map(auction => (
            <AuctionCard
              key={auction.id}
              auction={auction}
              onBid={handleBid}
            />
          ))}
        </div>

        <AuctionTypes />
        <Features />
      </main>
    </div>
  );
}

export default App;