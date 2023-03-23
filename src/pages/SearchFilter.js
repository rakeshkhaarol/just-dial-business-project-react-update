import { faPhone, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Button, Card, Col, Row } from 'react-bootstrap'

export default function SearchFilter() {
  return (
    <main>
      <Row>
        <Col sm={9} >
          <Card className='m-2 cart_search'>
              <Row>
                  <Col sm={3}>
                    <Card.Img variant="top" className=' p-3 bus_cat_search_img ' src="https://content.jdmagicbox.com/comp/mumbai/q6/022p1232606128u2b9q6/catalogue/hotel-sagar-international-kalyan-west-thane-lodging-services-l0xhnjscdy-250.jpg?clr=#4d1a33?w=640&q=75 640w" />
                  </Col>
                  <Col sm={9}>
                    <Card.Body>
                      <Card.Title><FontAwesomeIcon icon={faThumbsUp} className='me-2'/>Hotel Sagar International</Card.Title>
                      <Badge bg="success"> 4.1 </Badge>
                      <FontAwesomeIcon icon={faStar} className='text-warning ps-2' />
                      <FontAwesomeIcon icon={faStar} className='text-warning' />
                      <FontAwesomeIcon icon={faStar} className='text-warning' />
                      <FontAwesomeIcon icon={faStar} className='text-secondary' />
                      <FontAwesomeIcon icon={faStar} className='text-secondary pe-3' />
                      <spam>44 Ratings</spam>
       
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button className="bg-success pe-4 ps-4 me-3 "  > <FontAwesomeIcon icon={faPhone} className='pe-2'/>1234567891</Button>
                      <Button className="bg-white text-primary pe-4 ps-4"  >Get Best Deal</Button>
                    </Card.Body>
                  </Col>
              </Row>
          </Card>
        </Col>
        <Col sm={3} ></Col>
      </Row>
    </main>
  )
}
