const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchPotter = () => fetch(ENDPOINT).then(response => response.json())

export {fetchPotter}