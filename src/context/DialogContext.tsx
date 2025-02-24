import { createContext } from "react";

export interface DialogContextType {
  open: boolean;
  title: string;
  content: React.ReactNode;
  handleClickOpen: ({title, content}: { title: string, content: React.ReactNode }) => void;
  handleClose: () => void;
  setDialogContent: (title: string, content: React.ReactNode) => void;
}

export const DialogContext = createContext<DialogContextType>({
  open: false,
  title: "",
  content: null,
  handleClickOpen: () => { },
  handleClose: () => { },
  setDialogContent: () => { }
});