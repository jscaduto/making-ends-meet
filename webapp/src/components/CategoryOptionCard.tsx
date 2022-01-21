import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { COLOR } from '../constants'
import CategoryOption from '../types/CategoryOption';

type CategoryOptionProps = {
  categoryOption: CategoryOption;
};

export default ({ categoryOption }: CategoryOptionProps) => {
  let color: string;
  if (categoryOption.cost === 1) {
    color = COLOR.red;
  } else if (categoryOption.cost === 2) {
    color = COLOR.yellow;
  } else {
    color = COLOR.blueDark;
  };
  let descriptionItems: JSX.Element[] = [];
  categoryOption.description.forEach((descriptor: string) => {
    descriptionItems.push((
      <Typography variant="subtitle1" color="text.secondary" component="div">
      {descriptor}
    </Typography>
    ));
  });
  return (
    <Card sx={{ display: 'flex' }}>
      {/* <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={categoryOption.icon}
        alt={categoryOption.icon}
      /> */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" color={color}>
            {categoryOption.title}
          </Typography>
          {descriptionItems}
        </CardContent>
      </Box>
    </Card>
  );
};