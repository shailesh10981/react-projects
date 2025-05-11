const TodoForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="form-pading">
      <h2>Todo Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-end g-2">
          <div className="col-md-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TodoForm;
