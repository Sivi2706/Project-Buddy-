// movie name, movie poster link, movie link, movie rating, fan favorite
const main_movie_list = [
    ["Oppenheimer - https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg - https://www.imdb.com/title/tt15398776/?ref_=hm_fanfav_tt_i_1_pd_fp1 - 8.6 - fan"],
    ["Barbie - https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800 - https://www.imdb.com/title/tt1517268/?ref_=hm_top_tt_i_2 - 7.4 - fan"],
    ["guardians of the Galaxy - https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg - https://www.imdb.com/title/tt6791350/?ref_=hm_top_tt_i_3 - 8.0 - fan"],
    ["The Bear - https://resizing.flixster.com/rPGaQu1t3stno8BnIlctPfHWBBY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvYTA4NWEwODctMzQ3Mi00MjkwLWIyYTYtMDI3NjUzODFmNGFkLmpwZw== - https://www.imdb.com/title/tt14452776/?ref_=hm_top_tt_i_4 - 8.5 - fan"],
    ["Meg2: The trench - https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg - https://www.imdb.com/title/tt9224104/?ref_=hm_top_tt_i_5 - 5.5 - fan"],
    ["Only Murders in the Building - https://m.media-amazon.com/images/M/MV5BMWVkNDMzNTctNTQ0Yy00YmFiLTliNTEtMDM1ZTZjMTk1ZmM0XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg - https://www.imdb.com/title/tt11691774/?ref_=hm_top_tt_i_6 - 8.1 - fan"],
    ["Teenage Mutant Ninja Turtles - https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg - https://www.imdb.com/title/tt8589698/?ref_=hm_top_tt_i_7 - 7.5 - fan"],
    ["The Lincoln Lawyer - https://m.media-amazon.com/images/M/MV5BYmE0YjNkZjUtZmM5YS00NTFlLWJjOWUtODFiNzkwM2Q3OWJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg - https://www.imdb.com/title/tt13833978/?ref_=hm_top_tt_i_8 - 7.7 - fan"],
    ["The Witcher - https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg - https://www.imdb.com/title/tt5180504/?ref_=hm_top_tt_i_9 - 8.0 - fan"],
    ["Suit - https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg - https://www.imdb.com/title/tt1632701/?ref_=hm_top_tt_i_10 - 8.4 - fan"],
    
    ["bomb - https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg - https://www.imdb.com/title/tt15398776/?ref_=hm_fanfav_tt_i_1_pd_fp1 - 8.6 - fan"],
    ["makeshift doll - https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800 - https://www.imdb.com/title/tt1517268/?ref_=hm_top_tt_i_2 - 7.4 - fan"],
    ["macncheese of the Galaxy - https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg - https://www.imdb.com/title/tt6791350/?ref_=hm_top_tt_i_3 - 8.0 - fan"],
    ["remember me - https://resizing.flixster.com/rPGaQu1t3stno8BnIlctPfHWBBY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvYTA4NWEwODctMzQ3Mi00MjkwLWIyYTYtMDI3NjUzODFmNGFkLmpwZw== - https://www.imdb.com/title/tt14452776/?ref_=hm_top_tt_i_4 - 8.5 - fan"],
    ["7eleleven: The trench - https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg - https://www.imdb.com/title/tt9224104/?ref_=hm_top_tt_i_5 - 5.5 - fan"],
    ["Only idiots in the Building - https://m.media-amazon.com/images/M/MV5BMWVkNDMzNTctNTQ0Yy00YmFiLTliNTEtMDM1ZTZjMTk1ZmM0XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg - https://www.imdb.com/title/tt11691774/?ref_=hm_top_tt_i_6 - 8.1 - fan"],
    ["Teenage nerds experiencing obesity - https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg - https://www.imdb.com/title/tt8589698/?ref_=hm_top_tt_i_7 - 7.5 - fan"],
    ["The finnest Lawyer - https://m.media-amazon.com/images/M/MV5BYmE0YjNkZjUtZmM5YS00NTFlLWJjOWUtODFiNzkwM2Q3OWJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg - https://www.imdb.com/title/tt13833978/?ref_=hm_top_tt_i_8 - 7.7 - fan"],
    ["The fish - https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg - https://www.imdb.com/title/tt5180504/?ref_=hm_top_tt_i_9 - 8.0 - fan"],
    ["servering bloodlines - https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg - https://www.imdb.com/title/tt1632701/?ref_=hm_top_tt_i_10 - 8.4 - fan"]
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
    top10_name.innerHTML = `${count+1}. ${parts[0]}`;


}


// fan watch
const fanwatch_container = document.querySelector(".fanwatch-movie-scroll");

for (let counting = 0; counting < main_movie_list.length; counting++) {
    const movie_list = main_movie_list[counting][0];
    const movie_pieces = movie_list.split(" - ");
    console.log(movie_pieces[4]);
    if (movie_pieces[4] === "fan") {
        fanwatch_container.insertAdjacentHTML("beforeend", 
        `<div class="fanwatch-movie-container">
        <div class="bg-image-fanwatch" id="bg-image-fanwatch${counting + 1}">
            <div class="watchlist-container">
                <button class="add-to">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill: rgb(255, 255, 255)"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </button>
            </div>
        </div>
        <div class="desc-container">
            <div class="rating-container">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffcd3c}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p id="fan-rating${counting + 1}">nill</p>
            </div>
            <div class="rate-it">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(151, 166, 231)"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
            </div>
        </div>
        <div class="desc-container-name">
            <p id="fan-name${counting + 1}">null</p>
        </div>
        <div class="transport-watchlist-container">
            <a class="transport-watchlist" href="#">+ Watchlist</a>
        </div>
        <div class="information">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);"><path d="M7 6v12l10-6z"></path></svg>
                Trailer
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
            </a>
        </div>
        </div>`);
        const bg_image_fanwatch = document.getElementById(`bg-image-fanwatch${counting + 1}`);
        const fan_rating = document.getElementById(`fan-rating${counting + 1}`);
        const fan_name = document.getElementById(`fan-name${counting + 1}`);

        let parts = main_movie_list[counting][0].split(" - ")

        console.log(`bg-image-fanwatch${counting + 1}`)
        console.log(parts[1])

        bg_image_fanwatch.style.backgroundImage = `url(${parts[1]})`;
        fan_rating.innerHTML = parts[3];
        fan_name.innerHTML = parts[0];
    }
}

function transitionright() {
    const scroll1_container = document.querySelector(".scroll-container");
    const scroll_position = scroll1_container.scrollLeft;
    const scroll_add = scroll1_container.clientWidth;

    if (scroll_position > scroll1_container.scrollWidth - (scroll1_container.scrollWidth * 0.2)) {
        scroll1_container.scrollLeft = 0;
    } else {
        scroll1_container.scrollLeft += scroll_add
    }
}

setInterval(function() {
    transitionright()
},10000);


// section 9

const near_showtime = document.querySelector(".nearshowtime");

for (let counting = 0; counting < main_movie_list.length; counting++) {
    const movie_list = main_movie_list[counting][0];
    const movie_pieces = movie_list.split(" - ");
    console.log(movie_pieces[4]);
    if (movie_pieces[4] === "fan") {
        near_showtime.insertAdjacentHTML("beforeend", 
        `<div class="fanwatch-movie-container">
        <div class="bg-image-fanwatch" id="bg-image-showtime${counting + 1}">
            <div class="watchlist-container">
                <button class="add-to">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill: rgb(255, 255, 255)"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </button>
            </div>
        </div>
        <div class="desc-container">
            <div class="rating-container">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffcd3c}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p id="showtime-rating${counting + 1}">nill</p>
            </div>
            <div class="rate-it">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(151, 166, 231)"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
            </div>
        </div>
        <div class="desc-container-name">
            <p id="showtime-name${counting + 1}">null</p>
        </div>
        <div class="transport-watchlist-container">
            <a class="transport-watchlist" href="#">+ Watchlist</a>
        </div>
        <div class="information">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);"><path d="M7 6v12l10-6z"></path></svg>
                Trailer
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
            </a>
        </div>
        </div>`);
        const bg_image_showtime = document.getElementById(`bg-image-showtime${counting + 1}`);
        const showtime_rating = document.getElementById(`showtime-rating${counting + 1}`);
        const showtime_name = document.getElementById(`showtime-name${counting + 1}`);

        let showtime_parts = main_movie_list[counting][0].split(" - ")

        console.log(`bg-image-showtime${counting + 1}`)
        console.log(showtime_parts[1])

        bg_image_showtime.style.backgroundImage = `url(${showtime_parts[1]})`;
        showtime_rating.innerHTML = showtime_parts[3];
        showtime_name.innerHTML = showtime_parts[0];
    }
}
