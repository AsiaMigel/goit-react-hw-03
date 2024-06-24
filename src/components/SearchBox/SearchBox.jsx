import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.SearchBoxBar}>
      <label className={css.searchBoxName} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.searchBoxInput}
        type="text"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
