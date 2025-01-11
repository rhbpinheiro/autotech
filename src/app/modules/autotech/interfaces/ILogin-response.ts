import { IUser} from "./IUser";

export interface ILoginResponse {
  token: string;
  usuario: IUser;
}
