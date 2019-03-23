import React from 'react'

const CoasterCard = coaster => {

    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={coaster.imageUrl} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{coaster.title}</h5>
                    <p className="card-text">{coaster.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CoasterCard