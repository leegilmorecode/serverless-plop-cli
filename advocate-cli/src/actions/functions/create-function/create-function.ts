import { ActionType } from 'plop';

export const createFunction = (cdkFolderPath: string) => {
  return {
    description: 'Create resource Lambda adapter and use case',
    prompts: [
      {
        type: 'list',
        name: 'operationType',
        message: 'What type of operation do you want to create?',
        choices: [
          { name: 'Create (API Gateway)', value: 'create' },
          { name: 'Get (API Gateway)', value: 'get' },
          { name: 'Update (API Gateway)', value: 'update' },
          { name: 'Delete (API Gateway)', value: 'delete' },
          { name: 'Authorizer (API Gateway)', value: 'authorizer' },
          { name: 'Stream (DynamoDB)', value: 'dynamodb-stream' },
          { name: 'Queue (SQS)', value: 'sqs-queue' },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: (context: any) =>
          `What is the use case name please? (example: ${context.operationType} customer)`,
        when(context: any) {
          return context.operationType !== 'authorizer';
        },
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
        when(context: any) {
          return context.operationType !== 'authorizer';
        },
      },
      {
        type: 'input',
        name: 'useCaseSchemaName',
        message: 'What is the use case type? (e.g. Customer or Order)',
        when(context: any) {
          return (
            context.useCaseRequired === 'Y' &&
            context.operationType !== 'dynamodb-stream' &&
            context.operationType !== 'authorizer' &&
            context.operationType !== 'sqs-queue'
          );
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
        message: 'Do you require a DTO too? (Y/N)',
        when(context: any) {
          return (
            context.operationType !== 'authorizer' &&
            context.operationType !== 'dynamodb-stream' &&
            context.operationType !== 'sqs-queue'
          );
        },
      },
      {
        type: 'input',
        name: 'statusCode',
        default: 200,
        message: 'What is the return status code please?',
        when(context: any) {
          return (
            context.operationType !== 'authorizer' &&
            context.operationType !== 'dynamodb-stream' &&
            context.operationType !== 'sqs-queue'
          );
        },
      },
    ],
    actions: (data: any) => {
      const actions: ActionType[] = [];

      // if create we create the create primary adapter
      if (data.operationType === 'create') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.adapter.ts`,
          templateFile:
            'src/templates/adapters/primary/create-lambda-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.schema.ts`,
          templateFile: 'src/templates/adapters/shared/generic.schema.hbs',
        });

        if (data.useCaseRequired === 'Y') {
          // create the generic files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/schemas/shared/generic.schema.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile:
              'src/templates/schemas/shared/generic.schema.index.hbs',
          });
          // create the specific files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/{{kebabCase name}}.ts`,
            templateFile: 'src/templates/use-cases/create-use-case.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/index.ts`,
            templateFile: 'src/templates/use-cases/shared/use-case.index.hbs',
          });
        }

        if (data.dtoRequired === 'Y') {
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase name}}/{{kebabCase name}}.ts`,
            templateFile: 'src/templates/dto/create-dto.ts.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase name}}/index.ts`,
            templateFile: 'src/templates/dto/create-dto.index.hbs',
          });

          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/dto/shared/dto.ts.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile: 'src/templates/dto/shared/dto.index.hbs',
          });
        }
      }

      // if get we create the get primary adapter
      if (data.operationType === 'get') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.adapter.ts`,
          templateFile: 'src/templates/adapters/primary/get-lambda-adapter.hbs',
        });

        if (data.useCaseRequired === 'Y') {
          // create the generic files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/schemas/shared/generic.schema.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile:
              'src/templates/schemas/shared/generic.schema.index.hbs',
          });

          // create the specific files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/{{kebabCase name}}.ts`,
            templateFile: 'src/templates/use-cases/get-use-case.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/index.ts`,
            templateFile: 'src/templates/use-cases/shared/use-case.index.hbs',
          });
        }

        if (data.dtoRequired === 'Y') {
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/dto/shared/dto.ts.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile: 'src/templates/dto/shared/dto.index.hbs',
          });
        }
      }

      // if update we create the update primary adapter
      if (data.operationType === 'update') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.adapter.ts`,
          templateFile:
            'src/templates/adapters/primary/update-lambda-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.schema.ts`,
          templateFile: 'src/templates/adapters/shared/generic.schema.hbs',
        });

        if (data.useCaseRequired === 'Y') {
          // create the generic files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/schemas/shared/generic.schema.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile:
              'src/templates/schemas/shared/generic.schema.index.hbs',
          });
          // create the specific files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/{{kebabCase name}}.ts`,
            templateFile: 'src/templates/use-cases/update-use-case.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/index.ts`,
            templateFile: 'src/templates/use-cases/shared/use-case.index.hbs',
          });
        }

        if (data.dtoRequired === 'Y') {
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase name}}/{{kebabCase name}}.ts`,
            templateFile: 'src/templates/dto/update-dto.ts.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase name}}/index.ts`,
            templateFile: 'src/templates/dto/update-dto.index.hbs',
          });

          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/dto/shared/dto.ts.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile: 'src/templates/dto/shared/dto.index.hbs',
          });
        }
      }

      // if delete we create the delete primary adapter
      if (data.operationType === 'delete') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.adapter.ts`,
          templateFile:
            'src/templates/adapters/primary/delete-lambda-adapter.hbs',
        });

        if (data.useCaseRequired === 'Y') {
          // create the generic files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/schemas/shared/generic.schema.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile:
              'src/templates/schemas/shared/generic.schema.index.hbs',
          });

          // create the specific files
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/{{kebabCase name}}.ts`,
            templateFile: 'src/templates/use-cases/delete-use-case.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}/index.ts`,
            templateFile: 'src/templates/use-cases/shared/use-case.index.hbs',
          });
        }

        if (data.dtoRequired === 'Y') {
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts`,
            templateFile: 'src/templates/dto/shared/dto.ts.hbs',
          });
          actions.push({
            type: 'add',
            skipIfExists: true,
            path: `../${cdkFolderPath}/stateless/src/dto/{{kebabCase useCaseSchemaName}}/index.ts`,
            templateFile: 'src/templates/dto/shared/dto.index.hbs',
          });
        }
      }

      // if sqs-queue we create the queue primary adapter
      if (data.operationType === 'sqs-queue') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}-queue-processor/{{kebabCase name}}-queue-processor.adapter.ts`,
          templateFile:
            'src/templates/adapters/primary/queue-processor-adapter.hbs',
        });

        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}-queue-processor/{{kebabCase name}}-queue-processor.ts`,
          templateFile: 'src/templates/use-cases/queue-processor-use-case.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}-queue-processor/index.ts`,
          templateFile: 'src/templates/use-cases/shared/use-case-sqs.index.hbs',
        });
      }

      // if dynamodb-stream we create the stream primary adapter
      if (data.operationType === 'dynamodb-stream') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/{{kebabCase name}}-stream-processor/{{kebabCase name}}-stream-processor.adapter.ts`,
          templateFile:
            'src/templates/adapters/primary/stream-processor-adapter.hbs',
        });

        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}-stream-processor/{{kebabCase name}}-stream-processor.ts`,
          templateFile: 'src/templates/use-cases/stream-processor-use-case.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/use-cases/{{kebabCase name}}-stream-processor/index.ts`,
          templateFile:
            'src/templates/use-cases/shared/use-case-stream.index.hbs',
        });
      }

      // if authorizer we create the lambda authorizer
      if (data.operationType === 'authorizer') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/primary/lambda-authorizer/lambda-authorizer.adapter.ts`,
          templateFile:
            'src/templates/adapters/primary/lambda-authorizer.adapter.hbs',
        });
      }

      return actions;
    },
  };
};
