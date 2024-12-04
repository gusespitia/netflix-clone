"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { dataMovies } from "@/data/data-movies/NormalMovie.data";
import { toast } from "@/hooks/use-toast";

const NormalMovie = () => {
    const [isLoading, setIsLoading] = useState(false);
    const uploadMovies = async () => {
        setIsLoading(true);
        try {
        await axios.post("/api/create-movies", {
          movies: dataMovies,});
        toast({
          title: "Movies uploaded successfully",
        })
        setIsLoading(false);
        } catch (error) {
          console.error("Error uploading movies:", error);
        } finally {
          setIsLoading(false);
        }
    }
  return (
    <div className="border rounded-lg border-white-400 trnansition-all duration-300 p-6 hover:bg-[#E50914]">
      <h1 className="text-xl font-bold mb-4 text-center">Upload Normal Movies</h1>
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => uploadMovies()}
        disabled={isLoading}
      >
        Upload
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default NormalMovie;
