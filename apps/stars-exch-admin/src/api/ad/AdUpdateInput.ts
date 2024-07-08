import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceUpdateManyWithoutAdsInput } from "./ServiceUpdateManyWithoutAdsInput";

export type AdUpdateInput = {
  title?: string | null;
  description?: string | null;
  price?: number | null;
  user?: UserWhereUniqueInput | null;
  services?: ServiceUpdateManyWithoutAdsInput;
};
