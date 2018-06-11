const axios = require('axios');
const conversion = require('../service/conversion.service');

// this is for calling external API using address from GET params
const callAPI = async (req, res) => {
  const { address } = req.params;

  try {
    const result = await axios.get(`https://api.blockcypher.com/v1/eth/main/addrs/${address}/balance`);

    const calculatedResult = conversion(result.data.balance); // should do checking whether result has data property and balance property or not
    return res.json(calculatedResult);
  } catch (err) {
    // should use an error handling middleware in production
    return res.status(err.response.status).json(err.response.data.error);
  }
};

module.exports = callAPI;

