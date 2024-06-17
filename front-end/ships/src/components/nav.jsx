import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import whe from '../assets/whe.png';

export const Nav = ({ minimal }) => {
    return (
        <nav>
            <div className="Logo-container">
                <img className="Logo" src={minimal ? whe : logo} alt="Logo" />
            </div>
        </nav>
    );
};

Nav.propTypes = {
    minimal: PropTypes.bool.isRequired,
};
