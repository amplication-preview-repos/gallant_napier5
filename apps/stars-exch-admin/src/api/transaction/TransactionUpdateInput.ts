import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  buyer?: string | null;
  seller?: string | null;
  service?: ServiceWhereUniqueInput | null;
};
