import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceCreateNestedManyWithoutAdsInput } from "./ServiceCreateNestedManyWithoutAdsInput";

export type AdCreateInput = {
  title?: string | null;
  description?: string | null;
  price?: number | null;
  user?: UserWhereUniqueInput | null;
  services?: ServiceCreateNestedManyWithoutAdsInput;
  prismaService?: number | null;
};
