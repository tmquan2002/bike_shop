export interface StoreInfo {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface StoreForm {
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
}