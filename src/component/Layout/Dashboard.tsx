import { useState } from "react";
import DashboardFooter from "../Molecules/DashboardFooter";
import useFetch from "../customHook/useFetch";
import Sidebar from "./Sidebar";
import DashboardHeader from "../Molecules/DashboardHeader";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState<string | null>(null);

  const { data } = useFetch(
    `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&q=${query}`
  );

  function handleClick() {
    setQuery(search);
  }
  return (
    <>
      <DashboardHeader
        setSearch={setSearch}
        handleClick={handleClick}
        search={search}
      />
      <div className="dashboard flex">
        <DashboardFooter data={data} />
        <Sidebar data={data} error={null} />
      </div>
    </>
  );
};

export default Dashboard;
