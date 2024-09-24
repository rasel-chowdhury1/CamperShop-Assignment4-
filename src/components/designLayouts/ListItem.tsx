
const ListItem = ({ itemName, className }:{itemName: string; // Define children as ReactNode
  className?: string; }) => {
  return <li className={className}>{itemName}</li>;
};

export default ListItem;
