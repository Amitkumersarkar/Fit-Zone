import PropTypes from 'prop-types';
import Features from '../Features/Features';
const PriceOption = ({ option }) => {
    // destructuring here
    const { name, price, features } = option;
    return (
        <div className='bg-cyan-900 flex flex-col rounded-xl p-4 '>
            <h2>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-2xl p-3'>{name}</h4>
            {/* <h4 className='text-2xl p-3'>{features}</h4> */}

            <div className='flex-grow'>
                {/* mapping on features */}
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='bg-blue-600 hover:bg-blue-800 p-2 rounded-xl mt-8 m-2 text-xl font-bold btn'>Buy Now</button>
        </div>
    );
};

// declared propTypes
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;