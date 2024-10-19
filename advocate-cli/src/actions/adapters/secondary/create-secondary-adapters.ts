import { ActionType } from 'plop';

export const createSecondaryAdapters = (cdkFolderPath: string) => {
  return {
    description: '[email, event, event-scheduler, dynamoddb, notifications]',
    prompts: [
      {
        type: 'checkbox',
        name: 'adapters',
        message:
          'Select the adapters you want to create (use space to select, enter to confirm):',
        choices: [
          { name: 'DynamoDB', value: 'dynamoDb' },
          { name: 'Email', value: 'email' },
          { name: 'Notification', value: 'notification' },
          { name: 'Event', value: 'event' },
          { name: 'Event Scheduler', value: 'scheduleEvent' },
          { name: 'Parameters', value: 'parameters' },
          { name: 'Cancel', value: 'cancel' },
        ],
        validate: (value: string[]) => {
          if (value.includes('cancel')) {
            return true;
          }
          return value.length > 0
            ? true
            : 'Please select at least one adapter or cancel.';
        },
      },
    ],
    actions: (data: any) => {
      const actions: ActionType[] = [];

      if (data.adapters.includes('cancel')) {
        return [];
      }

      if (data.adapters.includes('dynamoDb')) {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/dynamodb-adapter/dynamodb-adapter.ts`,
          templateFile:
            'src/templates/adapters/secondary/dynamodb-adapter/dynamodb-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/dynamodb-adapter/index.ts`,
          templateFile:
            'src/templates/adapters/secondary/dynamodb-adapter/index.hbs',
        });
      }

      if (data.adapters.includes('parameters')) {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/parameters-adapter/parameters-adapter.ts`,
          templateFile:
            'src/templates/adapters/secondary/parameters-adapter/parameters-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/parameters-adapter/index.ts`,
          templateFile:
            'src/templates/adapters/secondary/parameters-adapter/index.hbs',
        });
      }

      if (data.adapters.includes('email')) {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/email-adapter/email-adapter.ts`,
          templateFile:
            'src/templates/adapters/secondary/email-adapter/email-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/email-adapter/index.ts`,
          templateFile:
            'src/templates/adapters/secondary/email-adapter/index.hbs',
        });
      }

      if (data.adapters.includes('notification')) {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/notification-adapter/notification-adapter.ts`,
          templateFile:
            'src/templates/adapters/secondary/notification-adapter/notification-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/notification-adapter/index.ts`,
          templateFile:
            'src/templates/adapters/secondary/notification-adapter/index.hbs',
        });
      }

      if (data.adapters.includes('event')) {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/event-adapter/event-adapter.ts`,
          templateFile:
            'src/templates/adapters/secondary/event-adapter/event-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/event-adapter/index.ts`,
          templateFile:
            'src/templates/adapters/secondary/event-adapter/index.hbs',
        });
      }

      if (data.adapters.includes('scheduleEvent')) {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/schedule-events-adapter/schedule-events-adapter.ts`,
          templateFile:
            'src/templates/adapters/secondary/schedule-events-adapter/schedule-events-adapter.hbs',
        });
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `../${cdkFolderPath}/stateless/src/adapters/secondary/schedule-events-adapter/index.ts`,
          templateFile:
            'src/templates/adapters/secondary/schedule-events-adapter/index.hbs',
        });
      }

      return actions;
    },
  };
};
