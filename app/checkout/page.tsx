"use client";

import { createOrder } from "@/app/actions/order";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface FormData {
  // Shipping Address
  shippingFullName: string;
  shippingPhone: string;
  shippingEmail: string;
  shippingAddressLine1: string;
  shippingAddressLine2: string;
  shippingCity: string;
  shippingState: string;
  shippingZipCode: string;
  shippingCountry: string;

  // Billing Address
  sameAsShipping: boolean;
  billingFullName: string;
  billingPhone: string;
  billingEmail: string;
  billingAddressLine1: string;
  billingAddressLine2: string;
  billingCity: string;
  billingState: string;
  billingZipCode: string;
  billingCountry: string;

  // Payment & Shipping
  paymentMethod: string;
  shippingMethod: string;
  customerNote: string;
}

const CheckoutPage = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    shippingFullName: "",
    shippingPhone: "",
    shippingEmail: "",
    shippingAddressLine1: "",
    shippingAddressLine2: "",
    shippingCity: "",
    shippingState: "",
    shippingZipCode: "",
    shippingCountry: "United Kingdom",
    sameAsShipping: true,
    billingFullName: "",
    billingPhone: "",
    billingEmail: "",
    billingAddressLine1: "",
    billingAddressLine2: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    billingCountry: "United Kingdom",
    paymentMethod: "card_debit",
    shippingMethod: "Standard Shipping",
    customerNote: "",
  });

  const subtotal = getTotalPrice();

  // Calculate shipping cost based on method
  const shippingCosts: Record<string, number> = {
    "Standard Shipping": subtotal > 50 ? 0 : 5.99,
    "Express Shipping": 9.99,
    "Next Day Delivery": 14.99,
  };

  const shipping = shippingCosts[formData.shippingMethod] || 5.99;
  const tax = subtotal * 0.2;
  const total = subtotal + shipping + tax;

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/cart");
    }
  }, [items.length, router]);

  if (items.length === 0) {
    return null;
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        ...(name === "sameAsShipping" && checked
          ? {
              billingFullName: prev.shippingFullName,
              billingPhone: prev.shippingPhone,
              billingEmail: prev.shippingEmail,
              billingAddressLine1: prev.shippingAddressLine1,
              billingAddressLine2: prev.shippingAddressLine2,
              billingCity: prev.shippingCity,
              billingState: prev.shippingState,
              billingZipCode: prev.shippingZipCode,
              billingCountry: prev.shippingCountry,
            }
          : {}),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(prev.sameAsShipping && name.startsWith("shipping")
          ? {
              [`billing${name.substring(8)}`]: value,
            }
          : {}),
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate shipping address
    if (!formData.shippingFullName.trim())
      newErrors.shippingFullName = "Full name is required";
    if (!formData.shippingPhone.trim())
      newErrors.shippingPhone = "Phone number is required";
    if (!formData.shippingEmail.trim())
      newErrors.shippingEmail = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.shippingEmail))
      newErrors.shippingEmail = "Invalid email format";
    if (!formData.shippingAddressLine1.trim())
      newErrors.shippingAddressLine1 = "Address line 1 is required";
    if (!formData.shippingCity.trim())
      newErrors.shippingCity = "City is required";
    if (!formData.shippingState.trim())
      newErrors.shippingState = "State/County is required";
    if (!formData.shippingZipCode.trim())
      newErrors.shippingZipCode = "Postal code is required";
    if (!formData.shippingCountry.trim())
      newErrors.shippingCountry = "Country is required";

    // Validate billing address if different
    if (!formData.sameAsShipping) {
      if (!formData.billingFullName.trim())
        newErrors.billingFullName = "Full name is required";
      if (!formData.billingPhone.trim())
        newErrors.billingPhone = "Phone number is required";
      if (!formData.billingEmail.trim())
        newErrors.billingEmail = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.billingEmail))
        newErrors.billingEmail = "Invalid email format";
      if (!formData.billingAddressLine1.trim())
        newErrors.billingAddressLine1 = "Address line 1 is required";
      if (!formData.billingCity.trim())
        newErrors.billingCity = "City is required";
      if (!formData.billingState.trim())
        newErrors.billingState = "State/County is required";
      if (!formData.billingZipCode.trim())
        newErrors.billingZipCode = "Postal code is required";
      if (!formData.billingCountry.trim())
        newErrors.billingCountry = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const orderItems = items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      }));

      const shippingAddress = {
        fullName: formData.shippingFullName,
        phone: formData.shippingPhone,
        email: formData.shippingEmail,
        addressLine1: formData.shippingAddressLine1,
        addressLine2: formData.shippingAddressLine2,
        city: formData.shippingCity,
        state: formData.shippingState,
        zipCode: formData.shippingZipCode,
        country: formData.shippingCountry,
      };

      const billingAddress = formData.sameAsShipping
        ? shippingAddress
        : {
            fullName: formData.billingFullName,
            phone: formData.billingPhone,
            email: formData.billingEmail,
            addressLine1: formData.billingAddressLine1,
            addressLine2: formData.billingAddressLine2,
            city: formData.billingCity,
            state: formData.billingState,
            zipCode: formData.billingZipCode,
            country: formData.billingCountry,
          };

      const result = await createOrder({
        items: orderItems,
        shippingAddress,
        billingAddress,
        paymentMethod: formData.paymentMethod,
        shippingMethod: formData.shippingMethod,
        customerNote: formData.customerNote || undefined,
      });

      if (result.success && result.data) {
        clearCart();
        toast.success("Order confirmed successfully! 🎉", {
          duration: 3000,
        });
        // Redirect to dashboard orders tab
        router.push("/dashboard?tab=orders");
      } else {
        const message =
          result.error || "Failed to create order. Please try again.";
        // If not authenticated, redirect to sign-in and come back to checkout
        if (
          message.toLowerCase().includes("not authenticated") ||
          message.toLowerCase().includes("unauthorized")
        ) {
          toast.error("Please sign in to place your order.");
          router.push("/sign-in?callbackUrl=/checkout");
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      console.error("Error creating order:", error);
      const message =
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again.";
      if (
        message.toLowerCase().includes("not authenticated") ||
        message.toLowerCase().includes("unauthorized")
      ) {
        toast.error("Please sign in to place your order.");
        router.push("/sign-in?callbackUrl=/checkout");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h2 className="text-xl font-bold text-primary mb-6">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="shippingFullName"
                      value={formData.shippingFullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingFullName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingFullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingFullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="shippingPhone"
                      value={formData.shippingPhone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingPhone
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingPhone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="shippingEmail"
                      value={formData.shippingEmail}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingEmail
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingEmail}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      name="shippingAddressLine1"
                      value={formData.shippingAddressLine1}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingAddressLine1
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingAddressLine1 && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingAddressLine1}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      name="shippingAddressLine2"
                      value={formData.shippingAddressLine2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="shippingCity"
                      value={formData.shippingCity}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingCity
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingCity && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingCity}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      State/County *
                    </label>
                    <input
                      type="text"
                      name="shippingState"
                      value={formData.shippingState}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingState
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingState && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingState}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="shippingZipCode"
                      value={formData.shippingZipCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingZipCode
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingZipCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingZipCode}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="shippingCountry"
                      value={formData.shippingCountry}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.shippingCountry
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.shippingCountry && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingCountry}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Billing Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="sameAsShipping"
                    name="sameAsShipping"
                    checked={formData.sameAsShipping}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label
                    htmlFor="sameAsShipping"
                    className="ml-2 text-sm font-bold text-gray-700"
                  >
                    Billing address same as shipping address
                  </label>
                </div>

                {!formData.sameAsShipping && (
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-6">
                      Billing Address
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="billingFullName"
                          value={formData.billingFullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingFullName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingFullName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingFullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="billingPhone"
                          value={formData.billingPhone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingPhone
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingPhone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingPhone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="billingEmail"
                          value={formData.billingEmail}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingEmail
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingEmail && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingEmail}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Address Line 1 *
                        </label>
                        <input
                          type="text"
                          name="billingAddressLine1"
                          value={formData.billingAddressLine1}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingAddressLine1
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingAddressLine1 && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingAddressLine1}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          name="billingAddressLine2"
                          value={formData.billingAddressLine2}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="billingCity"
                          value={formData.billingCity}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingCity
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingCity && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingCity}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          State/County *
                        </label>
                        <input
                          type="text"
                          name="billingState"
                          value={formData.billingState}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingState
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingState && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingState}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Postal Code *
                        </label>
                        <input
                          type="text"
                          name="billingZipCode"
                          value={formData.billingZipCode}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingZipCode
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingZipCode && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingZipCode}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="billingCountry"
                          value={formData.billingCountry}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.billingCountry
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.billingCountry && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.billingCountry}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Payment & Shipping Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h2 className="text-xl font-bold text-primary mb-6">
                  Payment & Shipping
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Payment Method *
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="card_debit">Card/Debit</option>
                      <option value="cash_on_delivery">Cash on Delivery</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Shipping Method *
                    </label>
                    <select
                      name="shippingMethod"
                      value={formData.shippingMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="Standard Shipping">
                        Standard Shipping (£5.99)
                      </option>
                      <option value="Express Shipping">
                        Express Shipping (£9.99)
                      </option>
                      <option value="Next Day Delivery">
                        Next Day Delivery (£14.99)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      name="customerNote"
                      value={formData.customerNote}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Any special instructions or notes for your order..."
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl p-6 shadow-lg sticky top-4"
              >
                <h2 className="text-xl font-bold text-primary mb-6">
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => {
                    const primaryImage =
                      item.product.images?.find((img) => img.isPrimary)?.url ||
                      item.product.images?.[0]?.url ||
                      "/assets/product/placeholder.jpg";
                    return (
                      <div key={item.product._id} className="flex gap-3">
                        <div className="relative w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={primaryImage}
                            alt={item.product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-sm font-bold text-primary truncate">
                            {item.product.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            Qty: {item.quantity}
                          </p>
                          <p className="text-sm font-bold text-primary">
                            £{(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Totals */}
                <div className="space-y-4 mb-6 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-bold">
                      {shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>VAT (20%)</span>
                    <span className="font-bold">£{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-primary">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-[#1a3a5e] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors mb-4"
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </button>

                <Link
                  href="/cart"
                  className="block w-full border border-gray-300 text-primary py-3 rounded-xl font-bold text-center hover:bg-gray-50 transition-colors"
                >
                  Back to Cart
                </Link>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
