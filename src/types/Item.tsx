export type Item = {
  id: number;
  content: string;
  price: number;
  sellerId: number;
  buyerId?: number;
  sold: boolean;
  dispatched: boolean;
}
