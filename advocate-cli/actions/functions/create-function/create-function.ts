import { ActionType } from 'plop';

export const createFunction = (cdkFolderPath: string) => {
  return {
    description: 'Create resouce Lambda adapter and use case',
    prompts: [
      {
        type: 'input',
        name: 'name',
        default: 'create',
        message: 'what is the use case name please? (example: create customer)',
      },
      {
        type: 'input',
        name: 'useCaseRequired',
        default: 'Y',
        choices: [
          { name: 'Yes', value: 'Y' },
          { name: 'No', value: 'N' },
        ],
        validate: (value: string) => ['Y', 'N'].includes(value),
        message: 'Do you require a use case too? (Y/N)',
      },
      {
        type: 'input',
        name: 'useCaseSchemaName',
        message: 'What is the use case type? (e.g. Customer or Order)',
        when(context: any) {
          return context.useCaseRequired === 'Y';
        },
      },
      {
        type: 'input',
        name: 'dtoRequired',
        default: 'Y',
        choices: [
          { name: 'Yes', value: 'Y' },
          { name: 'No', value: 'N' },
        ],
        validate: (value: string) => ['Y', 'N'].includes(value),
        message: 'Do you require a dto too? (Y/N)',
      },
      {
        type: 'input',
        name: 'statusCode',
        default: 201,
        message: 'what is the return status code please?',
      },
    ],
    actions: (data: any) => {
      const actions: ActionType[] = [
        {
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.adapter.ts`,
          templateFile: 'templates/adapters/primary/create-lambda-adapter.hbs',
        },
        {
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.schema.ts`,
          templateFile: 'templates/adapters/shared/generic.schema.hbs',
        },
      ];
      if (data.useCaseRequired === 'Y') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
          templateFile: 'templates/schemas/shared/generic.schema.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/index.ts`,
          templateFile: 'templates/schemas/shared/generic.schema.index.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/{{kebabCase name}}.ts`,
          templateFile: 'templates/use-cases/create-use-case.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/index.ts`,
          templateFile: 'templates/use-cases/shared/use-case.index.hbs',
        });
      }
      if (data.dtoRequired === 'Y') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase name}}/{{kebabCase name}}.ts`,
          templateFile: 'templates/dto/create-dto.ts.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase name}}/index.ts`,
          templateFile: 'templates/dto/shared/dto.index.hbs',
        });
      }
      return actions;
    },
  };
};
