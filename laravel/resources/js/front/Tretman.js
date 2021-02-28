import React, { Component } from "react";
import ReactDOM from "react-dom";
import Termini from "./Termini";
import Zakazivanje from "./Zakazivanje";
export default class Tretman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tretman: this.props.tretman,
            forma: this.props.skupi,
            termini: this.props.skupi
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.skupi !== this.props.skupi) {
            this.setState({ forma: this.props.skupi, termini: this.props.skupi });
        }
    }

    timeFormat(time) {
        let datum = new Date(time);

        let dani = datum.getDate();
        let meseci = datum.getMonth() + 1;
        let godina = datum.getFullYear();

        return dani + "." + meseci + "." + godina;
    }

    zakazivanje() {
        if (this.state.forma) {
            return (
                <Zakazivanje
                    key={this.state.tretman.id * 10}
                    id={this.state.tretman.id}
                    cena={this.state.tretman.cena}
                />
            );
        }
    }

    prikazTermina() {
        if (this.state.termini) {
            return (
                <Termini key={this.state.tretman.id * 100} id={this.state.tretman.id} />
            );
        }
    }
    termini() {
        this.setState({ termini: !this.state.termini });
    }
    forma() {
        this.setState({ forma: !this.state.forma });
    }

    render() {
        return (
            <div className="row bg-warning p-4 border">
                <div className="col-3">{this.state.tretman.naziv}</div>
                <div className="col">
                    {this.timeFormat(this.state.tretman.datum)}
                </div>
                <div className="col">
                    {this.state.tretman.max_termina -
                        this.state.tretman.zakazani_termini}
                </div>
                <div className="col-1">{this.state.tretman.cena}</div>
                <div className="col">
                    <button
                        onClick={this.termini.bind(this)}
                        className="btn btn-block btn-primary "
                    >
                        Pregled termina
                    </button>

                    <button
                        onClick={this.forma.bind(this)}
                        className="btn btn-block btn-success"
                    >
                        Zakazi termin
                    </button>
                </div>
                {this.prikazTermina()}
                {this.zakazivanje()}
            </div>
        );
    }
}

if (document.getElementById("tretman")) {
    ReactDOM.render(<Tretman />, document.getElementById("tretman"));
}
