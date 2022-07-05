const url = "http://localhost:5500/api";
const newUser =  {
    name: "Matheus Nunes",
    avatar: "https://avatars.githubusercontent.com/u/94872601?v=4",
    city: "Porto Alegre"
}

function getUser() {
    axios.get(url)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
getUser()

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}

addNewUser()