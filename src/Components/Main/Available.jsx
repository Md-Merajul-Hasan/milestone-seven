import { useState } from "react";
import Card from "./Card/Card";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Select from "./Selected/Select";

const Available = ({playerChosen, balance, notifyAlreadyTaken}) => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('../../../public/blogs.json')
        .then(res => res.json())
        .then(data=> setPlayers(data))
    }
        ,[])
        const [selected, setSelected] = useState([]);
        const selectedPlayer = (player)=>{
            const availableBalance = balance - player.price;
            if(selected.length < 6 && availableBalance > 0){
                const selectedArray = [...selected]
                const isSelected = selectedArray.includes(player);
                if(isSelected){
                    notifyAlreadyTaken(player.name);
                }else if(!isSelected){
                    const newSelectedArray = [...selected, player]
                    setSelected(newSelectedArray);
                }   
            }
            playerChosen(player, selected);  
        }
    
        const clickedSelected =() => {
            const availableSection = document.getElementById('available');
            availableSection.classList.add('hidden');
            const selectedSection = document.getElementById('selected');
            selectedSection.classList.remove('hidden');
            const textAvailable = document.getElementById('available-text');
            textAvailable.classList.add('hidden');
            const textSelected = document.getElementById('selected-text');
            textSelected.classList.remove('hidden');
            const availableBtn = document.getElementById('available-btn');
            availableBtn.classList.remove('bg-yellow-400');
            const selectedBtn = document.getElementById('selected-btn');
            selectedBtn.classList.add('bg-yellow-400');
        }
        const clickedAvailable = () =>{
            const selectedSection = document.getElementById('selected');
            selectedSection.classList.add('hidden');
            const availableSection = document.getElementById('available');
            availableSection.classList.remove('hidden');
            const textSelected = document.getElementById('selected-text');
            textSelected.classList.add('hidden');
            const textAvailable = document.getElementById('available-text');
            textAvailable.classList.remove('hidden');
            const selectedBtn = document.getElementById('selected-btn');
            selectedBtn.classList.remove('bg-yellow-400');
            const availableBtn = document.getElementById('available-btn');
            availableBtn.classList.add('bg-yellow-400');            
        }
    return (
        <main>
            <section className="w-11/12 mx-auto my-8 flex justify-between font-bold">
            <div>
                <h3 id="available-text" className="text-2xl">Available Players</h3>
                <h3 id="selected-text" className="hidden text-2xl">Selected Player{selected.length}/6</h3>
            </div>
            <div className="flex border-2 border-solid rounded-xl">
                <button id="available-btn" className="bg-yellow-400 rounded-l-xl" onClick={clickedAvailable}>Available</button>
                <button id="selected-btn" className="rounded-r-xl" onClick={clickedSelected}>Selected({selected.length})</button>
            </div>
           </section>
           <section id="available" className="w-11/12 mx-auto grid grid-cols-3 gap-3">
            {
                players.map(player => <Card
                key={player.player_id}
                player={player}
                playerChosen={playerChosen}
                selectedPlayer={selectedPlayer}
                ></Card>)
            }
           </section>
            <section id="selected" className="hidden w-11/12 mx-auto">
                {
                    selected.map(player=><Select
                    key={player.player_id}
                    player={player}
                    ></Select>)
                }
                <button onClick={clickedAvailable} className="bg-yellow-400 border-2 border-solid border-gray-200 rounded-md p-2 mb-3 font-semibold">Add More Player</button>
            </section>
        </main>
        
    );
};
Available.propTypes = {
    playerChosen: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
    notifyAlreadyTaken: PropTypes.func.isRequired
}
export default Available;