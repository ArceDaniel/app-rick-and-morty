import SearchBar from "../navBar/SearchBar";


export default function Nav({onSearch}) {
    return (
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    );
 }
 