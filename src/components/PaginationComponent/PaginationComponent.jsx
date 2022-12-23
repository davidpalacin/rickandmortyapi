import React from "react";

export default function PaginationComponent({setPage, actualPage, totalPages}) {
  return (
    <nav
      className="d-flex justify-content-center mt-4"
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        <li
          className="page-item"
          role="button"
          onClick={() => setPage(() => actualPage>1 ? actualPage-- : actualPage)}
        >
          <a className="page-link">Previous</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            {actualPage} of {totalPages}
          </a>
        </li>
        <li
          className="page-item"
          role="button"
          onClick={() => setPage(() => actualPage<totalPages ? actualPage++ : actualPage)}
        >
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
}
