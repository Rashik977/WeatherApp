import { useRef } from "react";
import Image from "../Atomic/Image";
import Text from "../Atomic/Text";
import TextInput from "../Atomic/TextInput";
import useFetch from "../customHook/useFetch";
import { ISearch } from "../Interface/ISearch";

const Searchbar = (props: ISearch) => {
  const { search, setSearch, handleClick } = props;
  const hidden = useRef<HTMLUListElement>(null);
  const { data } = useFetch(
    `https://api.weatherapi.com/v1/search.json?key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&q=${search}`
  );

  return (
    <div className="flex flex-col">
      <div>
        <TextInput
          type="text"
          placeholder="Search Location..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
        <div className="search-icon" onClick={handleClick}>
          <Image src="search.svg" width="28px" height="28px" />
        </div>
      </div>

      {data && data.length > 0 && (
        <ul className="suggestion" ref={hidden}>
          {data.map((suggestion: any) => (
            <li
              className="suggestion__item"
              key={suggestion.id}
              onClick={() => {
                handleClick();
                setSearch(suggestion.name);
                if (hidden.current) hidden.current.style.display = "none";
              }}
            >
              <Text type="h4" color="black">
                {suggestion.name}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
