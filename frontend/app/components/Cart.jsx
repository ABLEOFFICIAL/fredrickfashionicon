"use client";
import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Cart = ({ classname, onClick }) => {
  const { itemCount } = useSelector((state) => state.context); //   const [user, setUser] = useState(null);
  //   const navigate = useNavigate();

  // checks if user exists
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       setUser(user);
  //       if (!user) {
  //         setCartCount(0); // Reset count if user logs out
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, []);

  //   useEffect(() => {
  //     if (!user) return;

  //     const cartCollectionRef = collection(db, "carts", user.uid, "items");

  //     // Set up real-time listener for cart items
  //     const unsubscribe = onSnapshot(
  //       cartCollectionRef,
  //       (snapshot) => {
  //         let totalQuantity = 0;
  //         setCartCount(snapshot.size); // .size is the number of documents = unique products
  //       },
  //       (err) => {
  //         console.error("Error listening to cart updates:", err);
  //         setCartCount(0);
  //       }
  //     );

  //     return () => unsubscribe(); // Clean up listener on unmount
  //   }, [user]);

  return (
    <div className="relative">
      <BsCart3 className={classname} onClick={onClick} />
      {/* {itemCount > 0 && (
        <span className="absolute -top-3 -right-2 bg-[#4a4741] text-[#f7f1e8] px-2 py-0.5 rounded-full text-xs">
          {itemCount}
        </span>
      )} */}
    </div>
  );
};

export default Cart;
