export interface Room {
  id: number;
  name: string;
  type: 'Single' | 'Double' | 'Suite';
  price: number;
  available: boolean;
}