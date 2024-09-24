import { FlexProps } from "../../types/global.type";

const List = ({ children, className }: FlexProps) => {
  return <ul className={className}>{children}</ul>;
};

export default List;
