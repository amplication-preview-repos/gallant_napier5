import { SortOrder } from "../../util/SortOrder";

export type AdOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  userId?: SortOrder;
  prismaService?: SortOrder;
};
