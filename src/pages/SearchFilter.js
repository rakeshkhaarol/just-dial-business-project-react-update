import { faPhone, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SearchFilter() {
  return (
    <main>
      <h1 className='text-center pt-2'>Search Page</h1>
      <Row>
        <Col sm={9} >
          <Link style={{ textDecoration: 'none', color: 'black' }}>
            <Card className='m-2  pt-3 ps-3 mt-3'>
                <Row>
                    <Col sm={3}>
                      <div className='bus_cat_search_img_div '>
                        <Card.Img variant="top" className=' p-2 bus_cat_search_img ' src="https://content.jdmagicbox.com/comp/mumbai/q6/022p1232606128u2b9q6/catalogue/hotel-sagar-international-kalyan-west-thane-lodging-services-l0xhnjscdy-250.jpg?clr=#4d1a33?w=640&q=75 640w" />
                      </div>
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
                        <a href="tel:" className="bg-success pe-4 ps-4 me-3 pt-1 r_btn pb-1 text-white " onClick={(event)=>{event.stopPropagation()}}  > <FontAwesomeIcon icon={faPhone} className='pe-2'/>1234567891</a>
                        <spam className="r_spam text-primary pe-4 ps-4 pt-1 pb-1 r_btn  " >Get Best Deal</spam>
                      </Card.Body>
                    </Col>
                </Row>
            </Card>
          </Link>
        </Col>
        <Col sm={3} ></Col>
      </Row>
    </main>
  )
}
