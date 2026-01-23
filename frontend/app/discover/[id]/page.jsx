"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineZoomOutMap, MdOutlineZoomInMap } from "react-icons/md";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { productAPI, cartAPI, userAPI } from "@/lib/api";
import { fetchCart } from "@/app/utils/helper";
import { setModal, setModalContext } from "@/app/store/contextSlice";
import Modal from "@/app/components/Modal";

export const ZoomIn = ({ onClick }) => (
  <MdOutlineZoomOutMap
    onClick={onClick}
    className="size-7 bg-black/20 p-1 rounded-full cursor-pointer text-white hover:bg-black/30 transition"
  />
);

export const ZoomOut = ({ onClick }) => (
  <MdOutlineZoomInMap
    onClick={onClick}
    className="size-7 bg-black/20 p-1 rounded-full cursor-pointer text-white hover:bg-black/30 transition"
  />
);

const ProductDetail = () => {
  const { id } = useParams();
  const { products, modal, modalContext } = useSelector(
    (state) => state.context
  );
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [zoom, setZoom] = useState(false);
  const [selectedView, setSelectedView] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wishListLoading, setWishlistLoading] = useState(false);
  const [buyNowLoading, setBuyNowLoading] = useState(false);
  const imgRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const product = products?.find((p) => String(p._id) === String(id));

  // Check if in wishlist (only for authenticated users)
  useEffect(() => {
    if (product?._id && isAuthenticated) {
      checkIfInWishlist();
    }
  }, [product?._id, isAuthenticated]);

  const checkIfInWishlist = async () => {
    try {
      const { data } = await userAPI.getWishlist();
      const inWishlist = data.wishlist.some((item) => item._id === product._id);
      setIsInWishlist(inWishlist);
    } catch (error) {
      console.error("Error checking wishlist:", error);
    }
  };

  // Toggle Wishlist
  const toggleWishlist = async () => {
    if (!isAuthenticated) {
      dispatch(setModalContext("wishlist"));
      dispatch(setModal(true));
      return;
    }

    try {
      setWishlistLoading(true);
      await productAPI.wishlist(product._id);
      setIsInWishlist(!isInWishlist);
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    } finally {
      setWishlistLoading(false);
    }
  };

  // Add to Cart Function
  const addToCart = async () => {
    // ✅ Validate size is selected
    if (!selectedSize) {
      dispatch(setModalContext("size"));
      dispatch(setModal(true));
      return;
    }

    setLoading(true);
    dispatch(setModalContext("cart"));

    try {
      // ✅ Extract size string from object (if it's an object)
      const sizeValue =
        typeof selectedSize === "object" ? selectedSize.size : selectedSize;

      console.log("🛒 Adding to cart:", {
        productId: product._id,
        quantity,
        size: sizeValue,
      });

      // ✅ Call API
      await cartAPI.addItem(product._id, quantity, sizeValue);

      // ✅ Update cart in Redux
      dispatch(fetchCart());

      // ✅ Trigger cart update event
      window.dispatchEvent(new Event("cartUpdated"));

      // ✅ Show success modal
      dispatch(setModalContext("addedToCart"));
      dispatch(setModal(true));

      console.log("✅ Item added to cart successfully");
    } catch (error) {
      console.error("❌ Error adding to cart:", error);

      // ✅ Show error message to user
      const errorMessage =
        error.response?.data?.message || "Failed to add item to cart";
      alert(errorMessage); // Or use a toast notification
    } finally {
      setLoading(false);
    }
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f7f1e8]">
        <p className="text-lg text-gray-600">Product not found...</p>
      </main>
    );
  }

  const buyNow = async () => {
    if (!selectedSize) {
      dispatch(setModalContext("size"));
      dispatch(setModal(true));
      return;
    }

    // if (!selectedColor) {
    //   dispatch(setModalContext("colour"));
    //   dispatch(setModal(true));
    //   return;
    // }

    setBuyNowLoading(true);
    dispatch(setModalContext("buyNow"));

    try {
      await cartAPI.addItem(product._id, quantity, selectedSize.size);
      dispatch(fetchCart());
      window.dispatchEvent(new Event("cartUpdated"));
      router.push("/check-out");
    } catch (error) {
      console.error("Error during buy now:", error);
    } finally {
      setBuyNowLoading(false);
    }
  };

  // Helper function to get modal config
  const getModalConfig = () => {
    switch (modalContext) {
      case "addedToCart":
        return {
          type: "success",
          title: "Added to Cart!",
          message: `${product.name} has been added to your cart successfully.`,
          confirmText: "Continue Shopping",
          showCancel: false,
        };
      case "cart":
        return {
          type: "error",
          title: "Login Required",
          message: "You must be logged in to add items to your cart.",
          confirmText: "Go to Login",
          showCancel: true,
          onConfirm: () => router.push("/login"),
        };
      case "buyNow":
        return {
          type: "error",
          title: "Login Required",
          message: "You must be logged in to complete your purchase.",
          confirmText: "Go to Login",
          showCancel: true,
          onConfirm: () => router.push("/login"),
        };
      case "wishlist":
        return {
          type: "error",
          title: "Login Required",
          message: "You must be logged in to add items to your wishlist.",
          confirmText: "Go to Login",
          showCancel: true,
          onConfirm: () => router.push("/login"),
        };
      case "size":
        return {
          type: "warning",
          title: "Size Required",
          message: "Please select a size before proceeding.",
          confirmText: "OK",
          showCancel: false,
        };
      case "colour":
        return {
          type: "warning",
          title: "Color Required",
          message: "Please select a color before proceeding.",
          confirmText: "OK",
          showCancel: false,
        };
      default:
        return {
          type: "info",
          title: "Notice",
          message: "Please complete the required selections.",
          confirmText: "OK",
          showCancel: false,
        };
    }
  };

  const modalConfig = getModalConfig();

  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#4a4741] relative">
      <Modal
        isOpen={modal}
        onClose={() => dispatch(setModal(false))}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmText={modalConfig.confirmText}
        showCancel={modalConfig.showCancel}
        onConfirm={modalConfig.onConfirm || (() => dispatch(setModal(false)))}
      />

      <section className="max-w-287.5 mx-auto py-10 pt-20 md:grid grid-cols-2 gap-10">
        {/* Zoom Modal */}
        {zoom && (
          <div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4"
            onClick={() => setZoom(false)}
          >
            <div className="relative h-screen w-screen backdrop-blur-sm flex justify-center items-center">
              <img
                src={product.images[selectedView]}
                alt={product.name}
                className="max-w-[70%] max-h-[70%] object-cover rounded-lg shadow-lg z-50"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setZoom(false)}
                className="absolute top-3 right-3 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                <ZoomOut />
              </button>
            </div>
          </div>
        )}

        <div className="px-4">
          {/* Main Image */}
          <figure className="relative w-full h-100 md:h-150 flex justify-center items-center bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
            <img
              ref={imgRef}
              src={product.images[selectedView]}
              alt={product.name}
              className="object-cover rounded-lg w-full h-full transition-all duration-300"
            />
            <div className="absolute bottom-5 w-[90%] mx-auto flex justify-between items-center">
              <ZoomIn onClick={() => setZoom(true)} />
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setSelectedView(
                      (prev) =>
                        (prev - 1 + product.images.length) %
                        product.images.length
                    )
                  }
                  className="bg-[#4a4741] text-white rounded-full p-2 hover:bg-[#3b3934] transition"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setSelectedView(
                      (prev) => (prev + 1) % product.images.length
                    )
                  }
                  className="bg-[#4a4741] text-white rounded-full p-2 hover:bg-[#3b3934] transition"
                >
                  →
                </button>
              </div>
            </div>
          </figure>

          {/* Thumbnails */}
          <div className="flex justify-start gap-3 my-4 flex-wrap">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setSelectedView(idx)}
                alt={`Preview ${idx}`}
                className={`w-20 h-20 object-cover border rounded-lg cursor-pointer hover:opacity-80 transition ${
                  selectedView === idx
                    ? "border-[#4a4741] scale-105"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-5 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <button onClick={toggleWishlist} disabled={wishListLoading}>
              {isInWishlist ? (
                <FaHeart className="text-red-500 size-6" />
              ) : (
                <FaRegHeart className="text-gray-500 size-6 hover:text-red-400" />
              )}
            </button>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <span className="text-sm ml-2 text-gray-500">(120 reviews)</span>
          </div>

          <p className="text-2xl font-medium">
            ₦{product.price.toLocaleString()}
          </p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Color Selection */}
          {/* {product.colors?.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Select Color:</p>
              <div className="flex gap-2">
                {product.colors.map((clr) => (
                  <div
                    key={clr._id}
                    onClick={() => setSelectedColor(clr)}
                    className={`w-7 h-7 rounded-full cursor-pointer border-2 ${
                      selectedColor?._id === clr._id
                        ? "border-[#4a4741] scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: clr.hexCode }}
                    title={`${clr.name} (${clr.stock} left)`}
                  />
                ))}
              </div>
            </div>
          )} */}

          {/* Size Selection */}
          {product.sizes?.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Select Size:</p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((sizeObj) => (
                  <button
                    key={sizeObj._id}
                    onClick={() => setSelectedSize(sizeObj)}
                    className={`border rounded-md px-4 py-2 capitalize ${
                      selectedSize?._id === sizeObj._id
                        ? "bg-[#4a4741] text-white"
                        : "border-[#4a4741] text-[#4a4741]"
                    }`}
                    title={`Stock: ${sizeObj.stock}`}
                  >
                    {sizeObj.size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Section */}
          <div className="mt-4">
            <p className="font-semibold mb-2">Quantity:</p>
            <div className="flex items-center gap-3 border border-[#4a4741] rounded-lg w-fit px-3 py-2">
              <button
                onClick={decreaseQty}
                className="text-[#4a4741] font-bold text-lg px-2 hover:text-black"
              >
                −
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={increaseQty}
                className="text-[#4a4741] font-bold text-lg px-2 hover:text-black"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={addToCart}
              disabled={loading}
              className="bg-[#4a4741] text-white py-3 rounded-lg w-1/2 hover:bg-[#3b3934] transition-all disabled:opacity-70"
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>

            <button
              onClick={buyNow}
              disabled={buyNowLoading}
              className="border border-[#4a4741] text-[#4a4741] py-3 rounded-lg w-1/2 hover:bg-[#4a4741] hover:text-white transition-all disabled:opacity-70"
            >
              {buyNowLoading ? "Processing..." : "Buy Now"}
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            🚚 Delivery takes 2–5 working days. Free shipping for orders above
            ₦20,000.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
