export interface DriverInterface {
  id?: number;
  name: string;
  photo_driver?: string;
  photo_vehicle?: string;
  ruc?: string;
  phone?: string;
  address?: string;
  dni?: string;
  date_afiliate?: string;
  email?: string;
  password?: string;
  account_bank?: string;
  created_at: Date;
  updated_at: Date;
}

export interface DriversResponse {
  drivers: DriverInterface[];
  currentPage: number;
  totalPages: number;
}

export interface DriverResponse {
  driver: DriverInterface;
}

export interface DriverPaginate {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}


export interface EditDriver {
  updatedDriver: FormData;
  id?: number;
}
