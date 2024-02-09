import { Link } from "../../types/types";

interface HeaderProps {
  brand: string;
  links: Link[];
}

const Header = ({ brand, links }: HeaderProps) => {
  return (
    <div className="flex flex-between width-full margin-large">
      <a href="/" className="decoration-none">
        <div>{brand}</div>
      </a>

      <ul className="flex flex-between">
        {links.map((link) => (
          <li key={link.href} className="list-style-none margin-small-h">
            <a href={link.href} className="decoration-none">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
