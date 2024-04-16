
import Nav from 'react-bootstrap/Nav';
function Navbars(){
    return(
        <>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
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