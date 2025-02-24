/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useContext, useEffect } from "react";
import { DialogContext } from "../../context/DialogContext";
import { FaXmark } from "react-icons/fa6";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ShowDialog = () => {
  const { handleClose, open, title, content } = useContext(DialogContext)
  useEffect(() => {
    console.log(open)
  }, [open])
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ '.css-10d30g3-MuiPaper-root-MuiDialog-paper': { maxWidth: '700px !important', width: '100%' } }}
    >
      <button title="Cancelar" type="button" onClick={handleClose} className="absolute right-2 top-3 text-black rounded-lg px-3 py-1 text-sm">
        <FaXmark size={25} />
      </button>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
    </Dialog>
  )
}