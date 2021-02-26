export type Item = {
  id: number;
  content: string;
  price: number;
  sellerId: number;
  buyerId?: number;
  ordered: boolean;
  dispatched: boolean;
  complete: boolean;
  complained: boolean;
}
