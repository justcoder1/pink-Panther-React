import axios from 'axios';

export const noop = () => {};

// export const db_API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
// Temp until I get environments figured out
export const db_API = axios.create({ baseURL: 'http://18.130.248.203:3200' });