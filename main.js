const url = "http://localhost:5500/api";
const number = 15
const newUser =  {
    name: "Matheus Nunes",
    avatar: "https://avatars.githubusercontent.com/u/94872601?v=4",
    city: "Porto Alegre"
}

const userUpdated =  {
    name: "Pedro Peral",
    avatar: "https://avatars.githubusercontent.com/u/48099618?v=4",
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
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}
//addNewUser()

function updateUser() {
    axios.put(`${url}/3`, userUpdated)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}
//updateUser()

function deleteUser(){
    axios.delete(`${url}/10`)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}
//deleteUser()

function getOneUser() {
    axios.get(`${url}/${number}`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
}
getOneUser()