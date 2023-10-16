import React from 'react';
import { Container, Row, Col, Navbar, Button, Card } from 'react-bootstrap';

const EmployeeManagement = () => {
  const headerBackground = {
    background: 'url(/home2.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
    padding: '200px 0',
    opacity: 0.9,
  };

  const featureCard = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    marginBottom: '20px', // Add margin to the bottom of each card
  };

  const featureCardContent = {
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  const footerStyle = {
    background: '#001C30',
    color: 'white',
    padding: '40px 0',
  };

  return (
    <div className="employee-management-page">
      <Container fluid>
        <Navbar bg="light" variant="light" className="employee-management-nav">
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" href="/login">
              Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <div style={headerBackground} className="employee-management-header">
          <Row>
            <Col>
              <h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>
              <p style={{ color: 'white'}}>Manage your employees with ease.</p>
              <Button variant="primary" href="/Recruit">
                APPLY NOW
              </Button>
            </Col>
          </Row>
        </div>

        <Row
          className="employee-management-apply"
          style={{
            marginTop: '20px',
            backgroundColor: '#f4f4f4',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Col md={6} className="employee-management-apply-text">
            <h2>Applying for a Job</h2>
            <p>Explore our job opportunities and apply to join our team. Your future career starts here.</p>
          </Col>
          <Col md={6} className="employee-management-apply-button d-flex align-items-center">
            <Button variant="primary" href="/job-opportunities">
              View Job Opportunities
            </Button>
          </Col>
        </Row>

        <Row style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Col md={12} className="text-center employee-management-features">
            <h1>KEY FEATURES</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} style={{ marginBottom: '20px' }}>
            <Card style={featureCard} className="employee-management-feature-card">
              <Card.Body>
                <Card.Title>EMPLOYEE MANAGEMENT</Card.Title>
                <Card.Text style={featureCardContent} className="employee-management-feature-content">
                  Manage your employees efficiently and effectively. Keep track of their profiles, performance, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} style={{ marginBottom: '20px' }}>
            <Card style={featureCard} className="employee-management-feature-card">
              <Card.Body>
                <Card.Title>CUSTOMER SUPPORT</Card.Title>
                <Card.Text style={featureCardContent} className="employee-management-feature-content">
                  We manage all customer inquiries and provide necessary information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} style={{ marginBottom: '20px' }}>
            <Card style={featureCard} className="employee-management-feature-card">
              <Card.Body>
                <Card.Title>SALARY MANAGEMENT</Card.Title>
                <Card.Text style={featureCardContent} className="employee-management-feature-content">
                  Streamline your salary management process. Calculate, distribute, and keep records of employee salaries.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} style={{ marginBottom: '20px' }}>
            <Card style={featureCard} className="employee-management-feature-card">
              <Card.Body>
                <Card.Title>PROJECT MANAGEMENT</Card.Title>
                <Card.Text style={featureCardContent} className="employee-management-feature-content">
                  Organize and track your projects efficiently. Assign tasks, set deadlines, and monitor progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} style={{ marginBottom: '20px' }}>
            <Card style={featureCard} className="employee-management-feature-card">
              <Card.Body>
                <Card.Title>SHUTTLE SERVICE</Card.Title>
                <Card.Text style={featureCardContent} className="employee-management-feature-content">
                  Our company is proud to provide a convenient and efficient shuttle service for our employees and clients. Our shuttle service is designed to make transportation to and from our facilities as seamless as possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} style={{ marginBottom: '20px' }}>
            <Card style={featureCard} className="employee-management-feature-card">
              <Card.Body>
                <Card.Title>RECRUITEMENT AND RESIGNING</Card.Title>
                <Card.Text style={featureCardContent} className="employee-management-feature-content">
                  Company employee recruitment and resigning employees can also be done through our system.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div style={footerStyle} className="employee-management-footer">
        <Container>
          <Row>
            <Col>
              <h3>Contact Us</h3>
              <p style={{ color: 'white'}}>
                If you have any questions, feel free to contact us at{' '}
                <a style={linkStyle} href="mailto:contact@employee-system.com">info@enterprisepro.com</a>
              </p>
              <p style={{ color: 'white'}}>SLIIT, MALABE</p>
              <p style={{ color: 'white'}}>Phone: 070 438 1222</p>
            </Col>
            <Col>
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a style={linkStyle} href="#">Facebook</a>
                </li>
                <li>
                  <a style={linkStyle} href="#">Twitter</a>
                </li>
                <li>
                  <a style={linkStyle} href="#">LinkedIn</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EmployeeManagement;