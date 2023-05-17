import { createFunction } from './create-function';

const cdkFolderPath = 'customer-service';

describe('shared', () => {
  it('should return the correct object', () => {
    expect(createFunction(cdkFolderPath)).toMatchInlineSnapshot(`
{
  "actions": [Function],
  "description": "Create resouce Lambda adapter and use case",
  "prompts": [
    {
      "default": "create",
      "message": "what is the use case name please? (example: create customer)",
      "name": "name",
      "type": "input",
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
      "message": "Do you require a dto too? (Y/N)",
      "name": "dtoRequired",
      "type": "input",
      "validate": [Function],
    },
    {
      "default": 201,
      "message": "what is the return status code please?",
      "name": "statusCode",
      "type": "input",
    },
  ],
}
`);
  });
});
