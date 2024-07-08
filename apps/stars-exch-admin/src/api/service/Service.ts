import { Ad } from "../ad/Ad";
import { Transaction } from "../transaction/Transaction";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  ad?: Ad | null;
  transactions?: Array<Transaction>;
  prismaService: number | null;
};
