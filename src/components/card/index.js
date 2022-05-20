import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardFooterTitle, CardInfo, TrainingDate } from './style'

export function CardComponent({ image, alt, cardLogo, logo, title, type, aosCount, status, training_date }) {
   return (
      <Card data-aos='flip-left' data-aos-duration={aosCount}>
         <CardHeader>
            <img src={image} alt={alt} />
            {
               type === 'event_calendar' && <TrainingDate>{training_date}</TrainingDate>
            }
         </CardHeader>
         <CardBody>
            {
               type === 'event_calendar' ?
                  <CardInfo>
                     <h5>{status}</h5>
                     <p>YOU ARE CORDIALLY INVITED TO THE INTERACTIVE
                        TRAINING SESSION FOR VOLUNTEERS WITH THE DIRECTOR OF</p>
                  </CardInfo> :
                  <img src={cardLogo} alt={logo} />
            }

         </CardBody>
         <CardFooter>
            <CardFooterTitle>
               {
                  type === 'event_calendar' ? <p>training</p> : title
               }
            </CardFooterTitle>
         </CardFooter>
      </Card>
   )
}
