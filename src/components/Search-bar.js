import { useRef, useState } from "react";

const SearchBar = ({ placeholder, setTitles }) => {
  const inputEl = useRef(null);
  const [inputval, setInputval] = useState("");

  const onAdd = (e) => {
    if (e.key === "Enter" && inputEl.current.value.trim().length > 0) {
      setTitles((prev) => [{ title: inputval, watched: false }, ...prev]);
      inputEl.current.value = "";
    }
  };

  return <input ref={inputEl} className="SearchBar small" type="text" placeholder={placeholder} onChange={() => setInputval(inputEl.current.value)} onKeyDown={onAdd} />;
};

export default SearchBar;
