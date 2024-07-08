import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  status?: "Option1";
  buyer?: StringNullableFilter;
  seller?: StringNullableFilter;
  service?: ServiceWhereUniqueInput;
};
