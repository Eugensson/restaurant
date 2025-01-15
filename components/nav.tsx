import { Link } from "react-scroll";

const links = [
  { path: "home", name: "home", offset: -50 },
  { path: "menu", name: "menu", offset: -50 },
  { path: "about", name: "about", offset: -150 },
  { path: "contact", name: "contact", offset: 0 },
];

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
}

export const Nav = ({ containerStyles, linkStyles }: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className="flex items-center gap-x-12 text-white">
        {links.map(({ path, name, offset }) => (
          <li key={name}>
            <Link
              spy
              smooth
              to={path}
              offset={offset}
              duration={500}
              className={linkStyles}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
