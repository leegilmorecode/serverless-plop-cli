import {
    APIGatewayRequestAuthorizerEvent,
    AuthResponse,
    PolicyDocument,
  } from 'aws-lambda';
  
  import { config } from '@config';
  import { logger } from '@shared';
  import { CognitoJwtVerifier } from 'aws-jwt-verify';
  import { CognitoJwtVerifierSingleUserPool } from 'aws-jwt-verify/cognito-verifier';
  import jwt from 'jsonwebtoken';
  
  const userPoolId = config.get('userPoolId');
  const clientId = config.get('clientId');
  const authorizerDebugMode = config.get('authorizerDebugMode');
  
  type DecodedToken = {
    sub: string;
    username: string;
  };
  
  let verifier: CognitoJwtVerifierSingleUserPool<{
    userPoolId: string;
    tokenUse: 'access';
    clientId: string;
  }>;
  
  function generatePolicy(
    effect: 'Allow' | 'Deny',
    resource: string,
  ): PolicyDocument {
    return {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource,
        },
      ],
    };
  }
  
  const validateToken = async (
    token: string,
    userPoolId: string,
    clientId: string,
  ) => {
    if (!verifier) {
      if (!userPoolId || !clientId) {
        throw new Error('Missing UserPoolID or ClientID');
      }
  
      verifier = CognitoJwtVerifier.create({
        userPoolId: userPoolId,
        tokenUse: 'access',
        clientId: clientId,
      });
    }
  
    try {
      const payload = await verifier.verify(token);
  
      if (authorizerDebugMode === 'true') {
        logger.debug('Token is valid. Payload:', payload);
      }
  
      return payload;
    } catch (error) {
      logger.error(`Token is not valid: ${error}`);
      throw new Error('Unauthorized');
    }
  };
  
  export async function handler(
    event: APIGatewayRequestAuthorizerEvent,
  ): Promise<AuthResponse> {
    try {
      const authToken = event?.headers?.['Authorization'];
      if (!authToken || !authToken.startsWith('Bearer ')) {
        throw new Error('Invalid or missing authorization token');
      }
  
      const token = authToken.substring(7);
  
      await validateToken(token, userPoolId, clientId);
  
      const decodedToken = jwt.decode(token) as DecodedToken;
      if (!decodedToken) throw new Error('Token cannot be decoded');
  
      const policyDoc = generatePolicy('Allow', event.methodArn);
      return {
        principalId: decodedToken.sub,
        policyDocument: policyDoc,
        context: {
          id: decodedToken.sub,
        },
      } as AuthResponse;
    } catch (error) {
      logger.error(`An error occurred during authentication: ${error}`);
  
      return {
        principalId: 'unauthorized',
        policyDocument: generatePolicy('Deny', event.methodArn),
      } as AuthResponse;
    }
  }