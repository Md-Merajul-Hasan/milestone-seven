import PropTypes from "prop-types";
const Select = ({player}) => {
    const {name, image, player_type, price} =player;
    return (
        <div className="mb-3 border-2 border-gray-100 rounded-md p-3 flex justify-between">
            <div className="flex items-center gap-3">
            <img className="h-20 w-28 rounded-2xl" src={image} alt="" />
            <div>
            <p className="font-bold text-lg">{name}</p>
            <p className="text-gray-600">{player_type}</p>
            <p>Price:${price}</p>
            </div>
            </div>
            <button><img className="w-8 h-9" src="https://i.ibb.co.com/pbysqpF/remove.png" alt="" /></button>
        </div>
    );
};
Select.propTypes = {
    player: PropTypes.object.isRequired
}
export default Select;