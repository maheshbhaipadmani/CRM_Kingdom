import Jwt  from "jsonwebtoken";

const jwtTokenGenerator = (userId,firstname)=>{
    const token = Jwt.sign({userId,firstname},process.env.SECRET_KEY,{
        expiresIn : "1h"
    })
	return token;
}

export default jwtTokenGenerator;