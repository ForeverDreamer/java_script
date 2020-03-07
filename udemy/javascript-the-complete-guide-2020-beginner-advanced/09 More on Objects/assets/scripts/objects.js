const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter='') => {
    if (movies.length === 0) {
        alert('No movie!');
        return;
    }
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.tilte.includes(filter));

    filteredMovies.forEach( movie => {
        const  movieEl = document.createElement('li');
        // if (!('info' in movie)) {
        //     return;
        // }
        if (movie.info === undefined) {
            return;
        }
        // key matters
        const { info, ...otherProps } = movie;
        console.log(otherProps);
        // const { title: movieTitle } = info;
        let { getFormattedTitle } = info;

        // getFormattedTitle = getFormattedTitle.bind(movie);
        // let text = getFormattedTitle() + '-';

        let text = movie.getFormattedTitle() + '-';

        // 可传递多个额外参数
        // let text = getFormattedTitle.call(movie, 1, 2, 3) + '-';

        // 只能传递一个额外参数
        // let text = getFormattedTitle.apply(movie, [1, 2, 3]) + '-';

        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    } )
};

// 箭头函数this代表window对象，function定义的函数this代表当前元素对象
const searchMovieHandler = () => {
    console.log(this);
    const filterTerm = document.getElementById('filter-title');
    renderMovies(filterTerm);
};

const addMovieHandler = () => {
    console.log(this);
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            // title,
            set title(val) {
                if (val.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title.toUpperCase();
            },
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        // 不要使用箭头函数
        // getFormattedTitle: function () {
        //     return this.info.title.toUpperCase();
        // }
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

const person = {name: 'Max', hobbies: ['Sports', 'Cooking']};
const anotherPerson = person;
// 推荐使用...
// 只拷贝一层数据
const person2 = { ...person };
// 拷贝两层数据
const person3 = { ...person, age: 29, hobbies: [...person.hobbies] };
person.age = 30;
person.hobbies.push('Coding');
console.log(person, anotherPerson);
console.log(person2, person3);

const person4 = Object.assign({}, person);
console.log(person4);

const members = {
    teamName: 'Blue Rockets',
    people: ['Max', 'Manuel'],
    getTeamMembers() {
        // 此时this绑定members对象
        this.people.forEach(p => {
            console.log(this);
            console.log(p + ' - ' + this.teamName);
        })
    }
    // getTeamMembers() {
    //     // 此时this绑定window对象
    //     this.people.forEach(function(p) {
    //         console.log(this);
    //         console.log(p + ' - ' + this.teamName);
    //     })
    // }
};

members.getTeamMembers();


