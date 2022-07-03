import { renderSinglePlayer } from "./renderHelpers";

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2206-FTB-ET-WEB-FT-A';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        console.log(response, 'response', result, result.data.players)
        if (result.error) throw result.error;
        return result.data.players;
      } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
      }
    }

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`);
        const result = await response.json();
        console.log(response, result, 'response, result')
        
        console.log(result.data.player)
        let playerObj = result.data.player
        console.log(playerObj,'playerobj')
        renderSinglePlayer(playerObj)
        return playerObj
        
    }catch(err){
        console.error('error', err)

    }

};

export const addNewPlayer = async (playerObj) => {
    console.log(playerObj, 'from ajax helper')
    try {
        const response = await fetch(
            `${APIURL}players`,
        {
            method:'POST',
            headers: {
                'Content-Type':  'application/json',
            },
            body: JSON.stringify(playerObj,{
                name:'',
                breed: '',
            }),
    });
        const result = await response.json();
        console.log(result, 'result');
        }catch(err){
        console.error('error', err)
    }
};

export const removePlayer = async (playerId) => {

};
