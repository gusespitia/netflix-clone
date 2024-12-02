"use client";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import AddProfile from "./AddProfile/AddProfile";
const Profiles = (props: ProfilesProps) => {
  const { users } = props;
  console.log({ users });
  return (
    <div>
      <div className="flex gap-7">
        <p>Usuarios de perfiles...</p> <AddProfile />
      </div>

      <div className="mt-16 flex items-center justify-center">
        <Button
          variant="outline"
          size="lg"
          className="text-gray-500"
          onClick={() => console.log("hola")}
        >
          Administrar perfiles
        </Button>
      </div>
    </div>
  );
};

export default Profiles;
