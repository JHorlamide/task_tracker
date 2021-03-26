import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleTask, showAdd }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <Button
        color={showAdd ? 'black' : 'green'}
        text={showAdd ? "Close" : "Add"}
        onClick={toggleTask}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
