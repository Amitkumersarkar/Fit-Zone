import PropTypes from 'prop-types';

const Link = ({ route }) => {

    return (
        <li className="mr-4 hover:border-b-1">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

// declared propTypes
Link.propTypes = {
    route: PropTypes.object
}
export default Link;