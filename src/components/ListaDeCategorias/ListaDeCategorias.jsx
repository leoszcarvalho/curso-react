import React, { Component } from 'react';

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]}
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        console.log(this._novasCategorias);
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

    _handleEventoInput(e){
        console.log(e);
        if(e.key == "Enter"){
            let valorCategoria = e.target.value;
            console.log(valorCategoria);
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() { 
        return (
            <section>
                <ul>
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index}>{categoria}</li>;
                    })}
                </ul>
                <input type="text" placeholder="Adicionar Categoria" id='categoriaCampo' onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
        );
    }
}
 
export default ListaDeCategorias;