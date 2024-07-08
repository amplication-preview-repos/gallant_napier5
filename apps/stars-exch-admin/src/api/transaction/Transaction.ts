import { Service } from "../service/Service";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status?: "Option1" | null;
  buyer: string | null;
  seller: string | null;
  service?: Service | null;
};
