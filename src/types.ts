export interface Auction {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  currentBid: number;
  startingBid: number;
  endTime: Date;
  seller: string;
  category: string;
}

export interface Bid {
  id: string;
  auctionId: string;
  amount: number;
  bidder: string;
  timestamp: Date;
}