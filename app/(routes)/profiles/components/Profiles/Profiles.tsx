"use client";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import AddProfile from "./AddProfile/AddProfile";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";

const Profiles = (props: ProfilesProps) => {
  const { users } = props;
  const [manageProfiles, setManageProfiles] = useState(false);
  console.log({ users });
  return (
    <div>
      <div className="flex gap-7">
        {users.map((user) => (
          <div key={user.id} className="text-center relative cursor-pointer">
            <Image
              src={user.avatarUrl || ""}
              alt={`Profile ${user.profileName}`}
              width={140}
              height={140}
              className={cn(
                manageProfiles ? "blur-md" : "",
                "border-transparent rounded-md hover:border-white hover:border-2"
              )}
            />
            <p className="mt-2 to-gray-500 uppercase text-lg">
              {user.profileName}
            </p>
            <div
              className={cn(
                "top-14 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                manageProfiles ? "absolute" : "hidden"
              )}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="bg-white rounded-full p-1 hover:bg-red-100">
                    <Trash className="w-6 h-6 text-red-500" />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-zinc-900">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure you want to delete this profile?
                    </AlertDialogTitle>                   
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Go Back</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 border-red-500 border" onClick={() => console.log("hola")}></AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
        <AddProfile />
      </div>

      <div className="mt-16 flex items-center justify-center">
        <Button
          variant="outline"
          size="lg"
          className="text-gray-500"
          onClick={() => setManageProfiles(!manageProfiles)}
        >
          Administrar perfiles
        </Button>
      </div>
    </div>
  );
};

export default Profiles;
