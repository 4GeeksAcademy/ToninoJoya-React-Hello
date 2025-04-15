import React from "react";


//create your first component
export const Cards = () => {

    const infoCards = [
        {
            image: "https://placehold.co/500x325",
            title: "Uno",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content. o build on the card title and make"
        },
        {
            image: "https://placehold.co/500x325",
            title: "Dos",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content. o build on the card title and make"
        },
        {
            image: "https://placehold.co/500x325",
            title: "Tres",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content. o build on the card title and make"
        },
        {
            image: "https://placehold.co/500x325",
            title: "Tres",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content. o build on the card title and make"
        },
    ]

    return (
        <div className="container">
            <div className="row">
                {
                    infoCards.map((elem, index) => {
                        return (
                        <div 
                            key={index} 
                            className="card col-12 col-sm-6 col-md-3 mt-3 border border-0">
                            <img src={elem.image} className="card-img-top rounded-0" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
};



