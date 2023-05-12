export var errorActions = function (cdkFolderPath) {
    return [
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/errors/resource-not-found.ts"),
            templateFile: 'templates/errors/resource-not-found.ts.hbs',
        },
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/errors/validation-error.ts"),
            templateFile: 'templates/errors/validation-error.ts.hbs',
        },
        {
            type: 'add',
            force: true,
            path: "../".concat(cdkFolderPath, "/stateless/src/errors/index.ts"),
            templateFile: 'templates/errors/index.ts.hbs',
        },
    ];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRyxVQUFDLGFBQXFCO0lBQ2hELE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLElBQUk7WUFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSxnREFBNkM7WUFDdEUsWUFBWSxFQUFFLDRDQUE0QztTQUMzRDtRQUNEO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxZQUFZLEVBQUUsSUFBSTtZQUNsQixJQUFJLEVBQUUsYUFBTSxhQUFhLDhDQUEyQztZQUNwRSxZQUFZLEVBQUUsMENBQTBDO1NBQ3pEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLGFBQU0sYUFBYSxtQ0FBZ0M7WUFDekQsWUFBWSxFQUFFLCtCQUErQjtTQUM5QztLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXJyb3JBY3Rpb25zID0gKGNka0ZvbGRlclBhdGg6IHN0cmluZykgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVsZXNzL3NyYy9lcnJvcnMvcmVzb3VyY2Utbm90LWZvdW5kLnRzYCxcbiAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9lcnJvcnMvcmVzb3VyY2Utbm90LWZvdW5kLnRzLmhicycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnYWRkJyxcbiAgICAgIHNraXBJZkV4aXN0czogdHJ1ZSxcbiAgICAgIHBhdGg6IGAuLi8ke2Nka0ZvbGRlclBhdGh9L3N0YXRlbGVzcy9zcmMvZXJyb3JzL3ZhbGlkYXRpb24tZXJyb3IudHNgLFxuICAgICAgdGVtcGxhdGVGaWxlOiAndGVtcGxhdGVzL2Vycm9ycy92YWxpZGF0aW9uLWVycm9yLnRzLmhicycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnYWRkJyxcbiAgICAgIGZvcmNlOiB0cnVlLFxuICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVsZXNzL3NyYy9lcnJvcnMvaW5kZXgudHNgLFxuICAgICAgdGVtcGxhdGVGaWxlOiAndGVtcGxhdGVzL2Vycm9ycy9pbmRleC50cy5oYnMnLFxuICAgIH0sXG4gIF07XG59O1xuIl19