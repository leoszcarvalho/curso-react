import React, { Component } from "react"

class FormularioCadastro extends Component {
    
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }
    
    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        console.log("uma nova nota foi criada " + this.titulo + " " + this.texto);
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (

            <form onSubmit={this._criarNota.bind(this)} >
                <input type="text" placeholder="Título" onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea rows={15}  placeholder="Escreva sua nota" onChange={this._handleMudancaTexto.bind(this)} />
                <button>Criar Nota</button>
            </form>

        );
    }
}

export default FormularioCadastro;