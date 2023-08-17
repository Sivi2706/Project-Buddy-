// movie name, movie poster link, movie link, movie rating
const main_movie_list = [
    ["Oppenheimer - https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg - https://www.imdb.com/title/tt15398776/?ref_=hm_fanfav_tt_i_1_pd_fp1 - 8.6"],
    ["Barbie - https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800 - https://www.imdb.com/title/tt1517268/?ref_=hm_top_tt_i_2 - 7.4"],
    ["guardians of the Galaxy - https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg - https://www.imdb.com/title/tt6791350/?ref_=hm_top_tt_i_3 - 8.0"],
    ["The Bear - https://resizing.flixster.com/rPGaQu1t3stno8BnIlctPfHWBBY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvYTA4NWEwODctMzQ3Mi00MjkwLWIyYTYtMDI3NjUzODFmNGFkLmpwZw== - https://www.imdb.com/title/tt14452776/?ref_=hm_top_tt_i_4 - 8.5"],
    ["Meg2: The trench - https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg - https://www.imdb.com/title/tt9224104/?ref_=hm_top_tt_i_5 - 5.5"],
    ["Only Murders in the Building - https://m.media-amazon.com/images/M/MV5BMWVkNDMzNTctNTQ0Yy00YmFiLTliNTEtMDM1ZTZjMTk1ZmM0XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg - https://www.imdb.com/title/tt11691774/?ref_=hm_top_tt_i_6 - 8.1"],
    ["Teenage Mutant Ninja Turtles - https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg - https://www.imdb.com/title/tt8589698/?ref_=hm_top_tt_i_7 - 7.5"],
    ["The Lincoln Lawyer - https://m.media-amazon.com/images/M/MV5BYmE0YjNkZjUtZmM5YS00NTFlLWJjOWUtODFiNzkwM2Q3OWJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg - https://www.imdb.com/title/tt13833978/?ref_=hm_top_tt_i_8 - 7.7"],
    ["The Witcher - https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg - https://www.imdb.com/title/tt5180504/?ref_=hm_top_tt_i_9 - 8.0"],
    ["Suit - https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg - https://www.imdb.com/title/tt1632701/?ref_=hm_top_tt_i_10 - 8.4"]
]

let top10_movies_list = [];
let top10_movies_list_position = [];

for (let top10 = 0; top10 < 10; top10++){
    let highest_rating_movie = 0;
    let highest_rating_movie_name = "";
    console.log(highest_rating_movie_name)
    for (let i = 0; i < main_movie_list.length; i++) {
        let movie_list = main_movie_list[i][0];
        let movie_pieces = movie_list.split(' - ');
        console.log(i,top10_movies_list, movie_pieces[0], movie_pieces[3], highest_rating_movie)
        if (movie_pieces[3] >= highest_rating_movie) {
            if (top10_movies_list.find((element) => element === movie_pieces[0])){
            } else {
                highest_rating_movie = Number(movie_pieces[3]);
                highest_rating_movie_name = movie_pieces[0];
                highest_rating_movie_position = i;
            } 
        }
    }
    top10_movies_list.push(highest_rating_movie_name);
    top10_movies_list_position.push(highest_rating_movie_position);
}
console.log(top10_movies_list)
console.log(top10_movies_list_position)



for (let count = 0; count < top10_movies_list.length; count++) {
    const bg_image_top10watch = document.getElementById(`bg-image-top10watch${count + 1}`);
    const top10_rating = document.getElementById(`top10-rating${count + 1}`);
    const top10_name = document.getElementById(`top10-name${count + 1}`);

    let parts = main_movie_list[top10_movies_list_position[count]][0].split(" - ")

    console.log(`bg-image-top10watch${count + 1}`)
    console.log(parts[1])

    bg_image_top10watch.style.backgroundImage = `url(${parts[1]})`;
    top10_rating.innerHTML = parts[3];
    top10_name.innerHTML = parts[0];


}
