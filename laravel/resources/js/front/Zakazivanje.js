import React, { Component } from "react";
import ReactDOM from "react-dom";
import { url as u } from "./const.js";

export default class Zakazivanje extends Component {
    constructor(props) {
        super(props);
        this.state = { idTretmana: this.props.id, cena: this.props.cena };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler() {
        axios.post(u + "termini/zakazi", {
            rezervisano_na: this.state.rezervisano_na,
            cena: this.state.cena * this.state.broj_termina,
            broj_termina: this.state.broj_termina,
            tretman_id: this.state.idTretmana
        });
    }

    render() {
        let cenaTermina = this.state.cena * this.state.broj_termina;
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <div className="form-row bg-warning p-2 border">
                        <div className="col-3">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Unesite ime i prezime"
                                onChange={this.changeHandler}
                                name="rezervisano_na"
                            ></input>
                            Zakazivanje termina na ime
                        </div>
                        <div className="col-3">
                            <input
                                className="form-control"
                                type="number"
                                min={1}
                                placeholder="Koliko termina"
                                onChange={this.changeHandler}
                                name="broj_termina"
                            ></input>
                            Broj termina
                        </div>
                        <div className="col-3">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Ukupna cena"
                                disabled={true}
                                onChange={this.changeHandler}
                                value={cenaTermina || 0}
                                name="cena"
                            ></input>
                            Cena na osnovu unetih parametara
                        </div>

                        <div className="col">
                            <input
                                className="form-control"
                                type="submit"
                                value="Submit"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

if (document.getElementById("zakazivanje")) {
    ReactDOM.render(
        <Zakazivanje />,
        document.getElementById("zakazivanje")
    );
}
