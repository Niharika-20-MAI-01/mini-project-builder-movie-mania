const main = document.querySelector("main")






const fetchmovies = async ({ pageno, sortby }) => {
    try {

        const api = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&page=${pageno}&sort_by=vote_count.desc`)

        if (api.status === 200)
            return api.data.results

    } catch (error) {
        console.log(error);

    }

}



const displaydata = async (event) => {
    main.innerHTML = ""

    for (let index = 1; index <= pages; ++index) {
        const data = await fetchmovies({
            pageno: index
        })

        
        data.forEach(element => {

            document.querySelector("main").innerHTML += generateblock(
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

}

window.onload = () => displaydata()

