const NavBar = ({ activeTab = "counter", setActiveTab }) => {
  // console.log(activeTab);
  return (
    <ul className="nav nav-underline mb-4">
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === "counter" ? "active" : ""}`}
          aria-current="page"
          href="#"
          onClick={() => setActiveTab("counter")}
        >
          Counter
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === "todo" ? "active" : ""}`}
          href="#"
          onClick={() => setActiveTab("todo")}
        >
          Todo List
        </a>
      </li>
    </ul>
  );
};
export default NavBar;
