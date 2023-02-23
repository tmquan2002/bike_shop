import { StoreInfo } from "./store-info";

export interface StaffInfo {
  id: number;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  active: boolean;
  store: StoreInfo;
  manager?: StaffInfo;
}
