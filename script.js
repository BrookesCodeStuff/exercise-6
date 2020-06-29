const ol = document.querySelector('ol');
const movies = [
  {
    name: 'The Princess Bride',
    year: '1987',
    director: 'Rob Reiner',
    picture:  'https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SY1000_CR0,0,676,1000_AL_.jpg'
  },
  {
    name: 'Jurassic Park',
    year: '1993',
    director: 'Steven Spielberg',
    picture: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg'
  },
  {
    name: 'Hackers',
    year: '1995',
    director: 'Iain Softley',
    picture: 'https://m.media-amazon.com/images/M/MV5BNmExMTkyYjItZTg0YS00NWYzLTkwMjItZWJiOWQ2M2ZkYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
  },
  {
    name: 'The Fifth Element',
    year: '1997',
    director: 'Luc Besson',
    picture: 'https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SY1000_CR0,0,696,1000_AL_.jpg'
  },
  {
    name: 'Pride & Prejudice',
    year: '2005',
    director: 'Joe Wright',
    picture: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
  }
];
const template = movies.map(movie => `
  <li>
    <p><span id="title">${movie.name}</span> <span id="year">(${movie.year})</span></p>
    <p id="director">Directed by: ${movie.director}</p>
    <img src="${movie.picture}" width=150>
  </li>
`);
ol.innerHTML = template.join('');