const jwt = require('jsonwebtoken');
const jwtKey =
  process.env.JWT_SECRET;

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);
      
      req.decoded = decoded;
      console.log("authenticated")
      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}

function generateToken(user) {
	const payload = {
		email: user.email,
		id: user.id
	};

	const secret = process.env.JWT_SECRET;

	const options = {
		expiresIn: '30m',
	};

	return jwt.sign(payload, secret, options);
}
