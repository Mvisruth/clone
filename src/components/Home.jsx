import React from 'react'
import { Row, Col,} from 'react-bootstrap'

function Home() {
  return (

    <>
        <Row className='align-items-center p-5'>
          <Col sm={6} >
           <img className='w-100 align-items-center' src="https://images.squarespace-cdn.com/content/v1/5f44e177664abf3d6f3bb005/4af163ce-9e41-48ba-b68c-5dc2208427da/Gallery+photo+website.jpg"  alt="" />
          </Col>
          <Col className='' sm={6}>

           <div className='m-3'>
              <h3 >Writer. Video maker. Flâneuse.</h3>
              <h1 className='text text-warning mt-3'>Searching for magic in between the cracks of ordinary objects.</h1>
           </div>
         
          </Col>
  
        </Row>
      <div className=''>
        <Row className='align-items-center p-5'>
          <Col  sm={6} >
            <div className='center'>
              <h1 className='text-center text' style={{color: '#307F97'}}>A Year in Tōkyō</h1>
              <h4 className=' text-center fw-bold'>An illustrated guide & memoir of 13 magical months spent exploring the city of ginkgo leaves. </h4>
              <button className=' button btn btn-dark p-4 mt-5 ms-5 d-flex   '>buy now</button>
            </div>
          </Col>
          <Col className='align-items-center' sm={6}>

           <div className=''>
            <img className='w-100 p-4 align-items-center' src="https://images.squarespace-cdn.com/content/v1/5f44e177664abf3d6f3bb005/1645869941377-TFL0IFKYHWZWTC3F4OIF/Tokyo+Guide+Product+Listing+FINAL+ACTUAL+FINAL.jpg?format=1500w" alt="" />
           </div>
         
          </Col>
  
        </Row>
      </div>
      <div className='text-center text-info '>
        <h1>For behind-the-scenes, updates on projects and bonus content, check out my Patreon ♡</h1>
      </div>
      <div>
        <img className='p-5 center' src="https://images.squarespace-cdn.com/content/v1/5f44e177664abf3d6f3bb005/1598524960515-HT6DDEGDXCTVZC1C8PKA/image-asset.jpeg" alt="" width={'100%'} />
     
      </div>
      <div className='centerx'>
      <h1 className='text-center fw-bold'>An Ode to Empty Notebooks</h1>
        <p  className='text-center'>In between the bindings of every empty notebook lives a sweet snippet of comfort. Paused, poised and balancing, in the stoic arms of plastic and cardboard is, like the bottomless, unexplored ocean, or the great expanses of enormous outer space, a realm of possibilities. </p>
      </div>
      <div>
      <Row className='align-items-center p-5'>
          <Col  sm={6} >
            <div className='center'>
             <img className='mb-5' src="https://images.squarespace-cdn.com/content/v1/5f44e177664abf3d6f3bb005/1598520494281-K0XXFVCPCYNPL83E9AOY/2018-11-26+07.50.52+1+-+web.png" alt="" width={'100%'} />
            </div>
          </Col>
          <Col  sm={6}>
           <div className='center'>
            <img className='mt-5' src="https://images.squarespace-cdn.com/content/v1/5f44e177664abf3d6f3bb005/1598520442854-3YRB0Q73OQPSA17QXUV0/2019-12-30+09.18.29+1+web.jpg" alt="" width={'100%'} />
           </div>
          </Col>
  
        </Row>
      </div>
      <div className='centerx'>
      <h3 className='text-center fw-bold'>‘When trouble strikes, head to the library. You will either be able to solve the problem, or simply have something to read as the world crashes down around you.’</h3>
      <h4 className='text-center  mt-4'>Lemony Snicket</h4>
      </div>

      <div className='mt-5'>
        <h1  className='fw-bold text-center mt-5'>Follow</h1>
        <Row  className='mt-5 g-5'>
          <Col sm={12} lg={3} md={4} >
            <img src="https://i.pinimg.com/736x/05/ae/cf/05aecfb428aa7881b82defa5ec913da5.jpg" alt="" width={'100%'} height={'350px'} />
          </Col>
          <Col sm={12} lg={3} md={4}>
            <img  src="https://hardrockmedia.org/wp-content/uploads/2023/01/hardrockmedia.org-2-3.png" alt="" width={'100%'} height={'350px'}/>
          </Col >
          <Col sm={12} lg={3} md={4}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUYmsPHw_0lh0rx56yPgeCaUVlJ1JvP3tBUzdRo7hUD2Kf-g0S60Z0jlieiAXHGP3094&usqp=CAU" alt="" width={'100%'} height={'350px'} />
          </Col>
          <Col sm={12} lg={3} md={4}>
          <img src="https://i.pinimg.com/236x/76/19/2d/76192def3cd52f2bf4b1add130a7c2d1.jpg" alt="" width={'100%'} height={'350px'} />
          </Col>

        </Row>
      </div>
      

      
        
        </>
      
  )
}

export default Home