/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PanelServicios() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex h-dvh">
      <div className="w-1/4 h-dvh"></div>
      <main className="w-3/4 h-dvh py-5 px-5 space-y-7 bg-[#222529] text-white">
        <div className='flex justify-between items-center bg-[#101010] p-5 rounded-xl'>
          <h2 className="text-white font-bold text-3xl">Panel de Servicios</h2>
          <div>
            <button onClick={handleClickOpen} className='bg-redPrimary text-white font-medium text-lg px-8 py-2 rounded-lg'>Ingresar Servicio</button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending anonymous
                  location data to Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <article className="flex flex-wrap mt-3 gap-10 bg-[#101010] w-full p-5 rounded-xl">

        </article>
      </main>
    </div>
  )
}