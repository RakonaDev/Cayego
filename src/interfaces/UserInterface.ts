export interface User {
  id: number;
  name: string;
  photo_driver: string | null;
  photo_vehicle: string | null;
  ruc: string | null;
  phone: string | null;
  address: string | null;
  dni: string | null;
  date_afiliate: string | null;
  email: string;
  email_verified_at: string | null;
  password?: string; // Opcional, ya que no siempre se incluye (e.g., al obtener un usuario)
  account_bank: string | null;
  role: 'admin' | 'conductor';
  remember_token?: string; // Opcional, similar a password
  created_at?: Date;
  updated_at?: Date;
}