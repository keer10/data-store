import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRow, addItem } from "../actions/appActions";
import Pagination from "./Pagination";

export default function TableList({ data }) {
  const tableData = data;

  const dispatch = useDispatch();
  const [inputText, setInput] = useState('')

  const addNewItem = () => {
    dispatch(addItem({
      title: inputText,
      id: 1001
    }))
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map((tableRow) => {
              return (
                <tr key={tableRow.id}>
                  <th scope="row">{tableRow.id}</th>
                  <td>{tableRow.title}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        dispatch(deleteRow(tableRow));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
            <input type='text' placeholder='please enter title' value={inputText} onChange={(e) => setInput(e.target.value) } />
            <button className="btn btn-primary" onClick={addNewItem}> Add New </button>
      <Pagination />
    </div>
  );
}
