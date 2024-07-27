import React from "react";
import Graph from "./Graph";
import Cards from "./Cards";
import UserTable from "./UserTable";
import Card from 'react-bootstrap/Card';


function Body() {
    return (
        <div style={{backgroundColor: "#EDEADE"}}>
            <br />
            <Card className= "bg-white" style={{borderRadius: "1.5%"}}>
                <Card.Body>
                    <h2 className="text-left">Diagnosis History</h2>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className="d-flex direction-row">
                            <Graph />
                            <div className="d-flex direction-column">
                            <Card style={{border: 'none'}}/>
                            <Card.Body style={{border: 'none'}} >
                                <div className="m-0 d-flex direction-row">
                                    <div className="my-auto mr-1" style={{borderRadius: "50%", backgroundColor: "#ff0080", height: "10px", width: "10px"}}></div>
                                    <p className="m-0">
                                        Systolic
                                    </p>
                                </div>
                                <h1>
                                    160
                                </h1>
                                <i class="bi bi-caret-up-fill"></i> Higher than average
                                <br />
                                <br />
                                <div className="m-0 d-flex direction-row">
                                    <div className="my-auto mr-1" style={{borderRadius: "50%", backgroundColor: "#8000ff", height: "10px", width: "10px"}}></div>
                                <p className="m-0">
                                    Diastolic
                                </p>
                                </div>
                                <h1>
                                    78
                                </h1>
                                <i class="bi bi-caret-down-fill"></i> Lower than average
                            </Card.Body>
                            <Card/>
                            </div>
                        </div>
                    </div>
                    <Cards />
                </Card.Body>
            </Card>
            <br />
            <Card className= "bg-white" style={{borderRadius: "1.5%"}}>
                <Card.Body>
                <h2 className="text-left">Diagnostic List</h2>
                <br />
                <br />
                <br />
                    <UserTable />
                </Card.Body>
            </Card>
            <br />
        </div>
    );
}   

export default Body;