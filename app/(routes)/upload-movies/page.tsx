import Logo from "@/components/shared/Logo/Logo";
import NormalMovies from "./NormalMovie/NormalMovie";
import TrendingMovies from "./TrendingMovies/TrendingMovies";

const UploadMoviesPage = () => {
    return ( 
        <div className="bg-zinc-900 h-full flex flex-col justify-center items-center">
            <Logo />
            <h1 className="text-2xl my-8 font-semibold">Upload yout favorite Movies</h1>
            <div className="max-w-2xl  grid grid-cols-2 gap-4">
                <NormalMovies />
                <TrendingMovies />
            </div>
        </div>
     );
}
 
export default UploadMoviesPage;