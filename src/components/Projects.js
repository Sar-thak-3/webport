import React from 'react'
import './Projectscs.css'

const Projects = () => {
    return (
        <div id='projects' style={{height: "50vh"}}>
            <div className="container">
                <div className="card">
                    <h3 className="title">Card 1</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <h3 className="title">Card 2</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <h3 className="title">Card 3</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <h3 className="title">Card 4</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects