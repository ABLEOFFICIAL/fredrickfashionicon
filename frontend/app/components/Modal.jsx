import React, { useState } from "react";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  message,
  type = "info",
  onConfirm,
  confirmText = "OK",
  cancelText = "Cancel",
  showCancel = false,
}) => {
  if (!isOpen) return null;

  const icons = {
    success: <CheckCircle className="w-6 h-6 text-green-500" />,
    error: <AlertCircle className="w-6 h-6 text-red-500" />,
    warning: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    info: <Info className="w-6 h-6 text-blue-500" />,
  };

  const borderColors = {
    success: "border-green-500",
    error: "border-red-500",
    warning: "border-yellow-500",
    info: "border-blue-500",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className={`bg-white rounded-lg shadow-2xl max-w-md w-full border-t-4 ${borderColors[type]} transform transition-all`}
      >
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex items-center gap-3">
            {icons[type]}
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{message}</p>
        </div>

        <div className="flex gap-3 px-6 pb-6 justify-end">
          {showCancel && (
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={() => {
              if (onConfirm) onConfirm();
              onClose();
            }}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Demo Component
export default function ModalDemo() {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: "info",
    title: "",
    message: "",
    showCancel: false,
  });

  const showModal = (type, showCancel = false) => {
    const configs = {
      success: {
        title: "Success!",
        message: "Your changes have been saved successfully.",
      },
      error: {
        title: "Error",
        message: "Something went wrong. Please try again.",
      },
      warning: {
        title: "Warning",
        message:
          "Are you sure you want to proceed? This action cannot be undone.",
      },
      info: {
        title: "Information",
        message: "Here is some important information you should know about.",
      },
    };

    setModalConfig({
      isOpen: true,
      type,
      showCancel,
      ...configs[type],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Custom Modal Component
        </h1>
        <p className="text-gray-600 mb-8">
          A beautiful replacement for standard alerts
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Try Different Modal Types
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => showModal("success")}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              Success Modal
            </button>

            <button
              onClick={() => showModal("error")}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Error Modal
            </button>

            <button
              onClick={() => showModal("warning", true)}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium"
            >
              Warning Modal
            </button>

            <button
              onClick={() => showModal("info")}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Info Modal
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Usage Example:
            </h3>
            <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              {`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Success!"
  message="Your action completed successfully."
  type="success"
  confirmText="OK"
  showCancel={false}
  onConfirm={() => console.log('Confirmed')}
/>`}
            </pre>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
        showCancel={modalConfig.showCancel}
        onConfirm={() => console.log("Modal confirmed")}
      />
    </div>
  );
}
