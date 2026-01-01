// admin/hooks/useModal.js
import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [modalType, setModalType] = useState("");

  const openModal = (type = "", item = null) => {
    setModalType(type);
    setCurrentItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentItem(null);
    setModalType("");
  };

  const openProductModal = (product = null) => {
    openModal("product", product);
  };

  const openBlogModal = (blog = null) => {
    openModal("blog", blog);
  };

  return {
    isOpen,
    currentItem,
    modalType,
    openModal,
    closeModal,
    openProductModal,
    openBlogModal,
  };
};
