export default class Categorias{

    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        console.log("inscrever");
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        console.log("inscritos: ");
        console.log(this._inscritos);
        this._inscritos.forEach(func => func(this.categorias));
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }

}