import Image from "../Atomic/Image";
import { ISearch } from "../Interface/ISearch";
import Searchbar from "./Searchbar";

const DashboardHeader = (props: ISearch) => {
  const { search, setSearch, handleClick } = props;
  return (
    <div className="dashboard__header flex">
      <Image src="logo.svg" height="47px" width="90px" />
      <div className="search-wrapper">
        <Searchbar
          setSearch={setSearch}
          handleClick={handleClick}
          search={search}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
