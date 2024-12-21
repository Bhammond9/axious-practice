// axios
// .get ("https://swapi.dev/api/people/1/")
// .then((res) => {
// console.log("RESPONSE: ", res);
// })
// .catch((e) => {
//     console.log("ERROR!", e);
// });

// const getStarWarsPerson = async (id) => {
//     try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//     } catch(e) {
//         console.log("error", e)

//     }
// };

// getStarWarsPerson(5);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
button.addEventListener('click', )

const addNewJoke = () => {
    const jokeText = getDadJoke()
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke); 
    jokes.append(newLI)
}

const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'} }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
} catch(e) {
    return "no jokes available sorry";

};

