"use client";
import React, { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { ShoppingCart } from "lucide-react";
import ArrowLeft from "./ArrowLeft";
import { usePathname, useRouter } from "next/navigation";
import XBar from "./XBar";
import MyBtn from "./MyBtn";
import { useDispatch, useSelector } from "react-redux";
import { setShowCartModal } from "../store/contextSlice";
import { fetchCart, removeFromCart, updateCartQuantity } from "../utils/helper";

export const PageHeaders = ({ title }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between pb-3">
      <ArrowLeft onclick={() => router.back()} classname="size-7" />
      <h3 className="font-light text-xl">{title}</h3>
      <div className="size-5" />
    </div>
  );
};

// Floating Cart Button Component
export const FloatingCartButton = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.context);

  const itemCount = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  if (itemCount === 0) return null;

  return (
    <button
      onClick={() => dispatch(setShowCartModal(true))}
      className="fixed min-h-screen block md:hidden bottom-6 right-6 z-40 bg-white text-[#4a4741] rounded-full p-4 shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
      aria-label="Open cart"
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#4a4741] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        View Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
      </span>
    </button>
  );
};

const AddToCart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useSelector((state) => state.auth);
  const { showCartModal, cart, loading, error } = useSelector(
    (state) => state.context
  );

  // Fetch cart when modal opens
  useEffect(() => {
    if (showCartModal && user) {
      dispatch(fetchCart());
    }
  }, [showCartModal, user, dispatch]);

  useEffect(() => {
    dispatch(setShowCartModal(false));
  }, [pathname]);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateCartQuantity({ itemId, quantity: newQuantity }));
  };

  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  const itemCount = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  if (!showCartModal) return null;

  return (
    <>
      {/* Backdrop - hidden on mobile (fullscreen), visible on desktop */}
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm hidden md:block"
        onClick={() => dispatch(setShowCartModal(false))}
      />

      {/* Cart Panel */}
      <div
        className={`fixed inset-0 md:inset-auto md:right-0 md:top-0 md:bottom-0 z-50 flex justify-end transition-transform duration-300 ease-in-out ${
          showCartModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <main
          className="relative h-full w-full md:w-112.5 lg:w-125 bg-[#f7f1e8] flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#4a4741] bg-[#f7f1e8] sticky top-0 z-10">
            <div className="flex items-center gap-3">
              {/* Back button for mobile */}
              <button
                onClick={() => dispatch(setShowCartModal(false))}
                className="md:hidden p-1"
              >
                <ArrowLeft classname="size-6" />
              </button>
              <div>
                <h2 className="font-light text-xl sm:text-2xl">
                  Shopping Cart
                </h2>
                <p className="text-sm text-gray-600">
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </p>
              </div>
            </div>
            {/* Close button for desktop */}
            <XBar
              onclick={() => dispatch(setShowCartModal(false))}
              classname="size-5 stroke-1 cursor-pointer hidden md:block hover:opacity-70 transition-opacity"
            />
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
            {!user ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                </div>
                <p className="text-base sm:text-lg font-medium mb-2">
                  Please log in
                </p>
                <p className="text-sm text-gray-600">
                  Log in to view your cart items
                </p>
              </div>
            ) : loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-4 border-[#4a4741] border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-gray-600">Loading cart...</p>
                </div>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            ) : cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                </div>
                <p className="text-base sm:text-lg font-medium mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  Add items to get started
                </p>
                <button
                  onClick={() => {
                    dispatch(setShowCartModal(false));
                    router.push("/products");
                  }}
                  className="bg-[#4a4741] text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex gap-3 sm:gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.imageUrl || "/placeholder.png"}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base truncate mb-1">
                      {item.name}
                    </h4>
                    {item.selectedSize && (
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">
                        Size: {item.selectedSize}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() =>
                            handleQuantity(item._id, item.quantity - 1)
                          }
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 text-sm sm:text-base font-medium"
                          disabled={loading}
                        >
                          -
                        </button>
                        <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantity(item._id, item.quantity + 1)
                          }
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 text-sm sm:text-base font-medium"
                          disabled={loading}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item._id)}
                        disabled={loading}
                        className="p-1.5 sm:p-2 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Remove item"
                      >
                        <RiDeleteBinLine className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm sm:text-lg font-semibold block">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">
                      ₦{item.price.toLocaleString()} each
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 bg-white border-t border-[#4a4741] flex flex-col gap-3 sm:gap-4 sticky bottom-0 shadow-lg">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}):
                  </span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg sm:text-xl font-semibold pt-2 border-t border-gray-200">
                  <span>Total:</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>
              <MyBtn
                to="/check-out"
                classname="bg-[#4a4741] py-3 sm:py-3.5 rounded-full text-[#f7f1e8] w-full text-center font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Proceed to Checkout
              </MyBtn>
              <button
                onClick={() => dispatch(setShowCartModal(false))}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default AddToCart;
