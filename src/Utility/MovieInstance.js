import axios from "axios"

//configuration eyeseran new
let movieInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default movieInstance