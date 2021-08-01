import React, { Component } from "react";
import Dev from "../service/dev.service";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.TodosDevs = this.TodosDevs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.RemoveDev = this.RemoveDev.bind(this);

    this.state = {
      devs: [],
      devAtual: null,
      indexAtual: -1,
    };
  }

  componentDidMount() {
    this.TodosDevs();
  }

  TodosDevs() {
    Dev.getAll()
      .then((response) => {
        this.setState({
          devs: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.TodosDevs();
    this.setState({
      devAtual: null,
      indexAtual: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      devAtual: tutorial,
      indexAtual: index,
    });
  }

  RemoveDev() {
    const { devAtual } = this.state;
    if (!devAtual) {
      return alert("Selecione um Dev para deletar");
    }
    Dev.delete(devAtual.id)
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { devs, devAtual, indexAtual } = this.state;
    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Lista de Devs</h4>

          <ul className="list-group">
            {devs &&
              devs.map((dev, index) => (
                <li
                  className={
                    "list-group-item " + (index === indexAtual ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(dev, index)}
                  key={index}
                >
                  {dev.nome}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.RemoveDev}
          >
            Remover
          </button>
        </div>
        <div className="col-md-6">
          {devAtual ? (
            <div>
              <h4>Dev</h4>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {devAtual.nome}
              </div>
              <div>
                <label>
                  <strong>Sexo:</strong>
                </label>{" "}
                {devAtual.sexo}
              </div>
              <div>
                <label>
                  <strong>Idade:</strong>
                </label>{" "}
                {devAtual.idade}
              </div>
              <div>
                <label>
                  <strong>Hobby:</strong>
                </label>{" "}
                {devAtual.hobby}
              </div>
              <div>
                <label>
                  <strong>Dt. Nasc:</strong>
                </label>{" "}
                {dateFormat(devAtual.dataNascimento, "d/mm/yyyy")}
              </div>

              <button className="btn btn-warning">
                <Link
                  to={"/devs/" + devAtual.id}
                  className="badge badge-warning"
                >
                  Editar
                </Link>
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Selecione um Dev...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
