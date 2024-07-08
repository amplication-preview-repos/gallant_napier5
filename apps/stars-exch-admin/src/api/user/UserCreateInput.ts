import { InputJsonValue } from "../../types";
import { AdCreateNestedManyWithoutUsersInput } from "./AdCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  ads?: AdCreateNestedManyWithoutUsersInput;
  prismaService?: number | null;
};
