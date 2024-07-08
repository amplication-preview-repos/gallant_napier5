import { InputJsonValue } from "../../types";
import { AdUpdateManyWithoutUsersInput } from "./AdUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  ads?: AdUpdateManyWithoutUsersInput;
  prismaService?: number | null;
};
