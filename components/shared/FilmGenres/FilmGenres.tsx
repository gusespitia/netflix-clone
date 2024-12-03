import { FilmGenresProps } from "./FilmGenres.types";

const genreTranslations: Record<string, string> = {
  Action: "Acción 🦾",
  Adventure: "Aventura 🤠",
  Animation: "Animación 🪁",
  Biography: "Biografía 📙",
  Comedy: "Comedia 😂",
  Crime: "Crimen",
  Drama: "Drama 🕵️",
  Family: "Familia 👪",
  Fantasy: "Fantasía 🧚‍♀️",
  History: "Historia 📖",
  Horror: "Horror 👻",
  Music: "Música 🎶",
  Mystery: "Misterio 🕵️‍♀️",
  Romance: "Romance 💑",
  "Sci-Fi": "Ciencia Ficción 👨‍🔬",
  Sport: "Deportes 🏀",
  Thriller: "Thriller 🕵️‍♀️",
  War: "Guerra",
  Western: "Western 🤠",
};

export function FilmGenres(props: FilmGenresProps) {
  const { genres } = props;

  return (
    <div className="flex gap-4 text-[10px] text-white">
      {genres.map((genre) => (
        <p key={genre}>{genreTranslations[genre] || genre}</p>
      ))}
    </div>
  );
}
