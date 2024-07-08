import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AdWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  services?: ServiceListRelationFilter;
  prismaService?: IntNullableFilter;
};
