import { BaseQueryApi } from "@reduxjs/toolkit/query"

export type TError = {
    data: {
        message: string,
        stack: string,
        success: boolean
    },
    status: number
}


export type TResponse<T> = {
    data?: T,
    error?: TError,
    success: boolean,
    message: string
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type FlexProps = {
    children: React.ReactNode; // Define children as ReactNode
    className?: string; // Make className optional
  };

export type ImgProps = {
    imgSrc: string; // Define children as ReactNode
    className?: string; // Make className optional
  };

  export interface Brand {
    _id: string;
    title: string;
    // Add other relevant fields here
  }
  
  export interface Category {
    _id: number;
  title: string;
  icons?: boolean;
    // Add other relevant fields here
  }

  export interface TProduct {
    _id: string;
    name: string;
    quantity: number;
    image: string;
    price: number;
    badge: any;
    colors: string;

    // other relevant fields
  }

  // Define the state interface
export interface ChowdhuryState {
    userInfo: any[]; // Adjust as needed for userInfo
    products: TProduct[];
    checkedBrands: Brand[];
    checkedCategorys: Category[];
    loading: boolean,
    error: string | null,
  }