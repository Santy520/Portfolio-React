import { Link } from 'react-router-dom';
function Footer() {


    return (
        <nav>
        <footer className="left">
          <h1 className="h1">Contact Me</h1>
        </footer>
        <div className="right">
          <ul className="">

      <Link className="link"to="/#">(201)753-1305</Link>
      <Link className="link"to="/email">sspalacio20@gmail.com</Link>
      <Link className="link"to="https://github.com/Santy520">Github</Link>
      <Link className="link"to="https://linkedin.com/in/santiago-palacio-232487229">LinkedIn</Link>
      <Link className="link"to="https://www.instagram.com/santiago_palacio20/">Instagram</Link>

          </ul>
        </div>
      </nav>
    )
}

export default Footer

