import { Typography } from '@material-ui/core';

const ItemNameAndSize = ({ name, size }: { name: string; size: string }) => {
  const sizeText = size === 'NA' ? '' : `  --  Size: ${size}`;
  return <Typography>{`${name}${sizeText}`}</Typography>;
};

export default ItemNameAndSize;
