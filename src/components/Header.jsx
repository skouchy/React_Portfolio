import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <Link to ='/'>About Me</Link>
      <Link to ='/contact'>Contact Me</Link>
      <Link to ='/resume'>Resume</Link>
      <Link to ='/projects'>Past Projects</Link>
    </header>
  );
}
