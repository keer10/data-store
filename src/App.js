import logo from "./logo.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import getTableData from "./actions/appActions";
import Header from "./components/Header";
import TableList from "./components/TableList";

function App() {
  const tableData = useSelector((state) => state.items);
  
  const pageNumber = useSelector(state => state.pageNumber)

   const start = (pageNumber > 1) ? (pageNumber * 5 - 5)   : 0;

  const end = 5;

  console.log(tableData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableData(start, end));
  }, [pageNumber]);
  return (
    <div>
      <Header />
      <div className="mt-5 p-5">
        <h3>Table details:</h3>
        {tableData.length > 0 ? 
          <TableList data={tableData} /> :
          <h4>loading...</h4>
          
        }

      </div>
    </div>
  );
}

export default App;
