import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaRotate } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import MyInput from "./MyInput";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const serviceID = "service_xw05ht7";
    const templateID = "template_vqxo8x7";
    const publicKey = "0-UL1jRHodRtq_rl7";

    const templateParams = {
      user_email: email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setFormStatus("Message sent successfully!");
        setEmail("");
        setIsSubmitting(false);
      },
      (error) => {
        setFormStatus("Failed to send message. Please try again.");
        setIsSubmitting(false);
        console.error("EmailJS error:", error);
      }
    );
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  if (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgotPassword" ||
    pathname.includes("/reset-password") ||
    pathname.includes("/x-AD-min")
  ) {
    return null;
  }

  return (
    <div className="bg-[#4a4741] text-[#f7f1e8] px-5 py-10 text-sm md:text-base">
      {/* Top Banner */}
      <div className="flex flex-col gap-5 items-start md:flex-row justify-between md:items-center md:max-w-[80vw] mx-auto">
        <div className="flex gap-4 items-center">
          <FaRotate className="size-12" />
          <div className="w-[13.8rem]">
            <h5 className="font-bold">Extended Return & Exchange</h5>
            <span>
              We offer free returns for items sent back within 20 days.
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <IoDiamondOutline className="size-12" />
          <div className="w-[13.8rem]">
            <h5 className="font-bold">Complimentary Customization</h5>
            <span>
              Complimentary engraving and customized size for all orders.
            </span>
          </div>
        </div>
      </div>

      <hr className="m-auto my-4 md:my-10 text-[#80776f]" />

      {/* Middle Content */}
      <div className="grid md:grid-cols-3 md:max-w-[80vw] mx-auto gap-8">
        {/* Contact Info */}
        <div className=" md:border-b-0 border-b border-b-[#80776f] md:pr-5 md:pb-0 pb-5">
          <img className="w-28" src="/logo.png" alt="Logo" />
          <div className="flex flex-col gap-1 mt-3">
            <a
              href="mailto:fredrickfashionicon@gmail.com"
              className="hover:underline"
            >
              fredrickfashionicon@gmail.com
            </a>{" "}
            <span>Call or Send Us a WhatsApp Message</span>
            <span>Mon-Sat | 8am-7pm GMT</span>
            <span>Sun | 2pm-6pm GMT</span>
            <span>+234 704 933 8317</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between w-full md:border-b-0 border-b border-b-[#80776f] md:pr-5 md:pb-0 pb-5">
          <div className="text-start w-full px-5">
            <h4 className="py-4 text-lg font-semibold">About Us</h4>
            <div className="flex flex-col gap-1 font-extralight">
              <Link href="/">Company</Link>
              <Link href="/">Community</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Terms of Use</Link>
            </div>
          </div>
          <div className="text-start w-full px-5  border-r-0">
            <h4 className="py-4 text-lg font-semibold">Support</h4>
            <div className="flex flex-col gap-1 font-extralight">
              <Link href="/">Knowledge Base</Link>
              <Link href="/">Tutorials</Link>
              <Link href="/">Guides</Link>
              <Link href="/">Video</Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-white px-5 backdrop-blur-md bg-[black]/30 py-12 md:w-[80%] w-full m-auto rounded-2xl">
          <h2 className="py-1 border-b w-max mx-auto">NEWSLETTER</h2>
          <p className="text-center my-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            updates, exclusive offers, and helpful tips straight to your inbox.
          </p>
          <form className="flex md:flex-row w-full max-w-md mx-auto">
            <MyInput
              value={email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              classname="px-4 py-2 border-neutral-500 border rounded-l-3xl w-full outline-none focus:outline-none focus:ring-0"
            />
            <button
              onClick={handleSubscribe}
              type="submit"
              disabled={isSubmitting}
              className="text-xs px-4 py-2 rounded-r-3xl whitespace-nowrap bg-[#f7f1e8] border border-[#f7f1e8] text-[#4a4741]"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {formStatus && (
            <p className="text-center mt-4 text-sm italic">{formStatus}</p>
          )}
        </div>
      </div>

      <hr className="m-auto my-4 md:my-10 text-[#80776f]" />

      {/* Footer Bottom */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-center block py-2">
          &copy; 2026 Fredrick Fashion Icon. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
