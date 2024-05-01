export default function Output({ bill, tip }) {
  const totalBill = bill + tip;
  return (
    <div className="output">
      <p>
        Your Bill is IDR {totalBill} (IDR {bill} + IDR {tip})
      </p>
    </div>
  );
}
