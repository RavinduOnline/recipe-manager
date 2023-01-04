import React, {useEffect, useState} from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 

export default function MessageModel({modelOpen, isConfirm , data}) {

    useEffect(() => {
            if(modelOpen){
                handleOpen();
            }
      }, [modelOpen]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const handleIsConfirm = () => isConfirm(!isConfirm);

    
  return (
    <div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>{data.title}</DialogHeader>
                <DialogBody divider>
                    {data.message}
                </DialogBody>
                <DialogFooter>
                <Button
                    variant="text"
                    color="gray"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="red" onClick={handleIsConfirm}>
                    <span>Confirm</span>
                </Button>
                </DialogFooter>
            </Dialog>
    </div> 
    )
}
