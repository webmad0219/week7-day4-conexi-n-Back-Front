import React, { Component } from 'react'
import CoastersService from '../service/coastersService'
import CoasterCard from './CoasterCard'
import CoastersForm from './CoastersForm'

class CoastersLists extends Component {

    constructor() {

        super()

        this.state = {
            coasters: []
        }

        this.services = new CoastersService()


    }


    getAllCoasters = () => {
        return this.services.getCoasters()
            .then(info => info)
    }


    componentDidMount() {
        this.getAllCoasters()
            .then(data => {
                console.log("service returned")
                this.setState({
                    coasters: data
                })
            })
    }


    render() {
        return (
            <div className="container">

                <h1>Montañas rusas</h1>

                <CoastersForm />

                <div className="row coaster-list">

                    {
                        this.state.coasters.map(coaster => <CoasterCard key={coaster._id} {...coaster} />)
                    }

                </div>
            </div>
        )
    }
}


export default CoastersLists