import React from 'react'
import './Projectscs.css'

const Projects = () => {
    return (
        <div id='projects' style={{height: "50vh"}}>
            <div className="container">
                <div className="card">
                    <a href="https://github.com/Sar-thak-3/Healdata"><h3 className="title">Healdata</h3></a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <a href="https://github.com/Sar-thak-3/webport"><h3 className="title">Webport</h3></a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <a href="https://github.com/Sar-thak-3/Jobsapi-Project"><h3 className="title">JobsApi</h3></a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                        <p className='project-content'>Jobsapi project</p>
                    </div>
                </div>
                <div className="card">
                    <a href=""><h3 className="title">Card 4</h3></a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                        <p></p>
                    </div>
                </div>
                <div className="card">
                    <a href=""><h3 className="title">Emoji Prediction</h3></a>
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