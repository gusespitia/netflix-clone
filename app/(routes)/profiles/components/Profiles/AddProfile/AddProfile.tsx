
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusCircle } from "lucide-react";

import { useState } from "react";
import FormAddProfile from "../../FormAddProfile/FormAddProfile";

export default function AddProfile() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer group">
          <div className="group-hover:bg-slate-300 flex flex-col justify-center items-center mb-3 rounded-md w-[100px] h-[100px]">
            <PlusCircle className="w-16 h-16 text-gray-500" />
          </div>
          <p className="text-base text-gray-500 uppercase">Add Profile</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir profile</DialogTitle>
          <DialogDescription>
            Añade los diferentes perfiles que tienes en tu cuenta de Netflix
          </DialogDescription>
        </DialogHeader>
        <FormAddProfile setOpen={setOpen} />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
