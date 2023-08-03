const fs = require('fs');

module.exports = async (req, res) => {
  try {
    const data = fs.readFileSync('./db.json', 'utf8');
    const jsonData = JSON.parse(data);
    return res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


