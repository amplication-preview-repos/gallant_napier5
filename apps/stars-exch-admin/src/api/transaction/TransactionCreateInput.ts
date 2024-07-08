import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  buyer?: string | null;
  seller?: string | null;
  service?: ServiceWhereUniqueInput | null;
  prismaService?: number | null;
};
