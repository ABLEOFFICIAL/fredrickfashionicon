"use client";
import React, { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import ArrowLeft from "./ArrowLeft";
import { useRouter } from "next/navigation";
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

const AddToCart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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

  if (!showCartModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm"
      onClick={() => dispatch(setShowCartModal(false))}
    >
      <main
        className="relative h-full md:w-[30%] w-full bg-[#f7f1e8] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#4a4741]">
          <h2 className="font-light text-2xl">Cart</h2>
          <XBar
            onclick={() => dispatch(setShowCartModal(false))}
            classname="size-5 stroke-1 cursor-pointer"
          />
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {!user ? (
            <p className="text-center mt-20">
              Please log in to view your cart.
            </p>
          ) : loading ? (
            <p className="text-center mt-20">Loading cart...</p>
          ) : error ? (
            <p className="text-center mt-20 text-red-500">{error}</p>
          ) : cart.length === 0 ? (
            <p className="text-center mt-20">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl p-4 flex gap-4 items-center"
              >
                <img
                  src={item.imageUrl || "/placeholder.png"}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold truncate">{item.name}</h4>
                  {item.selectedSize && (
                    <p className="text-sm">Size: {item.selectedSize}</p>
                  )}
                  <div className="flex gap-2 mt-2 items-center">
                    <button
                      onClick={() =>
                        handleQuantity(item._id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                      disabled={loading}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantity(item._id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                      disabled={loading}
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item._id)}
                      disabled={loading}
                    >
                      <RiDeleteBinLine className="size-5 cursor-pointer text-red-600" />
                    </button>
                  </div>
                </div>
                <span className="text-lg font-medium">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#4a4741] flex flex-col gap-4 sticky bottom-0">
            <div className="flex justify-between text-xl font-medium">
              <span>Total:</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <MyBtn
              to="/check-out"
              classname="bg-[#4a4741] py-3 rounded-3xl text-[#f7f1e8] w-full text-center"
            >
              Check Out
            </MyBtn>
          </div>
        )}
      </main>
    </div>
  );
};

export default AddToCart;
