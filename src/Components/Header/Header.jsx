import PropTypes from "prop-types";
const Header = ({balance}) => {
        return (
        <header className="flex items-center justify-between py-4 w-11/12 mx-auto">
            <div><img src="https://i.ibb.co.com/74NJQjs/logo.png" alt="logo-of-header" /></div>
            <div className="flex items-center gap-4">
                <ul className="absolute invisible lg:relative lg:visible flex gap-3 text-gray-500">
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>
                <div className="lg:absolute lg:invisible"><img className="w-15 h-10" src="https://i.ibb.co.com/pJ9ddpS/menu.png" alt="menu-icon" /></div>
                <button className="flex justify-center items-center gap-1 border-solid border-2 rounded-lg pl-2"><span>{balance}</span>Coin<img className="w-10 h-7" src="https://i.ibb.co.com/kJrCth7/coin.jpg" alt="coin-logo"/></button>
            </div>
        </header>
    );
};
Header.propTypes = {
    balance: PropTypes.number.isRequired
}

export default Header;