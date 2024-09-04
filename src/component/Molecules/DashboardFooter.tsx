import Image from "../Atomic/Image";
import Text from "../Atomic/Text";
import { IData } from "../Interface/IData";

const DashboardFooter = (props: { data: IData | null; bool: boolean }) => {
  const { data, bool } = props;
  return (
    <div className="dashboard__footer flex align-center">
      <Text type="h1">
        {bool ? data?.current.temp_c + "°C" : data?.current.temp_f + "°F"}
      </Text>
      <div className="flex flex-col">
        <Text type="h2">{data?.location.name}</Text>
        <Text type="p">{data?.current.condition.text}</Text>
      </div>
      <Image src={data?.current.condition.icon} width="70px" height="70px" />
    </div>
  );
};

export default DashboardFooter;
