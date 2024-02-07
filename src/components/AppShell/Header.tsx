const Header = () => {
  return (
    <div className="flex flex-between width-full margin-large">
      <div>RPG APP</div>
      <ul className="flex flex-between">
        <li className="list-style-none margin-small-h">
          <a href="/" className="decoration-none">
            Home
          </a>
        </li>
        <li className="list-style-none margin-small-h">
          <a href="/character/maker" className="decoration-none">
            Characters
          </a>
        </li>
        <li className="list-style-none margin-small-h">
          <a href="/location/maker" className="decoration-none">
            Locations
          </a>
        </li>
        <li className="list-style-none margin-small-h">
          <a href="/item/maker" className="decoration-none">
            Items
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
