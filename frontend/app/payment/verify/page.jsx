import { Suspense } from "react";
import PaymentVerifyPage from "./PaymentVerifyPage";

export default function VerifyPage() {
  return (
    <Suspense fallback={<div>verifying...</div>}>
      <PaymentVerifyPage />
    </Suspense>
  );
}
