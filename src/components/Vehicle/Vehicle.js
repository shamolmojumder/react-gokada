import Button from 'react-bootstrap/Button'
import React from 'react';
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom';

const Vehicle = (props) => {
    // console.log(props);  
    const { id, name,url } = props.vehicle;
   const history =useHistory();
   const hireMeBtn=(id)=>{
    history.push(`book/${id}`)
   }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Most afordable
                    </Card.Text>
                    <Button onClick={()=>hireMeBtn(id)} variant="primary">Hire</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Vehicle;