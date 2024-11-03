import './Banner.css'
import PropTypes from 'prop-types';
const Banner = ({getReward}) => {
    return (
        <section className="banner w-11/12 mx-auto rounded-xl">
            <img className='mx-auto' src="https://i.ibb.co.com/bPDJL68/banner-main.png" alt="banner-image" />
            <h1 className='text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-sm'>Beyond Boundaries Beyond Limits</p>
            <span className='border-2 border-solid border-yellow-300 rounded-xl p-3'>
            <button onClick={getReward} className='font-bold bg-yellow-300 p-2 rounded-xl my-5'>Claim Free Credit</button>
            </span>
        </section>
    );
};
Banner.propTypes ={
    getReward: PropTypes.func.isRequired
}

export default Banner;