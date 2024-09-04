import Text from "../Atomic/Text";
import { IData } from "../Interface/IData";
import { IError } from "../Interface/IError";
import Button from "../Molecules/Button";
import SidebarItem from "../Molecules/SidebarItem";

const Sidebar = (props: {
  data: IData | null;
  error: IError | null;
  toggle: () => void;
  bool: boolean;
}) => {
  const { data, error, bool, toggle } = props;

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
          content={
            bool
              ? data?.current.temp_c.toString() + "°C"
              : data?.current.temp_f.toString() + "°F"
          }
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
      <Button
        textType="h3"
        textColor="white"
        backgroundColor="#4663ac"
        onClick={toggle}
      >
        Change Metric
      </Button>
    </div>
  );
};

export default Sidebar;
