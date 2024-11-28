import { PropTypes } from "prop-types";
import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = () => {
    props.onSearchChange(search);
  };

  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <>
      <div>
        <label>Cari Artikel : </label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          onKeyDown={searchKeyDown}
        />
        <button onClick={changeSearch}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  totalPosts: PropTypes.number.isRequired,
};
export default Search;
