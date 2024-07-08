import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ServiceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  ad?: AdWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
  prismaService?: IntNullableFilter;
};
