import pokemon from '../../pokemon.json';
const LENGTH = pokemon.length;

export default ((req, res) => {
    
    let index = parseInt(req.query.i);
    let lastIndex = index + 10;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let data;
    let hasNextPage = false

    if (lastIndex < LENGTH) {
        data = pokemon.slice(index, lastIndex);
        hasNextPage = true;

    } else {
        data = pokemon.slice(index);
    }

    res.end(JSON.stringify({
        data,
        hasNextPage
    }))

})