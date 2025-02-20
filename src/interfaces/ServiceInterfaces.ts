export interface ServiceInterface {
  id: number
  title: string
  description: string
  url_image: string
}

export interface ServiceResponse {
  service: ServiceInterface[];
  currentPage: number;
  totalPages: number;
}

export interface ServicePaginate {
  currentPage: number
  setCurrentPage: (page: number) => void
}