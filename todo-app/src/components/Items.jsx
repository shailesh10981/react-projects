const Items = ({ data, handleDelete, handleEdiit }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {data.name}
      <span> {data.email}</span>
      <span style={{ float: "right" }}>
        <button
          className="btn btn-success btn-sm"
          onClick={() => handleEdiit(data.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm ms-2"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};
export default Items;
