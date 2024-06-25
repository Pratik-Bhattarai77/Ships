import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import whe from '../assets/whe.png';

export const Nav = ({ minimal, authToken = null }) => {
    return (
        <nav>
            <div className="Logo-container">
                <img className="Logo" src={minimal ? logo : whe} alt="Logo" />
            </div>
            {!authToken && <button className='nav-button'>Log in</button>}
        </nav>
    );
};

Nav.propTypes = {
    minimal: PropTypes.bool.isRequired,
    authToken: PropTypes.bool,
};
