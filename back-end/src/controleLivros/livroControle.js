const livros = [

    {'id':1,'Titulo':'Norman','numeroPagina':'300', 'CodigoISBN':'5845', 'Editora':'Silver'},
    {'id':2,'Titulo':'Lua Cheia','numeroPagina':'250', 'CodigoISBN':'472186s5', 'Editora':'Crepúscolo'},
    {'id':3,'Titulo':'Michael','numeroPagina':'248', 'CodigoISBN':'896565', 'Editora':'Phillips'},
];

getLivros = (req, res)=>{
    res.status(200).send(livros);
}

getOnLivros = (req,res)=>{
    let id = req.params.id ;
    const liv = livros.find((item)=> item.id === Number(id));

    if(liv){
        res.status(200).send(liv);
    }else{
        res.status(404).send("Nenhum livro encontrado");
    }
}

createLivros = (req, res) =>{
    const liv = req.body;

    if(Object.keys(liv).length>0){
        livros.push(liv);
        res.status(201).send(liv);
    }else{

        res.status(406).send('Esse livro não esta adicionado!');
    }
}

updateLivros = (req, res)=>{
    let id = req.params.id;
    let indice = finLivrosIndex(id);
    livros[indice]= req.body;
    res.status(201).send("Livros atualizado com sucesso!");
}
finLivrosIndex =(id) => {

    const indice = livros.findIndex((item)=>item.id === Number(id));
    return indice;
}

deleteLivros = (req, res) =>{
    let id = req.params.id;
    let i  =finLivrosIndex(id);
    livros.splice(i,1);
    res.status(200).send(`Esse livro de identificação ${id} foi deletado `);      
    }
    

module.exports = {getLivros,getOnLivros,createLivros,updateLivros,deleteLivros};