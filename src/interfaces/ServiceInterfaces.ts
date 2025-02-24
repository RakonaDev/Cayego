export interface ServiceInterface {
  id?: number;
  name: string;
  title_en?: string;
  description: string;
  description_en?: string;
  url_image: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ServicesResponse {
  services: ServiceInterface[];
  currentPage: number;
  totalPages: number;
}

export interface ServiceResponse {
  service: ServiceInterface;
}

export interface ServicePaginate {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export interface EditService {
  updatedService: FormData;
  id?: number;
}
