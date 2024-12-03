"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserNetflix } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { SelectorProfileProps } from "./SelectorProfile.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";
import { ChevronDown, LogOut, Pencil } from "lucide-react";

const SelectorProfile = (props: SelectorProfileProps) => {
  const { users } = props;
  const router = useRouter();
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();
  const onChangeUser = (userNetflix: UserNetflix) => {
    changeCurrentUser(userNetflix);
    router.refresh();
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-1 items-center">
            <Image
              src={
                currentUser ? currentUser.avatarUrl : "/profiles/profile-1.png"
              }
              width={32}
              height={32}
              alt="User"
              className="rounded-md"
            />
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-2 bg-black/80 border-transparent">
          {users.map((user) => (
            <DropdownMenuItem
              className="flex gap-2 mb-3 group"
              key={user.id}
              onClick={() => {
                onChangeUser(user);
                router.push("/");
              }}
            >
              <Image
                src={user.avatarUrl}
                width={32}
                height={32}
                alt="User"
                className="rounded-md"
              />
              <p className="group-hover:text-black text-white">
                {user.profileName}
              </p>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            onClick={() => router.push("/profiles")}
            className="flex gap-2mb-3 group text-white cursor-pointer"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Administrar Perfiles
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-2mb-3 group text-white cursor-pointer"
            onClick={() => signOut()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SelectorProfile;
