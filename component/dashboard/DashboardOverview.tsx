"use client";

import { userSignOut } from "@/app/actions/auth";
import { getCurrentCustomer } from "@/app/actions/customer";
import { getMyOrders } from "@/app/actions/order";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  Download,
  LayoutDashboard,
  Loader2,
  LogOut,
  MapPin,
  ShoppingBag,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Types
interface CustomerAddress {
  _id?: string;
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
}

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  billingAddresses?: CustomerAddress[];
  shippingAddresses?: CustomerAddress[];
  totalOrders?: number;
  totalSpent?: number;
}

interface Order {
  _id: string;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  totalAmount: number;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

// --- Dashboard Component ---
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch customer data and orders
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [customerResult, ordersResult] = await Promise.all([
          getCurrentCustomer(),
          getMyOrders(1, 10),
        ]);

        if (customerResult.success && customerResult.data) {
          setCustomer(customerResult.data as Customer);
        } else {
          setError(customerResult.error || "Failed to load profile");
        }

        if (ordersResult.success) {
          // Set orders even if empty array (to show "No Orders Yet" message)
          setOrders((ordersResult.data || []) as Order[]);
        } else {
          // If fetch failed, set empty array to show empty state
          setOrders([]);
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Define the content for each tab
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-64">
          <Loader2 size={32} className="animate-spin text-primary-500" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-primary-600 hover:text-primary-700 underline"
          >
            Try again
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardOverview
            setActiveTab={setActiveTab}
            customer={customer}
            recentOrders={orders.slice(0, 5)}
          />
        );
      case "orders":
        return <OrdersContent orders={orders} />;
      case "downloads":
        return (
          <PlaceholderContent title="Downloads" icon={<Download size={48} />} />
        );
      case "addresses":
        return (
          <AddressesContent
            customer={customer}
            onUpdate={async () => {
              // Refresh customer data after update
              const result = await getCurrentCustomer();
              if (result.success && result.data) {
                setCustomer(result.data as Customer);
              }
            }}
          />
        );
      case "account":
        return (
          <CustomerDetailsContent
            customer={customer}
            onUpdate={async () => {
              // Refresh customer data after update
              const result = await getCurrentCustomer();
              if (result.success && result.data) {
                setCustomer(result.data as Customer);
              }
            }}
          />
        );
      default:
        return (
          <DashboardOverview
            setActiveTab={setActiveTab}
            customer={customer}
            recentOrders={orders.slice(0, 5)}
          />
        );
    }
  };

  const handleSignOut = async () => {
    try {
      await userSignOut();
      router.push("/sign-in");
      router.refresh(); // Refresh to clear session
    } catch (error) {
      console.error("Error signing out:", error);
      // Still redirect even if there's an error
      router.push("/sign-in");
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen pb-20 pt-20 md:pt-[150px]">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900">
            My Account
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your appointments and profile settings.
          </p>
        </div>

        {/* --- MAIN LAYOUT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 1. LEFT SIDEBAR NAVIGATION */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-32 h-full flex flex-col">
              <ul className="flex flex-col flex-1">
                <NavItem
                  id="dashboard"
                  label="Dashboard"
                  icon={<LayoutDashboard size={20} />}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <NavItem
                  id="orders"
                  label="Orders"
                  icon={<ShoppingBag size={20} />}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <NavItem
                  id="downloads"
                  label="Downloads"
                  icon={<Download size={20} />}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <NavItem
                  id="addresses"
                  label="Addresses"
                  icon={<MapPin size={20} />}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <NavItem
                  id="account"
                  label="Account details"
                  icon={<User size={20} />}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <li className="border-t border-gray-100 mt-auto">
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-6 py-4 text-left text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    <LogOut size={20} />
                    Log out
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* 2. RIGHT CONTENT AREA */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- TAB 1: OVERVIEW (Matches your image text) ---
const DashboardOverview = ({
  setActiveTab,
  customer,
  recentOrders,
}: {
  setActiveTab: (tab: string) => void;
  customer: Customer | null;
  recentOrders: Order[];
}) => {
  const customerName = customer?.name || "Guest";

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-100 pb-6">
        <h2 className="text-2xl font-serif text-primary-900 leading-relaxed">
          Hello,{" "}
          <span className="font-bold text-secondary-500">{customerName}</span>
          <span className="block text-base font-sans font-normal text-gray-500 mt-1">
            (not <strong className="text-gray-700">{customerName}</strong>?{" "}
            <button
              onClick={() => {
                userSignOut();
                window.location.href = "/sign-in";
              }}
              className="text-primary-600 underline hover:text-secondary-500"
            >
              Log out
            </button>
            )
          </span>
        </h2>
      </div>

      {/* Recent Orders Preview */}
      {recentOrders && recentOrders.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">
            Recent Orders
          </h3>
          <div className="space-y-3">
            {recentOrders.slice(0, 3).map((order: Order) => (
              <div
                key={order._id}
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
              >
                <div>
                  <p className="font-medium text-primary-900">
                    Order #{order.orderNumber}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.orderDate).toLocaleDateString()} •{" "}
                    {order.orderStatus}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary-900">
                    ${(order.totalAmount || 0).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            {recentOrders.length > 3 && (
              <button
                onClick={() => setActiveTab("orders")}
                className="w-full text-center text-primary-600 hover:text-primary-700 font-medium py-2"
              >
                View all orders →
              </button>
            )}
          </div>
        </div>
      )}

      <p className="text-gray-600 leading-relaxed text-lg">
        From your account dashboard you can view your{" "}
        <button
          onClick={() => setActiveTab("orders")}
          className="text-primary-600 font-medium hover:text-secondary-500 underline decoration-primary-200 hover:decoration-secondary-500 transition-all"
        >
          recent orders
        </button>
        , manage your{" "}
        <button
          onClick={() => setActiveTab("addresses")}
          className="text-primary-600 font-medium hover:text-secondary-500 underline decoration-primary-200 hover:decoration-secondary-500 transition-all"
        >
          shipping and billing addresses
        </button>
        , and{" "}
        <button
          onClick={() => setActiveTab("account")}
          className="text-primary-600 font-medium hover:text-secondary-500 underline decoration-primary-200 hover:decoration-secondary-500 transition-all"
        >
          edit your password and account details
        </button>
        .
      </p>

      {/* Quick Action Cards (Bonus: Make it look better than just text) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <QuickActionCard
          icon={<ShoppingBag size={24} />}
          title="Orders"
          desc="Track & Returns"
          onClick={() => setActiveTab("orders")}
        />
        <QuickActionCard
          icon={<MapPin size={24} />}
          title="Addresses"
          desc="Billing & Shipping"
          onClick={() => setActiveTab("addresses")}
        />
        <QuickActionCard
          icon={<User size={24} />}
          title="Account"
          desc="Profile Details"
          onClick={() => setActiveTab("account")}
        />
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

interface NavItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavItem = ({
  id,
  label,
  icon,
  activeTab,
  setActiveTab,
}: NavItemProps) => {
  const isActive = activeTab === id;
  return (
    <li>
      <button
        onClick={() => setActiveTab(id)}
        className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-200 border-l-4 ${
          isActive
            ? "bg-primary-50 border-secondary-500 text-primary-900 font-bold"
            : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-primary-600"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className={isActive ? "text-secondary-500" : "text-gray-400"}>
            {icon}
          </span>
          <span>{label}</span>
        </div>
        {isActive && <ChevronRight size={16} className="text-secondary-500" />}
      </button>
    </li>
  );
};

interface QuickActionCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick: () => void;
}

const QuickActionCard = ({
  icon,
  title,
  desc,
  onClick,
}: QuickActionCardProps) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:shadow-md hover:border-secondary-200 transition-all group"
  >
    <div className="p-3 bg-white rounded-full shadow-sm text-primary-500 group-hover:text-secondary-500 mb-3 transition-colors">
      {icon}
    </div>
    <h3 className="font-bold text-primary-900">{title}</h3>
    <p className="text-xs text-gray-500">{desc}</p>
  </button>
);

interface PlaceholderContentProps {
  title: string;
  icon: React.ReactNode;
}

// --- Orders Content Component ---
const OrdersContent = ({ orders }: { orders: Order[] }) => {
  // Check if orders array is empty or undefined
  const hasOrders = orders && Array.isArray(orders) && orders.length > 0;

  if (!hasOrders) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center text-gray-400">
        <div className="bg-gray-50 p-6 rounded-full mb-4">
          <ShoppingBag size={48} className="text-gray-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">No Orders Yet</h3>
        <p className="text-sm text-gray-500">
          You haven&apos;t placed any orders yet.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          When you place an order, it will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-serif text-primary-900">Your Orders</h2>
        <span className="text-sm text-gray-500">
          {orders.length} {orders.length === 1 ? "order" : "orders"}
        </span>
      </div>
      <div className="space-y-4">
        {orders.map((order: Order) => (
          <div
            key={order._id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-900">
                  Order #{order.orderNumber}
                </h3>
                <p className="text-sm text-gray-500">
                  Placed on {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary-900">
                  ${(order.totalAmount || 0).toFixed(2)}
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                    order.orderStatus === "completed"
                      ? "bg-green-100 text-green-700"
                      : order.orderStatus === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.orderStatus === "cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {order.orderStatus}
                </span>
              </div>
            </div>

            {order.items && order.items.length > 0 && (
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Items ({order.items.length})
                </p>
                <div className="space-y-2">
                  {order.items.slice(0, 3).map((item, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-400">×</span>
                      <span>{item.quantity}</span>
                    </div>
                  ))}
                  {order.items.length > 3 && (
                    <p className="text-xs text-gray-500">
                      +{order.items.length - 3} more items
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Customer Details Content Component ---
interface CustomerDetailsContentProps {
  customer: Customer | null;
  onUpdate: () => Promise<void>;
}

const CustomerDetailsContent = ({
  customer,
  onUpdate,
}: CustomerDetailsContentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: customer?.name || "",
    email: customer?.email || "",
    phone: customer?.phone || "",
  });

  // Update form data when customer changes
  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
      });
    }
  }, [customer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { updateCurrentCustomer } = await import("@/app/actions/customer");
      const result = await updateCurrentCustomer({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      if (result.success) {
        setSuccess(result.message || "Profile updated successfully");
        setIsEditing(false);
        await onUpdate(); // Refresh customer data
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(result.error || "Failed to update profile");
      }
    } catch (err) {
      console.error("Error updating customer:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center text-gray-400">
        <User size={48} className="mb-4 text-gray-300" />
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Loading Profile...
        </h3>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-serif text-primary-900">
          Account Details
        </h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          {success}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-primary-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-primary-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-primary-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setError(null);
                setSuccess(null);
                // Reset form data
                if (customer) {
                  setFormData({
                    name: customer.name || "",
                    email: customer.email || "",
                    phone: customer.phone || "",
                  });
                }
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          {/* Display Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Full Name
              </h3>
              <p className="text-lg font-medium text-primary-900">
                {customer.name}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Email Address
              </h3>
              <p className="text-lg font-medium text-primary-900">
                {customer.email}
              </p>
            </div>

            {customer.phone && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Phone Number
                </h3>
                <p className="text-lg font-medium text-primary-900">
                  {customer.phone}
                </p>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Total Orders
              </h3>
              <p className="text-lg font-medium text-primary-900">
                {customer.totalOrders || 0}
              </p>
            </div>
          </div>

          {/* Account Stats */}
          {customer.totalSpent !== undefined && (
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 className="text-sm font-semibold text-primary-700 mb-2">
                Total Spent
              </h3>
              <p className="text-2xl font-bold text-primary-900">
                ${(customer.totalSpent || 0).toFixed(2)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// --- Addresses Content Component ---
interface AddressesContentProps {
  customer: Customer | null;
  onUpdate: () => Promise<void>;
}

const AddressesContent = ({ customer, onUpdate }: AddressesContentProps) => {
  const [editingAddress, setEditingAddress] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Bangladesh",
    addressType: "billing" as "billing" | "shipping" | "both",
    isDefaultBilling: false,
    isDefaultShipping: false,
  });

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "Bangladesh",
      addressType: "billing",
      isDefaultBilling: false,
      isDefaultShipping: false,
    });
    setEditingAddress(null);
    setIsAdding(false);
    setError(null);
    setSuccess(null);
  };

  const startEdit = (
    address: CustomerAddress,
    type: "billing" | "shipping"
  ) => {
    setFormData({
      fullName: address.fullName || "",
      phone: address.phone || "",
      email: address.email || "",
      addressLine1: address.addressLine1 || "",
      addressLine2: address.addressLine2 || "",
      city: address.city || "",
      state: address.state || "",
      zipCode: address.zipCode || "",
      country: address.country || "Bangladesh",
      addressType: address.addressType || type,
      isDefaultBilling: address.isDefaultBilling || false,
      isDefaultShipping: address.isDefaultShipping || false,
    });
    setEditingAddress(address._id || "");
    setIsAdding(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { addAddress, updateAddress } = await import(
        "@/app/actions/customer"
      );

      if (editingAddress && editingAddress !== "new") {
        // Update existing address
        const result = await updateAddress(editingAddress, formData);
        if (result.success) {
          setSuccess(result.message || "Address updated successfully");
          resetForm();
          await onUpdate();
          setTimeout(() => setSuccess(null), 3000);
        } else {
          setError(result.error || "Failed to update address");
        }
      } else {
        // Add new address
        const result = await addAddress(formData);
        if (result.success) {
          setSuccess(result.message || "Address added successfully");
          resetForm();
          await onUpdate();
          setTimeout(() => setSuccess(null), 3000);
        } else {
          setError(result.error || "Failed to add address");
        }
      }
    } catch (err) {
      console.error("Error managing address:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (addressId: string) => {
    if (!confirm("Are you sure you want to delete this address?")) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { deleteAddress } = await import("@/app/actions/customer");
      const result = await deleteAddress(addressId);

      if (result.success) {
        setSuccess(result.message || "Address deleted successfully");
        await onUpdate();
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(result.error || "Failed to delete address");
      }
    } catch (err) {
      console.error("Error deleting address:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center text-gray-400">
        <MapPin size={48} className="mb-4 text-gray-300" />
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Loading Addresses...
        </h3>
      </div>
    );
  }

  const billingAddresses = customer.billingAddresses || [];
  const shippingAddresses = customer.shippingAddresses || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-serif text-primary-900">Addresses</h2>
        {!isAdding && !editingAddress && (
          <div className="flex gap-2">
            <button
              onClick={() => {
                resetForm();
                setFormData((prev) => ({
                  ...prev,
                  addressType: "billing",
                  isDefaultBilling: billingAddresses.length === 0,
                }));
                setIsAdding(true);
              }}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
            >
              + Add Billing
            </button>
            <button
              onClick={() => {
                resetForm();
                setFormData((prev) => ({
                  ...prev,
                  addressType: "shipping",
                  isDefaultShipping: shippingAddresses.length === 0,
                }));
                setIsAdding(true);
              }}
              className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium text-sm"
            >
              + Add Shipping
            </button>
          </div>
        )}
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          {success}
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Add/Edit Form */}
      {(isAdding || editingAddress) && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-lg p-6 border border-gray-200 space-y-4"
        >
          <h3 className="text-lg font-semibold text-primary-900 mb-4">
            {editingAddress ? "Edit Address" : "Add New Address"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Address Type
              </label>
              <select
                value={formData.addressType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addressType: e.target.value as
                      | "billing"
                      | "shipping"
                      | "both",
                  })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              >
                <option value="billing">Billing</option>
                <option value="shipping">Shipping</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Address Line 1 *
              </label>
              <input
                type="text"
                value={formData.addressLine1}
                onChange={(e) =>
                  setFormData({ ...formData, addressLine1: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Address Line 2
              </label>
              <input
                type="text"
                value={formData.addressLine2}
                onChange={(e) =>
                  setFormData({ ...formData, addressLine2: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                City *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                State *
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) =>
                  setFormData({ ...formData, zipCode: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">
                Country *
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>

            <div className="md:col-span-2 flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isDefaultBilling}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isDefaultBilling: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">
                  Set as default billing
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isDefaultShipping}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isDefaultShipping: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">
                  Set as default shipping
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Saving...
                </>
              ) : editingAddress ? (
                "Update Address"
              ) : (
                "Add Address"
              )}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Billing Addresses */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary-900 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary-600 rounded"></span>
          Billing Addresses
        </h3>
        {billingAddresses.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
            <MapPin size={32} className="mx-auto mb-2 text-gray-400" />
            <p className="text-gray-500">No billing addresses yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {billingAddresses.map((address, idx) => (
              <div
                key={address._id || idx}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow relative"
              >
                {address.isDefaultBilling && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                    Default
                  </span>
                )}
                <div className="space-y-2 mb-4">
                  <p className="font-semibold text-primary-900">
                    {address.fullName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {address.addressLine1}
                  </p>
                  {address.addressLine2 && (
                    <p className="text-sm text-gray-600">
                      {address.addressLine2}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                  <p className="text-sm text-gray-600">{address.country}</p>
                  <p className="text-sm text-gray-600">{address.phone}</p>
                  {address.email && (
                    <p className="text-sm text-gray-600">{address.email}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => startEdit(address, "billing")}
                    className="px-4 py-2 text-sm bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => address._id && handleDelete(address._id)}
                    className="px-4 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Shipping Addresses */}
      <div className="space-y-4 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-primary-900 flex items-center gap-2">
          <span className="w-1 h-6 bg-secondary-600 rounded"></span>
          Shipping Addresses
        </h3>
        {shippingAddresses.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
            <MapPin size={32} className="mx-auto mb-2 text-gray-400" />
            <p className="text-gray-500">No shipping addresses yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shippingAddresses.map((address, idx) => (
              <div
                key={address._id || idx}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow relative"
              >
                {address.isDefaultShipping && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded">
                    Default
                  </span>
                )}
                <div className="space-y-2 mb-4">
                  <p className="font-semibold text-primary-900">
                    {address.fullName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {address.addressLine1}
                  </p>
                  {address.addressLine2 && (
                    <p className="text-sm text-gray-600">
                      {address.addressLine2}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                  <p className="text-sm text-gray-600">{address.country}</p>
                  <p className="text-sm text-gray-600">{address.phone}</p>
                  {address.email && (
                    <p className="text-sm text-gray-600">{address.email}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => startEdit(address, "shipping")}
                    className="px-4 py-2 text-sm bg-secondary-50 text-secondary-700 rounded-lg hover:bg-secondary-100 transition-colors font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => address._id && handleDelete(address._id)}
                    className="px-4 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PlaceholderContent = ({ title, icon }: PlaceholderContentProps) => (
  <div className="flex flex-col items-center justify-center h-full py-12 text-center text-gray-400">
    <div className="bg-gray-50 p-6 rounded-full mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-700">{title}</h3>
    <p className="text-sm">This section is under construction.</p>
  </div>
);

export default Dashboard;
