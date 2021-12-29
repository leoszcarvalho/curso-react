import React, { Component } from 'react';

class ListaDeCategorias extends Component {

    _handleEventoInput(e){
        console.log(e);
        if(e.key == "Enter"){
            let valorCategoria = e.target.value;
            console.log(valorCategoria);
            this.props.criarCategoria(valorCategoria);
        }
    }

    render() { 
        return (
            <section>
                <ul>
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index}>{categoria}</li>;
                    })}
                </ul>
                <input type="text" placeholder="Adicionar Categoria" id='categoriaCampo' onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
        );
    }
}
 
export default ListaDeCategorias;