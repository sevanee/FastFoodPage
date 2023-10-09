import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { SwiperSlide } from 'swiper/react'

const TeamCard = ({teamdata}) => {
  return (
    <div >
          <SwiperSlide> 
            <Col className='colBox1' sm={10} md={4} style={{"width":"100%"}} >
           <Card className='burgerCard1'
               >
                <div className="imgCard1">
                <Card.Img  height={300}   variant="top"  src={teamdata.team_image} className='cardImg1' />
                <div className=' order rounded-5 '><div className="logos"><i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-pinterest-p"></i> <i className="fa-brands fa-youtube"></i> </div></div>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>{teamdata.team_name}</Card.Title>
                  <p className='text-center grey'>{teamdata.team_pos}</p>       
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
        
    </div>
  )
}

export default TeamCard