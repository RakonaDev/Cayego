import React from "react";
import { DialogContext } from "./DialogContext";
import { ShowDialog } from "../components/features/ShowDialog";

export default function DialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState<React.ReactNode>(null);

  const setDialogContent = (title: string, content: React.ReactNode) => {
    setTitle(title);
    setContent(content);
  }
  const handleClickOpen = ({title, content} : {title: string, content: React.ReactNode}) => {
    setDialogContent(title, content);
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
    setDialogContent("", null);
  };

  
  return (
    <DialogContext.Provider value={{ open, handleClose, handleClickOpen, setDialogContent, title, content }}>
      {children}
      <ShowDialog />
    </DialogContext.Provider>
  )
}