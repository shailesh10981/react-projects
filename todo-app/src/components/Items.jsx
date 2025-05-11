const Items = ({ data, handleDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {data.name}
      <span> {data.email}</span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => handleDelete(data.id)}
      >
        Delete
      </button>
    </li>
  );
};
export default Items;
