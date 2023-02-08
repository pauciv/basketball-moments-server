import { expressjwt as jwt, GetVerificationKey } from 'express-jwt'
import jwksRsa from 'jwks-rsa'

import 'dotenv/config'

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER as string}.well-known/jwks.json`
  }) as GetVerificationKey,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256']
})

export { checkJwt }
