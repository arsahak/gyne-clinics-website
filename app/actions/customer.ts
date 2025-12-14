"use server";

import { auth } from "@/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Helper to get auth headers
async function getAuthHeaders() {
  const session = await auth();
  if (!session?.accessToken) {
    throw new Error("Not authenticated");
  }
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.accessToken}`,
  };
}

// Get current customer profile
export async function getCurrentCustomer() {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_URL}/api/customers/me`, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to fetch customer profile");
    }

    const data = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching customer:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch customer profile",
      data: null,
    };
  }
}

// Update current customer profile
export async function updateCurrentCustomer(updateData: {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}) {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_URL}/api/customers/me`, {
      method: "PUT",
      headers,
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to update profile");
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || "Profile updated successfully",
      data: data.data,
    };
  } catch (error) {
    console.error("Error updating customer:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update profile",
    };
  }
}

// Update password
export async function updatePassword(
  currentPassword: string,
  newPassword: string
) {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_URL}/api/customers/me/password`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to update password");
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || "Password updated successfully",
    };
  } catch (error) {
    console.error("Error updating password:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update password",
    };
  }
}

// Add address
export async function addAddress(addressData: {
  fullName: string;
  phone: string;
  email?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  addressType?: "billing" | "shipping" | "both";
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
}) {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_URL}/api/customers/me/addresses`, {
      method: "POST",
      headers,
      body: JSON.stringify(addressData),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to add address");
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || "Address added successfully",
      data: data.data,
    };
  } catch (error) {
    console.error("Error adding address:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to add address",
    };
  }
}

// Update address
export async function updateAddress(
  addressId: string,
  addressData: {
    fullName?: string;
    phone?: string;
    email?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    addressType?: "billing" | "shipping" | "both";
    isDefaultBilling?: boolean;
    isDefaultShipping?: boolean;
  }
) {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(
      `${API_URL}/api/customers/me/addresses/${addressId}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify(addressData),
      }
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to update address");
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || "Address updated successfully",
      data: data.data,
    };
  } catch (error) {
    console.error("Error updating address:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update address",
    };
  }
}

// Delete address
export async function deleteAddress(addressId: string) {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(
      `${API_URL}/api/customers/me/addresses/${addressId}`,
      {
        method: "DELETE",
        headers,
      }
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to delete address");
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || "Address deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting address:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to delete address",
    };
  }
}
