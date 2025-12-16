"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCart();
  const router = useRouter();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over £50
  const tax = subtotal * 0.2; // 20% VAT
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] py-12 md:py-16 lg:py-24 mt-[50px] md:mt-[70px]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-primary mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              href="/product"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a3a5e] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => {
              const primaryImage =
                item.product.images?.find((img) => img.isPrimary)?.url ||
                item.product.images?.[0]?.url ||
                "/assets/product/placeholder.jpg";
              const productLink = `/product/${
                item.product.slug || item.product._id
              }`;

              return (
                <motion.div
                  key={item.product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 md:p-6 shadow-lg flex flex-col md:flex-row gap-4"
                >
                  {/* Product Image */}
                  <Link href={productLink} className="flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={primaryImage}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-grow">
                      <Link
                        href={productLink}
                        className="text-lg font-bold text-primary hover:text-secondary transition-colors mb-2 block"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-gray-600 text-sm mb-2">
                        {typeof item.product.category === "object" &&
                        item.product.category !== null
                          ? item.product.category.name
                          : "Uncategorized"}
                      </p>
                      <p className="text-xl font-bold text-primary">
                        £{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        £{item.product.price.toFixed(2)} each
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-bold min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                          disabled={
                            item.product.trackInventory &&
                            item.quantity >= item.product.stock
                          }
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 font-bold text-sm transition-colors"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-4">
              <h2 className="text-xl font-bold text-primary mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
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

              <Link
                href="/checkout"
                className="block w-full bg-primary text-white py-3 rounded-xl font-bold text-center hover:bg-[#1a3a5e] transition-colors mb-4"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/product"
                className="block w-full border border-gray-300 text-primary py-3 rounded-xl font-bold text-center hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Link>

              {subtotal < 50 && (
                <p className="text-sm text-gray-500 text-center mt-4">
                  Add £{(50 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
