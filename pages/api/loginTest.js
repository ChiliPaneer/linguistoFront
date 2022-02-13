export default function handler(req, res) {
    const body = req.body;
    if (!body.username) {
      return res.status(500).json({msg: 'Name was not found'});
    }
  
    res.status(200).json({name: `${body.username} ${body.password}`});
  }