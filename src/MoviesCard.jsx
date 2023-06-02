
import style from './MovieCard.module.css'
export function MoviesCard({movies}) {
    const img = "https://image.tmdb.org/t/p/w300" + movies.poster_path
   return <li className={style.moviesCard}>
    <img 
    height={320}
    width={220}
   
    className={style.moviesImage} 
    src={img} 
    alt={movies.title}/>
    <div>{movies.title}</div>
    </li>
}