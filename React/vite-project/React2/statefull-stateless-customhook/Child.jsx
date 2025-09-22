export function Child({ food, onChange }) {
  return (
    <div>
      <p>select you food:{food}</p>
      <select value={food} onChange={(e) => onChange(e.target.value)}>
        <option value="steak">steak</option>
        <option value="buger">burger</option>
        <option value="pizza">pizza</option>
        <option value="jugnk not Good"> jugnk not Good</option>
      </select>
    </div>
  );
}
