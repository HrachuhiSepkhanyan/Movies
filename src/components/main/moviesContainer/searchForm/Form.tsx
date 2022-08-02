import React, { useEffect, useState } from "react";
import { Style } from "./Form.styled";
import { moviesStore } from "../../../MobxStore/movies";

interface IInputText {
  setFilterValue: (inputValue: string) => void;
}

const Form: React.FC<IInputText> = ({ setFilterValue }, page: number) => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {}, [page]);

  return moviesStore.showSearchForm ? (
    <Style.SearchForm>
      <h3>Search for a movie</h3>
      <input
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        value={inputVal}
      />
      <button>Search</button>
    </Style.SearchForm>
  ) : (
    ""
  );
};

export default Form;
