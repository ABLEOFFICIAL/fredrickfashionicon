import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const receiptRef = React.useRef(null);
const [selectedTransaction, setSelectedTransaction] = React.useState(null);

const downloadReceipt = async () => {
  if (!receiptRef.current) return;

  const canvas = await html2canvas(receiptRef.current, {
    scale: 2,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = 190;
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 10, 10, pdfWidth, pdfHeight);
  pdf.save(`receipt_${selectedTransaction.orderNumber}.pdf`);
};

return (
  <div className="hidden">
    <Receipt ref={receiptRef} txn={selectedTransaction} />
  </div>
);
