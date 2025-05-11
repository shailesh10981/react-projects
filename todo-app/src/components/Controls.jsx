const Controls = ({ count, setCount }) => {
  return (
    <>
      <button
        className="btn btn-danger me-2"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
};
export default Controls;
