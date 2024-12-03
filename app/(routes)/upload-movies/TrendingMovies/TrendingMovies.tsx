"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { trendingMovies } from "./TrendingMovies.data";
import { useToast } from "@/hooks/use-toast";

const TrendingMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const uploadTrendingMovies = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/create-popular-movies", {
        movies: trendingMovies,
      });
      toast({
        title: "Trending Movies uploaded successfully",
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading movies:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="border rounded-lg border-white-400 trnansition-all duration-300 p-6 hover:bg-slate-500">
      <h1 className="text-xl font-bold mb-4 text-center">Upload TrendingMovies Movies</h1>
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => uploadTrendingMovies()}
        disabled={isLoading}
      >
        Upload
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default TrendingMovies;
