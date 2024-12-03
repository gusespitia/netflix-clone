
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
        <div className="group cursor-pointer">
          <div className="w-[140px] h-[140px] flex flex-col justify-center items-center group-hover:bg-slate-300 rounded-md">
            <PlusCircle className="w-16 h-16 text-gray-500" />
          </div>
          <p className="text-gray-500 uppercase text-lg">Add Profile</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
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
