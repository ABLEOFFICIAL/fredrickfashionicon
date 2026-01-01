import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

// Heart Icons
export const Like = ({ className, onClick }) => (
  <CiHeart onClick={onClick} className={className} />
);

export const Liked = ({ className, onClick }) => (
  <FaHeart onClick={onClick} className={className} />
);

export const storeAPI = "https://fakestoreapi.com/products";

const DisplayProducts = () => {
  const { products } = useSelector((state) => state.context);
  const { filteredProducts } = useSelector((state) => state.context);
  console.log("Filtered Products:", filteredProducts);

  //   const [products, setProducts] = useState([]);
  // const { data, loading, error } = useFetch(storeAPI);
  //   const { likedProducts, like, dislike } = useLikedProducts();
  //   const {
  //     productCategory,
  //     setproductCategory,
  //     searchProduct,
  //     setSearchProduct,
  //   } = useContext(WidthContext);

  // Unified filter: runs whenever data, category, or search changes
  //   useEffect(() => {
  //     if (!data) return;

  //     let filtered = data;

  //     console.log("Raw Data Count:", data.length);
  //     console.log("Current Category:", productCategory);
  //     console.log("Search Term:", searchProduct);

  //     if (productCategory && productCategory !== "All") {
  //       filtered = filtered.filter(
  //         (item) => item.category.toLowerCase() === productCategory.toLowerCase()
  //       );
  //       console.log("After Category Filter:", filtered.length);
  //     }

  //     if (searchProduct.trim() !== "") {
  //       filtered = filtered.filter((item) =>
  //         item.title.toLowerCase().includes(searchProduct.toLowerCase())
  //       );
  //       console.log("After Search Filter:", filtered.length);
  //     }

  //     setProducts(filtered);
  //   }, [data, productCategory, searchProduct]);

  //   if (loading) return <div>Loading products...</div>;
  //   if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div className="py-10">
      <div className="max-w-[1150px] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg text-[#4a4741] block">
            <Link href="/">Home</Link> /
            {/* <span className="font-light"> Shop / {productCategory}</span> */}
          </span>
          {/* {(searchProduct || productCategory !== "All") && (
            <button
              onClick={() => {
                setSearchProduct("");
                setproductCategory("All");
              }}
              className="text-sm underline text-blue-600"
            >
              Clear Filters
            </button>
          )} */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">
              No products found.
            </div>
          ) : (
            filteredProducts.map((product, idx) => {
              // const isLiked = likedProducts.includes(product.id);
              return (
                <Link href={`/discover/${product._id}`} key={idx}>
                  <div className="relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-48 md:h-72 object-cover mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
                    />
                    {/* {isLiked ? (
                      <Liked
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          dislike(product.id);
                        }}
                        className="absolute top-2 right-2 bg-[#4a4741] p-1.5 text-[#f7f1e8] rounded-full size-7"
                      />
                    ) : (
                      <Like
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          like(product.id);
                        }}
                        className="absolute top-2 md:top-4 md:right-3 right-2 bg-[#4a4741] p-1 text-[#f7f1e8] rounded-full size-8"
                      />
                    )} */}
                  </div>
                  <div>
                    <h2 className="text-sm font-light mb-2">{product.name}</h2>
                    <div className="flex justify-between">
                      <p className="text-gray-700 mb-2">
                        ₦ {Number(product.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
