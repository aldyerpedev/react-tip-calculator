export default function Input({ bill, onSetBill }) {
  return (
    <div className="input">
      <label>How much is the total of your bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
