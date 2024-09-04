import { MutableRefObject } from "react";

export interface ISearch {
  search: string;
  setSearch: (search: string) => void;
  handleClick: () => void;
}
