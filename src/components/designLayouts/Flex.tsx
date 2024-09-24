import { FlexProps } from "../../types/global.type";


const Flex = ({ children, className }: FlexProps) => {
  return <div className={className}>{children}</div>;
};

export default Flex;
