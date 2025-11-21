import React from "react";

export default function page() {
  return (
    <div className="min-h-[500px] bg-white rounded-sm p-3 text-[#4a4741]">
      <div className="border-b border-neutral-500/30">
        <h2 className="text-2xl font-medium py-3">Inbox Messages</h2>
      </div>
      <div className="flex justify-center items-center  my-10">
        <div className=" h-60 w-3/5 flex flex-col items-center justify-between text-center">
          <img
            src={"/PHOTO-2025-07-09-18-53-43-removebg-preview.png"}
            className="w-32 bg-blue-500 p-4 rounded-full"
          />
          <h5>You don't have any messages</h5>
          <p>
            Here you will be able to see all the messages that we send you. Stay
            tuned
          </p>
        </div>
      </div>
    </div>
  );
}
