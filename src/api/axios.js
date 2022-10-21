import axios from 'axios';

export default axios.create({
  // api for the whole application, backend on this port...
  baseURL: 'http://localhost:port',
});
