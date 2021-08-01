import * as moment from "moment";
import React, { Component } from "react";
import Devs from "../service/dev.service";
import { Redirect } from "react-router-dom";

export default class Dev extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeIdade = this.onChangeIdade.bind(this);
    this.onChangeSexo = this.onChangeSexo.bind(this);
    this.onChangeHobby = this.onChangeHobby.bind(this);
    this.onChangeDtNasc = this.onChangeDtNasc.bind(this);
    this.updateDev = this.updateDev.bind(this);

    this.state = {
      devAtual: {
        id: null,
        nome: "",
        sexo: "",
        idade: "",
        hobby: "",
        dataNascimento: "",
      },
      redirect: "",
    };
  }

  componentDidMount() {
    this.getDev(this.props.match.params.id);
  }

  onChangeNome(e) {
    const nome = e.target.value;

    this.setState(function (prevState) {
      return {
        devAtual: {
          ...prevState.devAtual,
          nome: nome,
        },
      };
    });
  }

  onChangeIdade(e) {
    const idade = e.target.value;
    this.setState(function (prevState) {
      return {
        devAtual: {
          ...prevState.devAtual,
          idade: idade,
        },
      };
    });
  }

  onChangeSexo(e) {
    const sexo = e.target.value;
    this.setState(function (prevState) {
      return {
        devAtual: {
          ...prevState.devAtual,
          sexo: sexo,
        },
      };
    });
  }

  onChangeHobby(e) {
    const hobby = e.target.value;
    this.setState(function (prevState) {
      return {
        devAtual: {
          ...prevState.devAtual,
          hobby: hobby,
        },
      };
    });
  }

  onChangeDtNasc(e) {
    const dtNasc = e.target.value;
    this.setState(function (prevState) {
      return {
        devAtual: {
          ...prevState.devAtual,
          dataNascimento: dtNasc,
        },
      };
    });
  }

  getDev(id) {
    Devs.get(id)
      .then((response) => {
        this.setState({
          devAtual: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateDev() {
    Devs.update(this.state.devAtual.id, this.state.devAtual)
      .then((response) => {
        if (response.data.message === "Dev atualizado com sucesso.") {
          this.setState({
            redirect: "/home",
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { devAtual } = this.state;
    const dtNasc = moment(devAtual.dataNascimento).format("YYYY-MM-DD");
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        {devAtual ? (
          <div className="edit-form">
            <h4>Dev</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  required
                  value={devAtual.nome}
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
                  value={devAtual.sexo}
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
                  value={devAtual.idade}
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
                  value={devAtual.hobby}
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
                  value={dtNasc}
                  onChange={this.onChangeDtNasc}
                  name="dtNasc"
                />
              </div>
            </form>
            <br />
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateDev}
            >
              Confirmar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Selecione um Dev...</p>
          </div>
        )}
      </div>
    );
  }
}
