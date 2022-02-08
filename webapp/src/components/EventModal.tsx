import { Box, Dialog, DialogContent, DialogTitle, Paper, Typography } from '@mui/material';

import Budget from '../types/Budget';
import LifeEvent from '../types/LifeEvent';

import { COLOR } from '../constants';

type EventModalProps = {
  budget: Budget;
  lifeEvent: LifeEvent;
  modalOpen: boolean;
  setIsModalOpen: CallableFunction;
};

export default ({ budget, lifeEvent, modalOpen, setIsModalOpen }: EventModalProps) => {
  const onClose = () => {
    setIsModalOpen(false);
  };
  const outcome: string = lifeEvent?.outcomes ? lifeEvent.outcomes[0] : `You will start the month with ${budget.savings + 6} credits.`;
  
  return (
    <Dialog open={modalOpen} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: COLOR.blueLight }}>
        <Paper>
          <Typography p={1} variant="h5" color="error" align="center">
            {lifeEvent.title}
          </Typography>  
        </Paper>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: COLOR.blueLight }}>
        <Paper>
          <Paper>
            <Typography p={3} variant="subtitle1">
              {lifeEvent.description}
            </Typography>
          </Paper>
            <Typography p={3} variant="subtitle1">
              {outcome}
            </Typography>        
          </Paper>
      </DialogContent>
    </Dialog>
  );
};