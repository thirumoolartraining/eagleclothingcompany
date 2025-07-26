export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  gallery: string[];
  material: string;
  moq: number;
  customizable: boolean;
  description: string;
  specs: {
    fabric: string;
    weight: string;
    colors: string[];
    sizes: string[];
  };
  priceTiers: {
    quantity: number;
    price: number;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations: {
    fabric?: string;
    logoPlacement?: string;
    logoFile?: File;
    sizing?: string;
    notes?: string;
  };
}

export interface InquiryData {
  companyName: string;
  contactName: string;
  email: string;
  country: string;
  taxId?: string;
  phone: string;
  specSheets?: File[];
  message?: string;
}