type StageHeaders = Record<string, any>;

export function getHeaders(stage: string) {
  const standardHeaders = {
    'Content-Type': 'application/json',
    'Content-Security-Policy': "default-src 'self'",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'no-referrer',
    'Permissions-Policy': 'geolocation=(), microphone=()',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': true,
  };
  const stageHeaders: StageHeaders = {
    develop: {
      ...standardHeaders,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    staging: { ...standardHeaders },
    prod: { ...standardHeaders },
  };

  return !stageHeaders[stage] ? stageHeaders['develop'] : stageHeaders[stage];
}