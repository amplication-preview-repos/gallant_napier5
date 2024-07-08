import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { TransactionCreateNestedManyWithoutServicesInput } from "./TransactionCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  name?: string | null;
  description?: string | null;
  ad?: AdWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutServicesInput;
};
