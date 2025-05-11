import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import Controls from "./components/Controls";
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const todo = [];

  const [activeTab, setActiveTab] = useState("counter");
  const [count, setCount] = useState(0);

  const [todoList, setTodoList] = useState(todo);
  const [formData, setFormData] = useState({ name: "", email: " " });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      { id: new Date().getTime(), name: formData.name, email: formData.email },
      ...todoList,
    ]);
    setFormData({ name: "", email: "" });
    //console.log(formData.name);
  };

  const handleDelete = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  return (
    <>
      <div className="container text-center mt-5">
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "counter" ? (
          <div className="form-pading">
            <h2>Counter</h2>
            <Display count={count} />
            <Controls count={count} setCount={setCount} />
          </div>
        ) : (
          ""
        )}

        {activeTab === "todo" && (
          <>
            <TodoForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            {todoList.length === 0 ? (
              <h2>No Record Found!</h2>
            ) : (
              <TodoList todoList={todoList} handleDelete={handleDelete} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
