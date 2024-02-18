import Container from "../components/Container";
import ProfileBtn from "../components/ProfileBtn";

const isLoggedIn = true;

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <Container>
        <div className="flex-1">
          <a className="text-xl">My Places</a>
        </div>
        <div>{isLoggedIn ? <ProfileBtn /> : <button className="btn btn-primary">Login</button>}</div>
      </Container>
    </div>
  );
};

export default Navbar;
