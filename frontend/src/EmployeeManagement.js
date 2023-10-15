import React from 'react';
import { Container, Row, Col, Navbar, Button, Card } from 'react-bootstrap';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  const footerStyle = {
    background: '#1F4172',
    color: 'black',
    padding: '20px 0',
  };

  const headingStyle = {
    background: 'url(/home.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
    padding: '200px 0',
  };

  const featureCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  const featureCardContentStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div>
      <Container fluid>
        <Navbar bg="light" variant="light" className="landing-nav">
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" href="/login">
              Login
            </Button>
            <Button variant="secondary" href="/signup">
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <div style={headingStyle}>
          <Row>
            <Col>
              <h1>Welcome to the Employee Management System</h1>
              <p>Manage your employees with ease.</p>
              <Button variant="primary" href="/Recruit">
                APPLY NOW
              </Button>
            </Col>
          </Row>
        </div>
        <Row
          className="landing-apply"
          style={{
            marginTop: '20px',
            backgroundColor: '#f4f4f4',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Col md={6} className="landing-apply-text">
            <h2>Applying for a Job</h2>
            <p>Explore our job opportunities and apply to join our team. Your future career starts here.</p>
          </Col>
          <Col md={6} className="landing-apply-button d-flex align-items-center">
            <Button variant="primary" href="/job-opportunities">
              View Job Opportunities
            </Button>
          </Col>
        </Row>

        {/* Feature Cards Section */}
      
        <Row style={{ marginTop: '40px', marginBottom: '40px'  }}>
        <h1>KEY FEATURES </h1>
          <Col md={4}>
            <Card style={featureCardStyle}>
              <Card.Body>
                <Card.Title>Employee Management</Card.Title>
                <Card.Text style={featureCardContentStyle}>
                  Manage your employees efficiently and effectively. Keep track of their profiles, performance, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={featureCardStyle}>
              <Card.Body>
                <Card.Title>Salary Management</Card.Title>
                <Card.Text style={featureCardContentStyle}>
                  Streamline your salary management process. Calculate, distribute, and keep records of employee salaries.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={featureCardStyle}>
              <Card.Body>
                <Card.Title>Project Management</Card.Title>
                <Card.Text style={featureCardContentStyle}>
                  Organize and track your projects efficiently. Assign tasks, set deadlines, and monitor progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <div style={footerStyle}>
        <Container>
          <Row>
            <Col>
              <h3>Contact Us</h3>
              <p>
                If you have any questions, feel free to contact us at{' '}
                <a href="mailto:contact@employee-system.com">info@enterprisepro.com</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EmployeeManagement;
