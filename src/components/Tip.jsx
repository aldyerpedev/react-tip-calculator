export default function Tip({ tip, onSetTip, children }) {
  return (
    <div className="tip">
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">None</option>
        <option value="5">Good</option>
        <option value="10">Nice</option>
        <option value="15">Very Good</option>
        <option value="20">Perfect</option>
      </select>
    </div>
  );
}
