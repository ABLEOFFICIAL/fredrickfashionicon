import DarkLogo from "@/app/components/DarkLogo";
import MyBtn from "@/app/components/MyBtn";
import XBar from "@/app/components/XBar";
import { setShowSideideBar } from "@/app/store/productSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { showSideideBar } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  //   const [cartItems, setCartItems] = useState([]);
  //   const [user, setUser] = useState(null);
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();

  //   const { toggle, handleToggle, closeSidebar, setDropDown } = useToggle();
  //   if (showSide) {
  //     window.addEventListener("scrollx", () => {
  //       console.log("hello");
  //     });
  //   }

  useEffect(() => {
    dispatch(setShowSideideBar(false)); // close it on every route change
  }, [pathName]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, [navigate]);
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         const uid = user.uid;
  //         console.log(uid);
  //         setUser(user);
  //       }
  //       return () => unsubscribe();
  //     });
  //   }, []);

  return (
    <div
      className={`${
        showSideideBar ? "block" : "hidden"
      } fixed top-0 right-0 h-screen w-[92vw] bg-[#f7f1e8] text-[#4a4741] z-40 px-6 py-10 pb-12 shadow-md md:hidden`}
    >
      <div className="h-4/5 flex flex-col justify-between">
        <div className="flex justify-between items-center pb-10">
          <DarkLogo className={"w-5"} />
          <XBar
            onclick={() => dispatch(setShowSideideBar(false))}
            classname={"size-7"}
          />
        </div>
        <div className="side-bottom flex flex-col h-3/5">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About</Link>
          <Link href={"/contact-us"}>Contact Us</Link>
          <Link href={"/style-with-us"}>Blog</Link>
          <Link href={"/wishlist"}>Wishlist</Link>
          <Link href={"/profile"}>Profile</Link>
        </div>
        <div
          // onClick={handleToggle}
          className="inline-flex items-center gap-2"
        >
          <MdDarkMode />
          <span>Dark Mode</span>
        </div>
        <MyBtn
          to={"/login"}
          classname={`border border-[#4a4741] w-full py-3 rounded-3xl text-sm text-center ${
            user ? "hidden" : "block"
          } `}
        >
          Sign in
        </MyBtn>
      </div>
    </div>
  );
};

export default Sidebar;
