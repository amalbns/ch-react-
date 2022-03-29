import React from 'react';
import './App.css';
import{Nav,Navbar,Container,Carousel,Button,Form,Card}from "react-bootstrap"


function App() {
  return (
    <div className="App">
      <Navbar bg="blue" variant="blue">
    <Container>
    <Navbar.Brand href="#home"><h1 style={{color:'white'}}>DentaCare</h1></Navbar.Brand>
    <Nav className="nav">
      <Nav.Link href="#home"><h4 style={{color:'white'}} >Home</h4></Nav.Link>
      <Nav.Link href="#features"><h4 style={{color:'white'}} >Product</h4></Nav.Link>
      <Nav.Link href="#pricing"><h4 style={{color:'white'}} >Learn More</h4></Nav.Link>
    
    </Nav>
    </Container>
  </Navbar>
      <div className='title'>
  
      </div>
      <div className='cards'>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/joking-with-my-dentist-picture-id1318578666?b=1&k=20&m=1318578666&s=170667a&w=0&h=HbSkf10nfs-OPrr7J85gYMspe5lugyF89YkTdYZ1if0="
      alt="First slide"
    />
    <Carousel.Caption>
    <div className='cas1'>
      <h2>Dental Care</h2>
      <p>Our mission is to help you and your patients achieve success every day</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className='cas2'>
      <h1>Free Cosultation</h1>
      <p>Our goal is to help you and your patients succeed, in and out of the office</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/thank-you-doc-i-love-them-picture-id1296443450?k=20&m=1296443450&s=612x612&w=0&h=wMnScszz1NPGgaQ0DMpB5Lz_ptDkNi7SK_0mSrtsJ4U="
      alt="Third slide"
    />

    <Carousel.Caption>
      <div className='cas3'>
      <h3>PATIENT EDUCATION</h3>
      <p>This database offers documents, videos and other multimedia materials to help you educate your patients.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      
  
      </div>
      <div className='list'>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>NEW CE COURSE AVAILABLE</Card.Title>
    
    <Card.Text>
    This course presents foundational facts and concepts regarding bony 
    structures of the head and neck and their related openings, features
    and muscle attachments..
    </Card.Text>
    <Card.Link href="#">Take Corse Now</Card.Link>
    <Card.Link href="#">Learn More</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>ORDER PRODUCTS ON PROSHOP</Card.Title>
    
    <Card.Text>
    Learn how-to create your professional account and get access to hundreds of products with professional exclusive pricing.
    </Card.Text>
    <Card.Link href="#">Buy Now </Card.Link>
    <Card.Link href="#">Learn More</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>WHITENING EMULSIONS</Card.Title>
    
    <Card.Text>
    You've never seen teeth whitening like this! The all-new Crest Whitening Emulsions is a breakthrough formula..
    </Card.Text>
    <Card.Link href="#">Buy Now</Card.Link>
    <Card.Link href="#">Learn More </Card.Link>
  </Card.Body>
</Card>
</div>
<br></br>
<div className='vid'>
<Card body><h2>Products</h2></Card>
</div>
<div className='product'>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto,f_jpg,fl_attachment:genius-x-electric-toothbrush%20jpg/dentalcare/%2F-%2Fmedia%2Fdentalcareus%2Fproducts%2Felectric-toothbrush%2Fimages%2Fgenius-x-electric-toothbrush%20jpg.jpg%3Fh%3D270%26la%3Den-us%26w%3D150%26v%3D1-202105111334?h=270&la=en-US&w=150" />
  <Card.Body>
    <Card.Title>ELECTRIC TOOTHBRUSHE</Card.Title>
    <Card.Text>
    The Oral-B Genius X Professional Electric toothbrush provides your patients with an intelligent system for better brushing
    </Card.Text>
    <Button variant="primary">Buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto,f_jpg,fl_attachment:Cross-Action-Compact%20jpg/dentalcare/%2F-%2Fmedia%2Fdentalcareus%2Fproducts%2Fproducts-landing-pages%2Fcross-action-compact%20jpg.jpg%3Fh%3D270%26la%3Den-us%26w%3D150%26v%3D1-202009231414?h=270&la=en-US&w=150" />
  <Card.Body>
    <Card.Title>MANUAL TOOTHBRUSH</Card.Title>
    <Card.Text>
    Oral-B CrossAction™Compact toothbrush unites Oral-B’s Best cleaning technology and a professionally inspired compact head.
    </Card.Text>
    <Button variant="primary">Buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto,f_jpg,fl_attachment:Densify%20Paste%20jpg/dentalcare/%2F-%2Fmedia%2Fdentalcareus%2Fproducts%2Fproducts-landing-pages%2Fdensify%20paste%20jpg.jpg%3Fh%3D200%26la%3Den-us%26w%3D200%26v%3D1-202109211709?h=200&la=en-US&w=200" />
  <Card.Body>
    <Card.Title>TOOTHPASTE</Card.Title>
    <Card.Text>
    New Crest Densify: Powerful, Protective Remineralization to protect against the effects of enamel erosion.
    </Card.Text>
    <Button variant="primary">Buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto,f_jpg,fl_attachment:crest-whitening-emulsions_REV%20jpg/dentalcare/%2F-%2Fmedia%2Fdentalcareus%2Fproducts%2Fcrest-whitening-emulsions%2Fcrest-whitening-emulsions_rev%20jpg.jpg%3Fh%3D300%26la%3Den-us%26w%3D300%26v%3D1-202012041758?h=300&la=en-US&w=300" />
  <Card.Body>
    <Card.Title> WHITENING</Card.Title>
    <Card.Text>
    The all-new Crest Whitening Emulsions is a breakthrough formula featuring a thin layer of active peroxide droplets suspended
    in a hydrating base to whiten.
    </Card.Text>
    <Button variant="primary">Buy</Button>
  </Card.Body>
</Card>
</div>
        <div className='forms'>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>




      </div>

    
    </div>
  );
}

export default App;
