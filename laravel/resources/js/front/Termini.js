import React, { Component } from "react";
import ReactDOM from "react-dom";
import { url as u } from "./const.js";

export default class Termini extends Component {
    constructor(props) {
        super(props);
        this.state = { termini: [], tretman_id: this.props.id };

        this.getTermini();
        this.viewTermini = this.viewTermini.bind(this);
        this.adminPanel = this.adminPanel.bind(this);
    }

    getTermini() {
        if (this.state.tretman_id)
            axios
                .get(u + "tretmani/prikazi_termine?tretman_id=" + this.state.tretman_id)
                .then(res => {
                    const termini = res.data.termini;
                    this.setState({ termini });
                });
        else
            axios.get(u + "termini/prikazi").then(res => {
                const termini = res.data.termini;
                this.setState({ termini });
            });
    }

    viewTermini() {
        let termini = this.state.termini;
        return termini.map(termin => {
            return (
                <div className="row border bg-warning">
                    <div className="col">{termin.rezervisano_na}</div>
                    <div className="col">{termin.broj_termina}</div>
                    <div className="col">{termin.cena}</div>
                    {this.adminPanel(termin.id)}
                </div>
            );
        });
    }

    clickHandler(id) {
        axios.delete(u + "termini/obrisi?id=" + id).then(res => {
            this.setState(state => {
                return { termini: state.termini.filter(k => k.id != id) };
            });
        });
    }

    adminPanel(id) {
        if (!this.state.tretman_id)
            return (
                <button
                    align="right"
                    onClick={() => this.clickHandler(id)}
                    className="btn btn-danger"
                >
                    Otkazi
                </button>
            );
    }

    viewTretmani() {
        if (!this.state.film_id)
            return (
                <a href={u} className="btn btn-block">
                    Vidi sve tretmane
                </a>
            );
    }

    render() {
        return (
            <div className="container">
                {this.viewTretmani()}
                Pregled termina
                <div className="row bg-info border">
                    <div className="col">
                        <b>Ime i prezime</b>
                    </div>
                    <div className="col">
                        <b>Broj termina</b>
                    </div>
                    <div className="col">
                        <b>Ukupna cena</b>
                    </div>
                </div>
                {this.viewTermini()}
            </div>
        );
    }
}

if (document.getElementById("termini")) {
    ReactDOM.render(<Termini />, document.getElementById("termini"));
}
