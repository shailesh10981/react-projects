// Importing necessary styles and components
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import Controls from "./components/Controls";
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import Search from "./components/Search";
import { DummyData } from "./components/DummyData";
import Pagination from "./components/Pagination";

function App() {
  // Dummy data for todo list
  const todo = DummyData;

  // Tabs state: 'counter' or 'todo'
  const [activeTab, setActiveTab] = useState("counter");

  // Counter state
  const [count, setCount] = useState(0);

  // Main todo list state
  const [todoList, setTodoList] = useState(todo);

  // Form input state for name and email
  const [formData, setFormData] = useState({ name: "", email: " " });

  // Search text state
  const [searchText, setSearchText] = useState("");

  // Track current edit ID (null means adding new item)
  const [editID, setEditID] = useState(null);

  // Button text changes from ADD → UPDATE based on edit
  const [btnText, setBtnText] = useState("ADD");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Calculate first and last item indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (ADD or UPDATE logic)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editID) {
      // Update existing item
      const updateList = todoList.map((item) =>
        item.id === editID
          ? { ...item, name: formData.name, email: formData.email }
          : item
      );
      setTodoList(updateList);
    } else {
      // Add new item to the top
      setTodoList([
        {
          id: new Date().getTime(), // Unique ID
          name: formData.name,
          email: formData.email,
        },
        ...todoList,
      ]);
    }

    // Reset form
    setFormData({ name: "", email: "" });
    setEditID(null); // Exit edit mode
    setBtnText("ADD"); // Reset button text
  };

  // Handle delete
  const handleDelete = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  // Filter data based on search input (case-insensitive)
  const filterData = todoList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  // Get only the items for the current page
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle edit: fill form with selected data
  const handleEdiit = (id) => {
    const getData = todoList.find((user) => user.id === id);
    setFormData({ name: getData.name, email: getData.email });
    setEditID(id);
    setBtnText("UPDATE");
  };
  // Handle pagination
  const onPageChange = (num) => {
    setCurrentPage(num);
  };
  return (
    <>
      <div className="container text-center mt-5">
        {/* Navigation Tabs */}
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Counter tab */}
        {activeTab === "counter" && (
          <div className="form-pading">
            <h2>Counter</h2>
            <Display count={count} />
            <Controls count={count} setCount={setCount} />
          </div>
        )}

        {/* Todo tab */}
        {activeTab === "todo" && (
          <>
            {/* Add/Update Form */}
            <TodoForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              btnText={btnText}
            />

            {/* Search Field */}
            <Search setSearchText={setSearchText} searchText={searchText} />

            {/* Display filtered and paginated todo items */}
            {filterData.length === 0 ? (
              <h2>No Record Found!</h2>
            ) : (
              <TodoList
                todoList={currentItems}
                handleDelete={handleDelete}
                handleEdiit={handleEdiit}
              />
            )}

            {/* Pagination Component */}
            <Pagination
              totalItems={filterData.length}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
