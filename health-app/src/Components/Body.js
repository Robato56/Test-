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
                    <Graph />
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