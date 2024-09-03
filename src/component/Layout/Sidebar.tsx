import Text from "../Atomic/Text";
import { IData } from "../Interface/IData";
import { IError } from "../Interface/IError";
import SidebarItem from "../Molecules/SidebarItem";

const Sidebar = (props: { data: IData | null; error: IError | null }) => {
  const { data, error } = props;
  return (
    <div className="dashboard__sidebar flex flex-col">
      {error && (
        <Text type="h3" color="red">
          {error?.message}
        </Text>
      )}
      <Text type="p">Weather Details...</Text>
      <div className="sidebar__content flex flex-col">
        <Text type="h3">{data?.current.condition.text}</Text>
        <SidebarItem
          title="Temperature"
          content={data?.current.temp_c.toString() + "°C"}
          link="temp.svg"
        />
        <SidebarItem
          title="Humidity"
          content={data?.current.humidity.toString() + "%"}
          link="humid.svg"
        />
        <SidebarItem
          title="Wind Speed"
          content={data?.current.wind_kph.toString() + "km/h"}
          link="wind.svg"
        />
      </div>
    </div>
  );
};

export default Sidebar;
