export var createFunction = function (cdkFolderPath) {
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
                validate: function (value) { return ['Y', 'N'].includes(value); },
                message: 'Do you require a use case too? (Y/N)',
            },
            {
                type: 'input',
                name: 'useCaseSchemaName',
                message: 'What is the use case type? (e.g. Customer or Order)',
                when: function (context) {
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
                validate: function (value) { return ['Y', 'N'].includes(value); },
                message: 'Do you require a dto too? (Y/N)',
            },
            {
                type: 'input',
                name: 'statusCode',
                default: 201,
                message: 'what is the return status code please?',
            },
        ],
        actions: function (data) {
            var actions = [
                {
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.adapter.ts"),
                    templateFile: 'templates/adapters/primary/create-lambda-adapter.hbs',
                },
                {
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/adapters/primary/{{kebabCase name}}/{{kebabCase name}}.schema.ts"),
                    templateFile: 'templates/adapters/shared/generic.schema.hbs',
                },
            ];
            if (data.useCaseRequired === 'Y') {
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/{{kebabCase useCaseSchemaName}}.ts"),
                    templateFile: 'templates/schemas/shared/generic.schema.hbs',
                });
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/schemas/{{kebabCase useCaseSchemaName}}/index.ts"),
                    templateFile: 'templates/schemas/shared/generic.schema.index.hbs',
                });
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/use-cases/{{kebabCase name}}/{{kebabCase name}}.ts"),
                    templateFile: 'templates/use-cases/create-use-case.hbs',
                });
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/use-cases/{{kebabCase name}}/index.ts"),
                    templateFile: 'templates/use-cases/shared/use-case.index.hbs',
                });
            }
            if (data.dtoRequired === 'Y') {
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/dto/{{kebabCase name}}/{{kebabCase name}}.ts"),
                    templateFile: 'templates/dto/create-dto.ts.hbs',
                });
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    path: "../".concat(cdkFolderPath, "/stateless/src/dto/{{kebabCase name}}/index.ts"),
                    templateFile: 'templates/dto/shared/dto.index.hbs',
                });
            }
            return actions;
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyxVQUFDLGFBQXFCO0lBQ2xELE9BQU87UUFDTCxXQUFXLEVBQUUsNENBQTRDO1FBQ3pELE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsOERBQThEO2FBQ3hFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osT0FBTyxFQUFFO29CQUNQLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO29CQUMzQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtpQkFDM0I7Z0JBQ0QsUUFBUSxFQUFFLFVBQUMsS0FBYSxJQUFLLE9BQUEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQjtnQkFDdkQsT0FBTyxFQUFFLHNDQUFzQzthQUNoRDtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE9BQU8sRUFBRSxxREFBcUQ7Z0JBQzlELElBQUksWUFBQyxPQUFZO29CQUNmLE9BQU8sT0FBTyxDQUFDLGVBQWUsS0FBSyxHQUFHLENBQUM7Z0JBQ3pDLENBQUM7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxhQUFhO2dCQUNuQixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUU7b0JBQ1AsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7b0JBQzNCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO2lCQUMzQjtnQkFDRCxRQUFRLEVBQUUsVUFBQyxLQUFhLElBQUssT0FBQSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCO2dCQUN2RCxPQUFPLEVBQUUsaUNBQWlDO2FBQzNDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLE9BQU8sRUFBRSxHQUFHO2dCQUNaLE9BQU8sRUFBRSx3Q0FBd0M7YUFDbEQ7U0FDRjtRQUNELE9BQU8sRUFBRSxVQUFDLElBQVM7WUFDakIsSUFBTSxPQUFPLEdBQWlCO2dCQUM1QjtvQkFDRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSxxRkFBa0Y7b0JBQzNHLFlBQVksRUFBRSxzREFBc0Q7aUJBQ3JFO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLFlBQVksRUFBRSxJQUFJO29CQUNsQixJQUFJLEVBQUUsYUFBTSxhQUFhLG9GQUFpRjtvQkFDMUcsWUFBWSxFQUFFLDhDQUE4QztpQkFDN0Q7YUFDRixDQUFDO1lBQ0YsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLEdBQUcsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDWCxJQUFJLEVBQUUsS0FBSztvQkFDWCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSw4RkFBMkY7b0JBQ3BILFlBQVksRUFBRSw2Q0FBNkM7aUJBQzVELENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNYLElBQUksRUFBRSxLQUFLO29CQUNYLFlBQVksRUFBRSxJQUFJO29CQUNsQixJQUFJLEVBQUUsYUFBTSxhQUFhLG9FQUFpRTtvQkFDMUYsWUFBWSxFQUFFLG1EQUFtRDtpQkFDbEUsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLElBQUksRUFBRSxhQUFNLGFBQWEsc0VBQW1FO29CQUM1RixZQUFZLEVBQUUseUNBQXlDO2lCQUN4RCxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDWCxJQUFJLEVBQUUsS0FBSztvQkFDWCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSx5REFBc0Q7b0JBQy9FLFlBQVksRUFBRSwrQ0FBK0M7aUJBQzlELENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEdBQUcsRUFBRTtnQkFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDWCxJQUFJLEVBQUUsS0FBSztvQkFDWCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSxnRUFBNkQ7b0JBQ3RGLFlBQVksRUFBRSxpQ0FBaUM7aUJBQ2hELENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNYLElBQUksRUFBRSxLQUFLO29CQUNYLFlBQVksRUFBRSxJQUFJO29CQUNsQixJQUFJLEVBQUUsYUFBTSxhQUFhLG1EQUFnRDtvQkFDekUsWUFBWSxFQUFFLG9DQUFvQztpQkFDbkQsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICdwbG9wJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZ1bmN0aW9uID0gKGNka0ZvbGRlclBhdGg6IHN0cmluZykgPT4ge1xuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIHJlc291Y2UgTGFtYmRhIGFkYXB0ZXIgYW5kIHVzZSBjYXNlJyxcbiAgICBwcm9tcHRzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgZGVmYXVsdDogJ2NyZWF0ZScsXG4gICAgICAgIG1lc3NhZ2U6ICd3aGF0IGlzIHRoZSB1c2UgY2FzZSBuYW1lIHBsZWFzZT8gKGV4YW1wbGU6IGNyZWF0ZSBjdXN0b21lciknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgbmFtZTogJ3VzZUNhc2VSZXF1aXJlZCcsXG4gICAgICAgIGRlZmF1bHQ6ICdZJyxcbiAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgIHsgbmFtZTogJ1llcycsIHZhbHVlOiAnWScgfSxcbiAgICAgICAgICB7IG5hbWU6ICdObycsIHZhbHVlOiAnTicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZTogc3RyaW5nKSA9PiBbJ1knLCAnTiddLmluY2x1ZGVzKHZhbHVlKSxcbiAgICAgICAgbWVzc2FnZTogJ0RvIHlvdSByZXF1aXJlIGEgdXNlIGNhc2UgdG9vPyAoWS9OKScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBuYW1lOiAndXNlQ2FzZVNjaGVtYU5hbWUnLFxuICAgICAgICBtZXNzYWdlOiAnV2hhdCBpcyB0aGUgdXNlIGNhc2UgdHlwZT8gKGUuZy4gQ3VzdG9tZXIgb3IgT3JkZXIpJyxcbiAgICAgICAgd2hlbihjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC51c2VDYXNlUmVxdWlyZWQgPT09ICdZJztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIG5hbWU6ICdkdG9SZXF1aXJlZCcsXG4gICAgICAgIGRlZmF1bHQ6ICdZJyxcbiAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgIHsgbmFtZTogJ1llcycsIHZhbHVlOiAnWScgfSxcbiAgICAgICAgICB7IG5hbWU6ICdObycsIHZhbHVlOiAnTicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZTogc3RyaW5nKSA9PiBbJ1knLCAnTiddLmluY2x1ZGVzKHZhbHVlKSxcbiAgICAgICAgbWVzc2FnZTogJ0RvIHlvdSByZXF1aXJlIGEgZHRvIHRvbz8gKFkvTiknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgbmFtZTogJ3N0YXR1c0NvZGUnLFxuICAgICAgICBkZWZhdWx0OiAyMDEsXG4gICAgICAgIG1lc3NhZ2U6ICd3aGF0IGlzIHRoZSByZXR1cm4gc3RhdHVzIGNvZGUgcGxlYXNlPycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgYWN0aW9uczogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uczogQWN0aW9uVHlwZVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGAuLi8ke2Nka0ZvbGRlclBhdGh9L3N0YXRlbGVzcy9zcmMvYWRhcHRlcnMvcHJpbWFyeS97e2tlYmFiQ2FzZSBuYW1lfX0ve3trZWJhYkNhc2UgbmFtZX19LmFkYXB0ZXIudHNgLFxuICAgICAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9hZGFwdGVycy9wcmltYXJ5L2NyZWF0ZS1sYW1iZGEtYWRhcHRlci5oYnMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGAuLi8ke2Nka0ZvbGRlclBhdGh9L3N0YXRlbGVzcy9zcmMvYWRhcHRlcnMvcHJpbWFyeS97e2tlYmFiQ2FzZSBuYW1lfX0ve3trZWJhYkNhc2UgbmFtZX19LnNjaGVtYS50c2AsXG4gICAgICAgICAgdGVtcGxhdGVGaWxlOiAndGVtcGxhdGVzL2FkYXB0ZXJzL3NoYXJlZC9nZW5lcmljLnNjaGVtYS5oYnMnLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICAgIGlmIChkYXRhLnVzZUNhc2VSZXF1aXJlZCA9PT0gJ1knKSB7XG4gICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGAuLi8ke2Nka0ZvbGRlclBhdGh9L3N0YXRlbGVzcy9zcmMvc2NoZW1hcy97e2tlYmFiQ2FzZSB1c2VDYXNlU2NoZW1hTmFtZX19L3t7a2ViYWJDYXNlIHVzZUNhc2VTY2hlbWFOYW1lfX0udHNgLFxuICAgICAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9zY2hlbWFzL3NoYXJlZC9nZW5lcmljLnNjaGVtYS5oYnMnLFxuICAgICAgICB9KTtcbiAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICBza2lwSWZFeGlzdHM6IHRydWUsXG4gICAgICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVsZXNzL3NyYy9zY2hlbWFzL3t7a2ViYWJDYXNlIHVzZUNhc2VTY2hlbWFOYW1lfX0vaW5kZXgudHNgLFxuICAgICAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9zY2hlbWFzL3NoYXJlZC9nZW5lcmljLnNjaGVtYS5pbmRleC5oYnMnLFxuICAgICAgICB9KTtcbiAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICBza2lwSWZFeGlzdHM6IHRydWUsXG4gICAgICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVsZXNzL3NyYy91c2UtY2FzZXMve3trZWJhYkNhc2UgbmFtZX19L3t7a2ViYWJDYXNlIG5hbWV9fS50c2AsXG4gICAgICAgICAgdGVtcGxhdGVGaWxlOiAndGVtcGxhdGVzL3VzZS1jYXNlcy9jcmVhdGUtdXNlLWNhc2UuaGJzJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGAuLi8ke2Nka0ZvbGRlclBhdGh9L3N0YXRlbGVzcy9zcmMvdXNlLWNhc2VzL3t7a2ViYWJDYXNlIG5hbWV9fS9pbmRleC50c2AsXG4gICAgICAgICAgdGVtcGxhdGVGaWxlOiAndGVtcGxhdGVzL3VzZS1jYXNlcy9zaGFyZWQvdXNlLWNhc2UuaW5kZXguaGJzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5kdG9SZXF1aXJlZCA9PT0gJ1knKSB7XG4gICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGAuLi8ke2Nka0ZvbGRlclBhdGh9L3N0YXRlbGVzcy9zcmMvZHRvL3t7a2ViYWJDYXNlIG5hbWV9fS97e2tlYmFiQ2FzZSBuYW1lfX0udHNgLFxuICAgICAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9kdG8vY3JlYXRlLWR0by50cy5oYnMnLFxuICAgICAgICB9KTtcbiAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICBza2lwSWZFeGlzdHM6IHRydWUsXG4gICAgICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVsZXNzL3NyYy9kdG8ve3trZWJhYkNhc2UgbmFtZX19L2luZGV4LnRzYCxcbiAgICAgICAgICB0ZW1wbGF0ZUZpbGU6ICd0ZW1wbGF0ZXMvZHRvL3NoYXJlZC9kdG8uaW5kZXguaGJzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWN0aW9ucztcbiAgICB9LFxuICB9O1xufTtcbiJdfQ==