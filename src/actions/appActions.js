import types from "./types";


export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    payload: item
  }
}

export const incrementPageNumber = () => {
  return {
    type: types.INCREMENT_PAGE_NUM
  }
}

export const decrementPageNumber = () => {
  return {
    type: types.DECREMENT_PAGE_NUM
  }
}

export const goToFirstPage = () => {
  return {
    type: types.GO_TO_FIRST
  }
}

export const deleteRow = (dataRow) => {
  return {
    type: types.DELETE_ROW,
    payload: dataRow
  }
}


const getTableDataContent = (data) => {
  return {
    type: types.GET_DATA,
    payload: data,
  };
};


const getTableData = (start, end) => {
  return async (dispatch) => {
    const res = await fetch(
      `http://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${end}`
    );
    if (res.status === 200) {
      const data = await res.json();
      dispatch(getTableDataContent(data));
    }
  };
};

export default getTableData;
