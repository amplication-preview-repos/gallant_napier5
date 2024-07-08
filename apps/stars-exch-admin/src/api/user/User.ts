import { JsonValue } from "type-fest";
import { Ad } from "../ad/Ad";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  ads?: Array<Ad>;
};
