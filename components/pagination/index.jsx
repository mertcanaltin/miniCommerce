const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (

    <div className="flex justify-center mb-12">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          {pages.map((page) => (
            <li key={page} className="page-item">
              <a className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded  hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${page === currentPage ? 'text-teal-500' : 'text-red-800'
                }`}
                onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>

          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;