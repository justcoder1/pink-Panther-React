import axios from 'axios';

export const noop = () => {};

export const db_API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });