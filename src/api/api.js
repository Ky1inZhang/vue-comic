import axios from 'axios'

export const getRank = params => { return axios.get('/r/rank/', { params: params }) }
