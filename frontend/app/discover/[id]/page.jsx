"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineZoomOutMap, MdOutlineZoomInMap } from "react-icons/md";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { productAPI, cartAPI, userAPI } from "@/lib/api";
import { fetchCart } from "@/app/utils/helper";

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
  const { products } = useSelector((state) => state.context);
  const [zoom, setZoom] = useState(false);
  const [selectedView, setSelectedView] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const product = products?.find((p) => String(p._id) === String(id));

  // ✅ Check if in wishlist
  useEffect(() => {
    if (product?._id) checkIfInWishlist();
  }, [product?._id]);

  const checkIfInWishlist = async () => {
    try {
      const { data } = await userAPI.getWishlist();
      const inWishlist = data.wishlist.some((item) => item._id === product._id);
      setIsInWishlist(inWishlist);
    } catch (error) {
      console.error("Error checking wishlist:", error);
    }
  };

  // ✅ Toggle Wishlist
  const toggleWishlist = async () => {
    try {
      setLoading(true);
      await productAPI.wishlist(product._id);
      setIsInWishlist(!isInWishlist);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update wishlist");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add to Cart Function
  const addToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color before adding to cart.");
      return;
    }

    setLoading(true);
    try {
      await cartAPI.addItem(product._id, quantity);
      alert("✅ Added to cart!");
      dispatch(fetchCart());
      // Trigger global cart update event
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add to cart");
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

  const similarProducts = products
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 4);

  const buyNow = async () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding to buy.");
      return;
    }

    if (!selectedColor) {
      alert("Please select a color before proceeding to buy.");
      return;
    }

    setLoading(true);

    try {
      await cartAPI.addItem(product._id, quantity);

      dispatch(fetchCart());
      window.dispatchEvent(new Event("cartUpdated"));

      router.push("/check-out"); // ✅ move inside try
    } catch (error) {
      alert(error.response?.data?.message || "Failed to proceed to checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#4a4741] relative">
      <section className="max-w-287.5 mx-auto py-10 pt-20 md:grid grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
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
            <button onClick={toggleWishlist} disabled={loading}>
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
          {product.colors?.length > 0 && (
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
          )}

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
              className="border border-[#4a4741] text-[#4a4741] py-3 rounded-lg w-1/2 hover:bg-[#4a4741] hover:text-white transition-all"
            >
              Buy Now
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
