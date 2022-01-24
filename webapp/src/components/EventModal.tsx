import { Box, Dialog, DialogContent, DialogTitle, Paper, Typography } from '@mui/material';

import LifeEvent from '../types/LifeEvent';

import { COLOR } from '../constants';

type EventModalProps = {
  lifeEvent: LifeEvent;
  modalOpen: boolean;
  setIsModalOpen: CallableFunction;
};

export default ({ lifeEvent, modalOpen, setIsModalOpen }: EventModalProps) => {
  const onClose = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Dialog open={modalOpen} onClose={onClose}  PaperProps={{
      sx: {
        minHeight: '80vh',
        maxHeight: '80vh',
      }
    }}>
      <DialogTitle sx={{ backgroundColor: COLOR.blueLight }}>
        <Paper>
          <Typography>
            {lifeEvent.title}
          </Typography>  
        </Paper>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: COLOR.blueLight }}>
        <Paper>
          <Typography>
            {lifeEvent.description}
          </Typography>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};