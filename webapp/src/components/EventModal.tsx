import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

import LifeEvent from '../types/LifeEvent';

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
    <Dialog open={modalOpen} onClose={onClose}>
      <DialogTitle>
        {lifeEvent.title}
      </DialogTitle>
      <DialogContent>
        <Typography>
          {lifeEvent.description}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};