import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { TransactionUpdateManyWithoutServicesInput } from "./TransactionUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  name?: string | null;
  description?: string | null;
  ad?: AdWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutServicesInput;
  prismaService?: number | null;
};
