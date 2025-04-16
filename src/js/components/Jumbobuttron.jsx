import React from "react";

//create your first component
export const Jumbobuttron = () => {
    return (
        <div className="container  mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="py-5 px-3 bg-body-secondary">
                        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                        <p>
                            Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking
                        </p>
                        <a href="#" className="btn btn-primary">
                            Call to action!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

