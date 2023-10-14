import React from 'react';
import { Container, Row, Col, Navbar, Button, Card } from 'react-bootstrap';
import './EmployeeManagement.css';

const EmployeeManagementLanding = () => {
  return (
    <Container fluid>
      <Navbar bg="light" variant="light" className="landing-nav">
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary" href="/login">Login</Button>
          <Button variant="secondary" href="/signup">Sign Up</Button>
        </Navbar.Collapse>
      </Navbar>
      <Row className="landing-banner">
        <Col>
          <h1>Welcome to the Employee Management System</h1>
          <p>Manage your employees with ease.</p>
          <Button variant="primary" href="/apply">APPLY NOW</Button>
        </Col>
      </Row>
      <Row className="landing-apply" style={{ marginTop: '20px', backgroundColor: '#f4f4f4', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
        <Col md={6} className="landing-apply-text">
          <h2>Applying for a Job</h2>
          <p>Explore our job opportunities and apply to join our team. Your future career starts here.</p>
        </Col>
        <Col md={6} className="landing-apply-button d-flex align-items-center">
          <Button variant="primary" href="/job-opportunities">View Job Opportunities</Button>
        </Col>
      </Row>
      <h1>Key Features</h1>
      <Row className="landing-features">
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Attendance and Leave Management</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Salary Management</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Employee Management</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="landing-contact">
        <Col>
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to contact us at <a href="mailto:contact@employee-system.com">contact@employee-system.com</a></p>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeManagementLanding;
