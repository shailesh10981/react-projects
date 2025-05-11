import Items from "./Items";

const TodoList = ({ todoList, handleDelete }) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title">📋 Your Todo List</h3>
        <ul className="list-group mt-3">
          {todoList.map((item) => (
            <Items key={item.id} data={item} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
