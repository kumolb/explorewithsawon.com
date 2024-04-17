
import Nav from 'react-bootstrap/Nav';
import {Button} from "react-bootstrap";
function Navbars(){
    return(
        <>
        {/* <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <Nav.Link href="/home"><Button>LInk1</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1"><Button>LInk2</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2"><Button>LInk3</Button></Nav.Link>
            </Nav.Item>
        </Nav> */}
        <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

            {/* <h1>Sawon</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Book Us</a></li>
                </ul>
            </nav> */}
        </>
    )
};
export default Navbars;