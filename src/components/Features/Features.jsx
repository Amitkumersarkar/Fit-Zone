import PropTypes from 'prop-types';
import { FaCheck } from "react-icons/fa";
const Features = ({ feature }) => {

    return (
        <div className='font-semibold '>
            <p className='flex items-center gap-5 ml-10'><FaCheck />{feature}</p>
        </div>
    );
};

// declared propTypes
Features.propTypes = {
    feature: PropTypes.string
}
export default Features;