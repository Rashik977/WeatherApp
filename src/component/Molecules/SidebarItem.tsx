import Image from "../Atomic/Image";
import Text from "../Atomic/Text";
import { ISidebarItem } from "../Interface/ISidebarItem";

const SidebarItem = (props: ISidebarItem) => {
  const { title, content, link } = props;
  return (
    <div className="flex space-between">
      <Text type="p">{title}</Text>
      <div className="sidebar__item flex">
        <Text type="p">{content}</Text>
        <Image src={link} width="18px" height="24px" />
      </div>
    </div>
  );
};

export default SidebarItem;
