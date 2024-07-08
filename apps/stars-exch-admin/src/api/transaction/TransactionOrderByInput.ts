import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  status?: SortOrder;
  buyer?: SortOrder;
  seller?: SortOrder;
  serviceId?: SortOrder;
  prismaService?: SortOrder;
};
