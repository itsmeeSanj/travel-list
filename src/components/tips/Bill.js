function Bill({ onChangeBillValue, value }) {
  return (
    <>
      <label htmlFor=''>How much was the bill?</label>
      <input type='text' value={value} onChange={(e) => onChangeBillValue(e)} />
    </>
  );
}

export default Bill;
