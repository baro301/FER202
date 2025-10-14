import  Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({author, email, linkGithub}) {
  return (
    <footer>
      <p>Author: {author}</p>
      <p>Created by: {email} </p>
      <p>&copy; {new Date().getFullYear()} BaoPG. All rights reserved </p>
      <Button variant="link" href="https://github.com/baro301/FER202" >My Link Github: {linkGithub}</Button>
    </footer>
  )
}
export default MyFooter;
