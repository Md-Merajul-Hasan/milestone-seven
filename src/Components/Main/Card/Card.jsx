import PropTypes from 'prop-types';
const Card = ({player, selectedPlayer}) => {
    const {name,image, country, player_type, batting_style, bowling_style, rating, price} = player;
    return (
        <div className='border-2 border-gary-100 rounded-xl p-4 text-gray-600'>
             <img className='w-96 h-80 rounded-xl' src={image} alt="" />
             <div className='flex gap-3 items-center my-3'>
                <img className='w-5 h-5' src="https://i.ibb.co.com/S01cSgZ/user.png" alt="" />
                <p className='text-black font-bold text-xl'>{name}</p>
             </div>
             <div className='flex justify-between items-center border-b-2 border-gray-200 pb-3'>
             <div className='flex gap-3 items-center'>
                <img className='w-5 h-5 ' src="https://i.ibb.co.com/jWhkKHJ/flag.png" alt="" />
                <p>{country}</p>
             </div>
             <button className='border-2 border-gray-100 rounded-md p-1'>{player_type}</button>
             </div>
             <div className='flex justify-between'><p className='text-black font-bold'>Rating</p> <p>{rating}</p></div>
             <div className='flex justify-between'>
                <p>{batting_style}</p>
                <p>{bowling_style}</p>
             </div>
             <div className='flex justify-between'>
                <p>Price:${price}</p>
                <button onClick={()=>{
                  selectedPlayer(player);
                }} className='border-2 border-gary-100 p-1 rounded-md text-black font-bold'>Choose Player</button>
             </div>
        </div>
    );
};
Card.propTypes ={
    player: PropTypes.object.isRequired,
    playerChosen: PropTypes.func.isRequired,
    selectedPlayer: PropTypes.func.isRequired
}
export default Card;