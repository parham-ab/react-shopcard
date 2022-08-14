import React, { useState } from "react";

const Search = () => {
  const [searchedTxt, setSearchedTxt] = useState("");
  // searchHandle
  const searchHandle = (e) => {
    setSearchedTxt(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchedTxt} onChange={searchHandle} />
    </div>
  );
};

export default Search;
