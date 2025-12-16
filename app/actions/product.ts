"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Product types matching backend model
export interface ProductImage {
  url: string;
  alt?: string;
  isPrimary: boolean;
}

export interface ProductCategory {
  _id: string;
  name: string;
  slug: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number;
  costPrice?: number;
  sku: string;
  barcode?: string;
  category: ProductCategory | string;
  subCategory?: string;
  brand?: string;
  tags: string[];
  images: ProductImage[];
  variants?: Array<{
    name: string;
    options: string[];
    price?: number;
    sku?: string;
    stock?: number;
  }>;
  stock: number;
  lowStockThreshold: number;
  trackInventory: boolean;
  allowBackorder: boolean;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  status: "active" | "draft" | "archived";
  featured: boolean;
  averageRating: number;
  totalReviews: number;
  totalSales: number;
  createdAt: string;
  updatedAt: string;
  createdBy?: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface GetProductsParams {
  page?: number;
  limit?: number;
  category?: string;
  status?: "active" | "draft" | "archived";
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  featured?: boolean;
  minPrice?: number;
  maxPrice?: number;
}

export interface GetProductsResponse {
  success: boolean;
  data?: Product[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
  error?: string;
}

// Get all products with pagination and filters
export async function getProducts(
  params: GetProductsParams = {}
): Promise<GetProductsResponse> {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      status = "active",
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
      featured,
      minPrice,
      maxPrice,
    } = params;

    // Build query string
    const queryParams = new URLSearchParams();
    queryParams.set("page", page.toString());
    queryParams.set("limit", limit.toString());
    queryParams.set("status", status);
    queryParams.set("sortBy", sortBy);
    queryParams.set("sortOrder", sortOrder);

    if (category) queryParams.set("category", category);
    if (search) queryParams.set("search", search);
    if (featured !== undefined)
      queryParams.set("featured", featured.toString());
    if (minPrice) queryParams.set("minPrice", minPrice.toString());
    if (maxPrice) queryParams.set("maxPrice", maxPrice.toString());

    const response = await fetch(
      `${API_URL}/api/products?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to fetch products");
    }

    const data = await response.json();
    return {
      success: true,
      data: data.data,
      pagination: data.pagination,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to fetch products",
      data: [],
      pagination: {
        total: 0,
        page: 1,
        limit: 20,
        pages: 0,
      },
    };
  }
}

// Get single product by ID or slug
export async function getProduct(
  idOrSlug: string
): Promise<{ success: boolean; data?: Product; error?: string }> {
  try {
    const response = await fetch(`${API_URL}/api/products/${idOrSlug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to fetch product");
    }

    const data = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch product",
    };
  }
}
