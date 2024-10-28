export interface WasteCategory {
  id: string;
  name: string;
  description: string;
  points: number;
  recyclable: boolean;
  icon: string;
  examples: string[];
}

export interface CollectionRequest {
  id: string;
  userId: string;
  status: 'pending' | 'accepted' | 'completed';
  wasteTypes: string[];
  scheduledDate: string;
  location: string;
  notes?: string;
  createdAt: string;
}

export interface WasteSortingResult {
  categoryId: string;
  quantity: number;
  points: number;
}