import { User } from "../user/User";
import { Service } from "../service/Service";

export type Ad = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  price: number | null;
  user?: User | null;
  services?: Array<Service>;
  prismaService: number | null;
};
