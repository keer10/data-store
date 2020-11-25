import React from "react";
import { useDispatch } from "react-redux";
import { incrementPageNumber, decrementPageNumber, goToFirstPage} from '../actions/appActions'

export default function Pagination() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={() => dispatch(decrementPageNumber())} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => dispatch(goToFirstPage())}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => dispatch(incrementPageNumber())} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
