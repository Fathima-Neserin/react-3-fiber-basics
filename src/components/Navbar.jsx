import { Link } from "react-router-dom";

const Navbar = () => (
    <nav style={{ padding: '10px', background: '#ccc', color: "black", marginBottom: '20px' }}>
      <Link to="/" style={{ margin: '0 10px' , textDecoration: "none", color: "black", fontSize: "20px"}}>
        Home
      </Link>
      <Link to="/cubes" style={{ margin: '0 10px', textDecoration: "none" , color: "black", fontSize: "20px"}}>
        Cubes
      </Link>
      <Link to="/animated-cube" style={{ margin: '0 10px', textDecoration: "none" , color: "black",  fontSize: "20px"}}>
        Animated Cube
      </Link>
      <Link to="/sphere" style={{ margin: '0 10px', textDecoration: "none" , color: "black", fontSize: "20px"}}>
        Sphere
      </Link>
      <Link to="/torus" style={{ margin: '0 10px', textDecoration: "none" , color: "black", fontSize: "20px"}}>
        Torus
      </Link>
      <Link to="/torus-knot" style={{ margin: '0 10px', textDecoration: "none" , color: "black", fontSize: "20px"}}>
        Torus Knot
      </Link>
    </nav>
  );
  
  export default Navbar