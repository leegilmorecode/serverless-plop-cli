import { createFunction } from './create-function';

const cdkFolderPath = 'customer-service';

describe('shared', () => {
  it('should return the correct object', () => {
    expect(createFunction(cdkFolderPath)).toMatchInlineSnapshot(`
{
  "actions": [Function],
  "description": "[create, delete, update, get, queue, stream, authorizer]",
  "prompts": [
    {
      "choices": [
        {
          "name": "Create (API Gateway)",
          "value": "create",
        },
        {
          "name": "Get (API Gateway)",
          "value": "get",
        },
        {
          "name": "Update (API Gateway)",
          "value": "update",
        },
        {
          "name": "Delete (API Gateway)",
          "value": "delete",
        },
        {
          "name": "Authorizer (API Gateway)",
          "value": "authorizer",
        },
        {
          "name": "Stream (DynamoDB)",
          "value": "dynamodb-stream",
        },
        {
          "name": "Queue (SQS)",
          "value": "sqs-queue",
        },
      ],
      "message": "What type of operation do you want to create?",
      "name": "operationType",
      "type": "list",
    },
    {
      "message": [Function],
      "name": "name",
      "type": "input",
      "when": [Function],
    },
    {
      "choices": [
        {
          "name": "Yes",
          "value": "Y",
        },
        {
          "name": "No",
          "value": "N",
        },
      ],
      "default": "Y",
      "message": "Do you require a use case too? (Y/N)",
      "name": "useCaseRequired",
      "type": "input",
      "validate": [Function],
      "when": [Function],
    },
    {
      "message": "What is the use case type? (e.g. Customer or Order)",
      "name": "useCaseSchemaName",
      "type": "input",
      "when": [Function],
    },
    {
      "choices": [
        {
          "name": "Yes",
          "value": "Y",
        },
        {
          "name": "No",
          "value": "N",
        },
      ],
      "default": "Y",
      "message": "Do you require a DTO too? (Y/N)",
      "name": "dtoRequired",
      "type": "input",
      "validate": [Function],
      "when": [Function],
    },
    {
      "default": 200,
      "message": "What is the return status code please?",
      "name": "statusCode",
      "type": "input",
      "when": [Function],
    },
  ],
}
`);
  });
});
