import SearchBar from "./Search-bar";
import { useState, useEffect } from "react";
import ListedTitles from "./ListedTitles";
//move #white to separate component = listedTitles

const WatchList = () => {
  const [titles, setTitles] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    console.log(titles);
    setOpen(null);
  }, [titles]);

  return (
    <div className="watchList">
      <SearchBar placeholder="add title . . " setTitles={setTitles} />
      <ListedTitles titles={titles} setTitles={setTitles} open={open} setOpen={setOpen} />
    </div>
  );
};

export default WatchList;
