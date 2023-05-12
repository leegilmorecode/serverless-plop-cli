export var sharedActions = function (cdkFolderPath) {
    return [
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/shared/date-utils.ts"),
            templateFile: 'templates/shared/date-utils.ts.hbs',
        },
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/shared/error-handler.ts"),
            templateFile: 'templates/shared/error-handler.ts.hbs',
        },
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/shared/logger.ts"),
            templateFile: 'templates/shared/logger.ts.hbs',
        },
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/shared/schema-validator.ts"),
            templateFile: 'templates/shared/schema-validator.ts.hbs',
        },
        {
            type: 'add',
            force: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/shared/index.ts"),
            templateFile: 'templates/shared/index.ts.hbs',
        },
    ];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUFDLGFBQXFCO0lBQ2pELE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLElBQUk7WUFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSx3Q0FBcUM7WUFDOUQsWUFBWSxFQUFFLG9DQUFvQztTQUNuRDtRQUNEO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxZQUFZLEVBQUUsSUFBSTtZQUNsQixJQUFJLEVBQUUsYUFBTSxhQUFhLDJDQUF3QztZQUNqRSxZQUFZLEVBQUUsdUNBQXVDO1NBQ3REO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLFlBQVksRUFBRSxJQUFJO1lBQ2xCLElBQUksRUFBRSxhQUFNLGFBQWEsb0NBQWlDO1lBQzFELFlBQVksRUFBRSxnQ0FBZ0M7U0FDL0M7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLElBQUk7WUFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSw4Q0FBMkM7WUFDcEUsWUFBWSxFQUFFLDBDQUEwQztTQUN6RDtRQUNEO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxhQUFNLGFBQWEsbUNBQWdDO1lBQ3pELFlBQVksRUFBRSwrQkFBK0I7U0FDOUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNoYXJlZEFjdGlvbnMgPSAoY2RrRm9sZGVyUGF0aDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICBza2lwSWZFeGlzdHM6IHRydWUsXG4gICAgICBwYXRoOiBgLi4vJHtjZGtGb2xkZXJQYXRofS9zdGF0ZWxlc3Mvc3JjL3NoYXJlZC9kYXRlLXV0aWxzLnRzYCxcbiAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9zaGFyZWQvZGF0ZS11dGlscy50cy5oYnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICBza2lwSWZFeGlzdHM6IHRydWUsXG4gICAgICBwYXRoOiBgLi4vJHtjZGtGb2xkZXJQYXRofS9zdGF0ZWxlc3Mvc3JjL3NoYXJlZC9lcnJvci1oYW5kbGVyLnRzYCxcbiAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9zaGFyZWQvZXJyb3ItaGFuZGxlci50cy5oYnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICBza2lwSWZFeGlzdHM6IHRydWUsXG4gICAgICBwYXRoOiBgLi4vJHtjZGtGb2xkZXJQYXRofS9zdGF0ZWxlc3Mvc3JjL3NoYXJlZC9sb2dnZXIudHNgLFxuICAgICAgdGVtcGxhdGVGaWxlOiAndGVtcGxhdGVzL3NoYXJlZC9sb2dnZXIudHMuaGJzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVsZXNzL3NyYy9zaGFyZWQvc2NoZW1hLXZhbGlkYXRvci50c2AsXG4gICAgICB0ZW1wbGF0ZUZpbGU6ICd0ZW1wbGF0ZXMvc2hhcmVkL3NjaGVtYS12YWxpZGF0b3IudHMuaGJzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgZm9yY2U6IHRydWUsXG4gICAgICBwYXRoOiBgLi4vJHtjZGtGb2xkZXJQYXRofS9zdGF0ZWxlc3Mvc3JjL3NoYXJlZC9pbmRleC50c2AsXG4gICAgICB0ZW1wbGF0ZUZpbGU6ICd0ZW1wbGF0ZXMvc2hhcmVkL2luZGV4LnRzLmhicycsXG4gICAgfSxcbiAgXTtcbn07XG4iXX0=