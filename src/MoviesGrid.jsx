import movies from '../movies.json'
import { MoviesCard } from './MoviesCard';
import style from './MoviesGrid.module.css'
export function MoviesGrid() {
    console.log(movies);
    return (
        <ul className={style.MoviesGrid}>
            {movies.map((movies) => (
                 <MoviesCard key={movies.id} movies={movies} />
            ))}
        </ul>
    )
}
