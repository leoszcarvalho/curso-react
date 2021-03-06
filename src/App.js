import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }



  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.criarNota.bind(this.notas)}  />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias} adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />
          <ListaDeNotas notas={this.notas} apagarNota={this.notas.apagarNota.bind(this.notas)} />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
