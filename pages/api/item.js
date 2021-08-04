import pokemon from '../../pokemon.json';

export default ((req,res)=>{

    let sid = req.query.id;
    let findResult = pokemon.find(({id}) => sid==id)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({...findResult}))

})