"use client";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import AddProfile from "./AddProfile/AddProfile";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";
import { UserNetflix } from "@prisma/client";

const Profiles = (props: ProfilesProps) => {
  const router = useRouter();
  const { users } = props;
  const [manageProfiles, setManageProfiles] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();

  const onClickUser = (user: UserNetflix) => {
    changeCurrentUser(user);
    router.push("/");
  };

  const deleteUser = async (userIdNetflix: string) => {
    try {
      axios.delete("/api/userNetflix", { data: { userIdNetflix } });
      setManageProfiles(false);
      router.refresh();
      toast({
        title: "¡Usuario eliminado correctamente!",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Ops! Ha ocurrido un error",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="flex gap-7">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative text-center cursor-pointer"
            onClick={() => onClickUser(user)}
          >
            <Image
              src={user.avatarUrl || ""}
              alt={`Profile ${user.profileName}`}
              width={100}
              height={100}
              className={cn(
                manageProfiles ? "blur-md" : "",
                "border-transparent rounded-md hover:border-white hover:border-2"
              )}
            />
            <p className="to-gray-500 mt-2 text-lg uppercase">
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
                  <div className="bg-white hover:bg-red-100 p-1 rounded-full">
                    <Trash2 className="w-6 h-6 text-red-500" />
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
                    <AlertDialogAction
                      className="bg-red-500 border border-red-500"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
        <AddProfile />
      </div>

      <div className="flex justify-center items-center mt-6">
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
