export interface ServiceInterface {
  id: number
  title: string
  description: string
  url_image: string
}

export interface ServicesResponse {
  services: ServiceInterface[];
  currentPage: number;
  totalPages: number;
}

export interface ServiceResponse {
  services: ServiceInterface;
}

export interface ServicePaginate {
  currentPage: number
  setCurrentPage: (page: number) => void
}