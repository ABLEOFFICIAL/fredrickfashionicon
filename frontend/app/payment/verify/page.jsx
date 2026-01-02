import { Suspense } from "react";
import PaymentVerifyPage from "./PaymentVerifyPage";

export default function VerifyPage() {
  return (
    <Suspense fallback={<div>Loading verification...</div>}>
      <PaymentVerifyPage />
    </Suspense>
  );
}
