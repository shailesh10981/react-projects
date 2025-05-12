const Pagination = ({ totalItems, itemsPerPage = 10, onPageChange }) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const pageNumber = Array.from({ length: totalPage }, (_, i) => i + 1);
  if (totalPage === 1) return null;
  //console.log(totalPage);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumber.map((num) => (
          <li className="active" key={num}>
            <button className="page-link" onClick={() => onPageChange(num)}>
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
