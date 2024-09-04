import Text from "../Atomic/Text";
import { IButton } from "../Interface/IButton";

const Button = (props: IButton) => {
  const { textType, children, backgroundColor, textColor, onClick } = props;
  return (
    <button style={{ backgroundColor }} className="btn" onClick={onClick}>
      <Text type={textType} color={textColor}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
