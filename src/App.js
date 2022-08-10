import React, { Component } from 'react';
import './App.css'
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Footer from './componentes/Footer';


class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount(){
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ea4a2f8071ce425faaa19426834804de&pageSize=10&language=es'
  
  fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias => {
      this.setState({
        noticias: noticias.articles
      })
    })
  }

  render (){
    return(
      <div>
        <Header />
        <div className='container'>
          <Noticias 
            noticias={this.state.noticias}
          />
        </div>
        <Footer />

      </div>
    )
  }
}

export default App;
