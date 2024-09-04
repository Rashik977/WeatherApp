import { useEffect, useRef, useState } from "react";
import DashboardFooter from "../Molecules/DashboardFooter";
import useFetch from "../customHook/useFetch";
import Sidebar from "./Sidebar";
import DashboardHeader from "../Molecules/DashboardHeader";
import { WeatherType } from "../data/WeatherType";
import useBoolean from "../customHook/useBoolean";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState<string | null>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const { bool, toggle } = useBoolean();

  const { data, error } = useFetch(
    `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&q=${query}`
  );

  function handleClick() {
    setQuery(search);
  }

  useEffect(() => {
    console.log(query);
    if (data) {
      const keys = Object.keys(WeatherType);
      for (let i = 0; i < keys.length; i++) {
        if (
          WeatherType[keys[i] as keyof typeof WeatherType].includes(
            data.current.condition.code
          )
        ) {
          if (dashboardRef.current) {
            dashboardRef.current.style.backgroundImage = `url(backgrounds/${keys[i]}.jpg)`;
          }
        }
      }
    }
  }, [data]);

  return (
    <main className="dashboard-wrapper" ref={dashboardRef}>
      <DashboardHeader
        setSearch={setSearch}
        handleClick={handleClick}
        search={search}
      />
      <div className="dashboard flex">
        <DashboardFooter data={data} bool={bool} />
        <Sidebar data={data} error={error} toggle={toggle} bool={bool} />
      </div>
    </main>
  );
};

export default Dashboard;
