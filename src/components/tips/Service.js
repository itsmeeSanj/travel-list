function Service({ onChangeService, text, value }) {
  return (
    <>
      {" "}
      <label htmlFor=''>{text}</label>
      <select value={value} onChange={(e) => onChangeService(e)}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely Amazing! (20%)</option>
      </select>
    </>
  );
}

export default Service;
