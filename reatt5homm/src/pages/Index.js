import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Index = () => {
  const basket = JSON.parse(localStorage.getItem('basket'))

  return (
    <div>
                  <div className="container">
            <div className="row">
            {
            basket.slice(0,4).map( x => {
              return(
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='img' variant="top" src={x.url} />
                  <Card.Body>
                    <Card.Title>{x.firstName}</Card.Title>
                    <Card.Text>{x.lastName}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
              )
            })
            
          }
            </div>
        </div>
    </div>
  )
}

export default Index