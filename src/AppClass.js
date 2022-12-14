// Este arquivo não tem nada a ver com o projeto criado. É apenas um exemplo que mostra a forma antiga de criar componentes e ReactJS
import React, {Component} from 'react';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //TODO: 
  }
  render(){
    return <div>AppClass</div>
  }
}

//O React era baseado em componentes de classes, mas isso era muito verboso. Hoje usamos componentes funcionais em 99% das vezes