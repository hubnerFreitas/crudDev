import React, { Component } from "react";
import DevService from "../service/dev.service";
import { Redirect } from "react-router-dom";

export default class AddDev extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeIdade = this.onChangeIdade.bind(this);
    this.onChangeSexo = this.onChangeSexo.bind(this);
    this.onChangeHobby = this.onChangeHobby.bind(this);
    this.onChangeDtNasc = this.onChangeDtNasc.bind(this);
    this.saveDev = this.saveDev.bind(this);

    this.state = {
      id: null,
      nome: "",
      sexo: "",
      idade: "",
      hobby: "",
      dataNascimento: "",

      redirect: "",
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value,
    });
  }

  onChangeIdade(e) {
    this.setState({
      idade: e.target.value,
    });
  }

  onChangeSexo(e) {
    this.setState({
      sexo: e.target.value,
    });
  }

  onChangeHobby(e) {
    this.setState({
      hobby: e.target.value,
    });
  }

  onChangeDtNasc(e) {
    this.setState({
      dataNascimento: e.target.value,
    });
  }

  async saveDev() {
    var data = {
      nome: this.state.nome,
      idade: this.state.idade,
      sexo: this.state.sexo,
      hobby: this.state.hobby,
      dataNascimento: this.state.dataNascimento,
    };

    const response = await DevService.create(data);

    if (response.data.message === "Dev inserido com sucesso") {
      this.setState({
        redirect: "/home",
      });
    }
  }

  newDev() {
    this.setState({
      id: null,
      nome: "",
      sexo: "",
      idade: "",
      hobby: "",
      dtNasc: "",

      submitted: false,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Criado com sucesso</h4>
            <button className="btn btn-success" onClick={this.newDev}>
              Adicionar
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                required
                value={this.state.nome}
                onChange={this.onChangeNome}
                name="nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Sexo</label>
              <input
                type="text"
                className="form-control"
                id="sexo"
                required
                value={this.state.sexo}
                onChange={this.onChangeSexo}
                name="sexo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Idade</label>
              <input
                type="text"
                className="form-control"
                id="idade"
                required
                value={this.state.idade}
                onChange={this.onChangeIdade}
                name="idade"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Hooby</label>
              <input
                type="text"
                className="form-control"
                id="hobby"
                required
                value={this.state.hobby}
                onChange={this.onChangeHobby}
                name="hobby"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Data Nascimento</label>
              <input
                type="date"
                className="form-control"
                id="dtNasc"
                required
                value={this.state.dtNasc}
                onChange={this.onChangeDtNasc}
                name="dtNasc"
              />
            </div>
            <br />
            <button onClick={this.saveDev} className="btn btn-success">
              Confirmar
            </button>
          </div>
        )}
      </div>
    );
  }
}
