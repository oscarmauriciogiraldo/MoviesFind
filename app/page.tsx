import Image from "next/image";
import styles from "./../styles/Page.module.scss"


export default async function Home() {

  const baseURL = "http://image.tmdb.org/t/"

  /* Espera del metodo  */
  const getMovies  = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGNjYjUxNTVmNzJjZmRiNGNkYjM1OWZhZjU0OTJjNSIsInN1YiI6IjY2MGYzMmYyNGE0YmY2MDE2MzI3YWY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bGxT7-V7JTr8CFQQVr4Dneuno1r1EiK2WyjbBuKWSfI"
    }
  }); 

  const result: Movies = await getMovies.json();

  const {results, page, total_pages, total_results} = result

  return (
    
    <div className={styles['cardsContainer']}>

      <div className={styles.sectionTitle}>
        <h3>Most Popular Movies</h3>
        <div className={styles.boxline}>
          <hr className={styles.line1} />
          <hr className={styles.line2} />
        </div>
      </div>

      {/* movie cards */}
      <div className={styles.cards}>
        {results.length > 0 
          && results.map(x =>

            // eslint-disable-next-line react/jsx-key
            <div className={styles.mcard}>
              <div className={styles.movieposter}>
                
              
                {/* <img src="assets/img/poster.jpg" alt=""> */}
              </div>
              <div className={styles.detailsCard}>
                {/* <img className="name" src="assets/img/avtarlogo.png" alt=""> */}
                <h3>Directed by James Cameron</h3>
                <div className={styles.rating}>
                    <span>4/5</span>
                </div>
                <div className="tags">
                    <span>Sci-fi</span>
                    <span>Action</span>
                </div>
              </div>
            </div>
          )
        }
      </div>

    </div>
  );
}
