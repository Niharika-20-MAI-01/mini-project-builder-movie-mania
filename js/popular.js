

const fetchpopularmovies = async ({ pages }) => {
    try {

        const api = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${pages}`)
        if (api.status === 200)
            return api.data.results

    } catch (error) {
        console.log(error);

    }

}


const popularmovies = async () => {
    try {
        for (let index = 1; index <= pages; ++index) {
            const data = await fetchpopularmovies(
                {
                    pages: index
                }
            )
            document.title = "Popular"
            data.forEach(element => {
                document.querySelector("#popular").innerHTML += generateblock(
                    {
                        title: element.title,
                        releaseat: element.release_date,
                        id: element.id,
                        imgsrc: element.backdrop_path,
                        like: element.vote_average,
                        view: element.vote_count

                    }
                )
            });

        }

    } catch (error) {
        console.log(error);

    }
}


window.onload = () => popularmovies()

