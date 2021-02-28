import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tretman from "./Tretman";
import { url as u } from "./const.js";

export default class Tretmani extends Component {
    constructor(props) {
        super(props);
        this.state = { tretmani: [], skupi: false };

        this.getTretmani();
        this.skupi = this.skupi.bind(this);
    }

    getTretmani() {
        axios.get(u + "tretmani/prikazi").then(res => {
            const tretmani = res.data.tretmani;
            this.setState({ tretmani });
        });
    }

    viewTretmani() {
        let tretmani = this.state.tretmani;
        return tretmani.map(tretman => {
            return <Tretman key={tretman.id} skupi={this.state.skupi} tretman={tretman} />;
        });
    }

    skupi() {
        this.setState({ skupi: !this.state.skupi });
        console.log(this.state.skupi);
    }

    render() {
        return (
            <div className="container">
                <div className="row bg-danger p-4 ">
                    <div className="col-3">
                        <b>Naziv tretmana</b>
                    </div>
                    <div className="col">
                        <b>Datum</b>
                    </div>
                    <div className="col">
                        <b>Broj preostalih termina</b>
                    </div>
                    <div className="col-1">
                        <b>Cena po terminu</b>
                    </div>
                    <div className="col">
                        <button className="btn">
                        <a href={u + "termini"} className="btn btn-block">
                            Prikaz termina
                        </a>
                        </button>
                    </div>
                </div>

                {this.viewTretmani()}
            </div>
        );
    }
}

if (document.getElementById("tretmani")) {
    ReactDOM.render(<Tretmani />, document.getElementById("tretmani"));
}
