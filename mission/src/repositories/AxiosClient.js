import axios from 'axios';

const baseDomain = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';
const baseURL = `${baseDomain}`; // Incase of /api/v1;

// ALL DEFUALT CONFIGURATION HERE

export default axios.create({
  baseURL,
  headers: {
    Authorization: 'abcd1234',
  },
});
