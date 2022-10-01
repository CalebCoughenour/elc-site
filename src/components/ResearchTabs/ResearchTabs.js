import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import { TabsSection } from './ResearchTabs.elements.js';
import { ResearchCard } from '../../components';

const ResearchTabs = () => {
  return(
    <>
      <TabsSection>
        <Tab.Container defaultactivekey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Blockchain</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Bitcoin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Ethereum</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Avalanche</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Wallets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Smart Contracts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">Decentralized Finance</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {/* Will place reusable cards in here with information */}
                  <h1>blockchain</h1>
                  <p>
                  Nulla accumsan tellus est. Nunc id lectus et tortor fermentum viverra. Cras tincidunt, quam non cursus bibendum, quam felis varius nisl, id dapibus nisi tellus ut mauris. Etiam sit amet metus tempor, elementum lectus nec, malesuada lorem. Mauris finibus ante feugiat, luctus nulla a, laoreet eros. Aliquam in augue in ligula condimentum faucibus. Aliquam nisl augue, ullamcorper a erat ut, convallis rutrum risus. Aenean et commodo orci. Donec feugiat accumsan dictum. Praesent euismod justo erat, at auctor libero vestibulum interdum. Vivamus tincidunt turpis sit amet tellus sollicitudin iaculis. In sollicitudin eu dolor in euismod. Sed ultrices finibus finibus. Ut volutpat maximus pellentesque. Ut nulla felis, commodo et risus a, finibus sodales leo. Phasellus eu maximus nibh.

                  Donec egestas non ligula nec tempor. Mauris euismod tincidunt velit, ut hendrerit velit vehicula et. Curabitur in ligula lobortis, pharetra diam at, porta dui. Fusce id ante at est mattis ultricies eget ac justo. Duis id nulla vel velit consequat suscipit sed pulvinar ligula. Nunc euismod tincidunt arcu in gravida. Cras nec libero vel sapien dignissim tempor at quis massa.

                  Vivamus nec elementum nulla. Phasellus arcu velit, vehicula sed sollicitudin eget, condimentum id lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a laoreet ex. Vestibulum tincidunt odio et sapien sollicitudin dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin efficitur quis ante tempus volutpat. Morbi placerat placerat mauris, at vestibulum nisi auctor ac. Cras consectetur elit sed ante dignissim faucibus. Donec maximus pharetra nulla, sed pellentesque justo cursus vitae. Phasellus mollis, enim ac interdum ultricies, ipsum purus pretium ipsum, vel dictum ligula risus nec tellus. Vivamus eget rutrum dolor</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Container>
                    <ResearchCard
                      cardTitle="Random Title"
                      cardText="Vivamus nec elementum nulla. Phasellus arcu velit, vehicula sed sollicitudin eget, condimentum id lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a laoreet ex. Vestibulum tincidunt odio et sapien sollicitudin dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin efficitur quis ante tempus volutpat. Morbi placerat placerat mauris, at vestibulum nisi auctor ac. Cras consectetur elit sed ante dignissim faucibus. Donec maximus pharetra nulla, sed pellentesque justo cursus vitae. Phasellus mollis, enim ac interdum ultricies, ipsum purus pretium ipsum, vel dictum ligula risus nec tellus. Vivamus eget rutrum dolor"
                    />
                    <ResearchCard
                    cardTitle="Random Title"
                    cardText="Vivamus nec elementum nulla. Phasellus arcu velit, vehicula sed sollicitudin eget, condimentum id lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a laoreet ex. Vestibulum tincidunt odio et sapien sollicitudin dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin efficitur quis ante tempus volutpat. Morbi placerat placerat mauris, at vestibulum nisi auctor ac. Cras consectetur elit sed ante dignissim faucibus. Donec maximus pharetra nulla, sed pellentesque justo cursus vitae. Phasellus mollis, enim ac interdum ultricies, ipsum purus pretium ipsum, vel dictum ligula risus nec tellus. Vivamus eget rutrum dolor"
                  />
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </TabsSection>
    </>
  )
};

export default ResearchTabs;