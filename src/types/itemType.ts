export interface OrderItemDocument {
  id?: number;
  itemId?: number;
  name: string;
  amount: number;
  createdAt: number;
  description?: string;
  units: string;
  type: 'tambah' | 'kurang' | string;
}

export interface ItemDocument {
  id?: number;
  name: string;
  amounts: number;
  units: string;
  img?: any;
  description: string;
  createdAt: number;
  updatedAt: number;
}
