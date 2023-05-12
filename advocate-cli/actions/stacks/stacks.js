export var stacksActions = function (cdkFolderPath) {
    return [
        {
            type: 'delete lib folder',
            force: true,
            path: "../".concat(cdkFolderPath, "/lib/"),
            data: {
                cdkFolderPath: cdkFolderPath,
            },
        },
        {
            type: 'add',
            force: true,
            path: "../".concat(cdkFolderPath, "/bin/").concat(cdkFolderPath, ".ts"),
            templateFile: 'templates/bin/bin.template.ts.hbs',
            data: {
                cdkFolderPath: cdkFolderPath,
            },
        },
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateless/stateless.ts"),
            templateFile: 'templates/stacks/stateless.ts.hbs',
            data: {
                cdkFolderPath: cdkFolderPath,
            },
        },
        {
            type: 'add',
            skipIfExists: true,
            path: "../".concat(cdkFolderPath, "/stateful/stateful.ts"),
            templateFile: 'templates/stacks/stateful.ts.hbs',
            data: {
                cdkFolderPath: cdkFolderPath,
            },
        },
    ];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUFDLGFBQXFCO0lBQ2pELE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxtQkFBbUI7WUFDekIsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsYUFBTSxhQUFhLFVBQU87WUFDaEMsSUFBSSxFQUFFO2dCQUNKLGFBQWEsRUFBRSxhQUFhO2FBQzdCO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsYUFBTSxhQUFhLGtCQUFRLGFBQWEsUUFBSztZQUNuRCxZQUFZLEVBQUUsbUNBQW1DO1lBQ2pELElBQUksRUFBRTtnQkFDSixhQUFhLEVBQUUsYUFBYTthQUM3QjtTQUNGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLFlBQVksRUFBRSxJQUFJO1lBQ2xCLElBQUksRUFBRSxhQUFNLGFBQWEsNEJBQXlCO1lBQ2xELFlBQVksRUFBRSxtQ0FBbUM7WUFDakQsSUFBSSxFQUFFO2dCQUNKLGFBQWEsRUFBRSxhQUFhO2FBQzdCO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLElBQUk7WUFDbEIsSUFBSSxFQUFFLGFBQU0sYUFBYSwwQkFBdUI7WUFDaEQsWUFBWSxFQUFFLGtDQUFrQztZQUNoRCxJQUFJLEVBQUU7Z0JBQ0osYUFBYSxFQUFFLGFBQWE7YUFDN0I7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3RhY2tzQWN0aW9ucyA9IChjZGtGb2xkZXJQYXRoOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0eXBlOiAnZGVsZXRlIGxpYiBmb2xkZXInLFxuICAgICAgZm9yY2U6IHRydWUsXG4gICAgICBwYXRoOiBgLi4vJHtjZGtGb2xkZXJQYXRofS9saWIvYCwgLy8gLy8gcGF0aC5iYXNlbmFtZShwcm9jZXNzLmN3ZCgpKVxuICAgICAgZGF0YToge1xuICAgICAgICBjZGtGb2xkZXJQYXRoOiBjZGtGb2xkZXJQYXRoLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgZm9yY2U6IHRydWUsXG4gICAgICBwYXRoOiBgLi4vJHtjZGtGb2xkZXJQYXRofS9iaW4vJHtjZGtGb2xkZXJQYXRofS50c2AsXG4gICAgICB0ZW1wbGF0ZUZpbGU6ICd0ZW1wbGF0ZXMvYmluL2Jpbi50ZW1wbGF0ZS50cy5oYnMnLFxuICAgICAgZGF0YToge1xuICAgICAgICBjZGtGb2xkZXJQYXRoOiBjZGtGb2xkZXJQYXRoLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVsZXNzL3N0YXRlbGVzcy50c2AsXG4gICAgICB0ZW1wbGF0ZUZpbGU6ICd0ZW1wbGF0ZXMvc3RhY2tzL3N0YXRlbGVzcy50cy5oYnMnLFxuICAgICAgZGF0YToge1xuICAgICAgICBjZGtGb2xkZXJQYXRoOiBjZGtGb2xkZXJQYXRoLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgc2tpcElmRXhpc3RzOiB0cnVlLFxuICAgICAgcGF0aDogYC4uLyR7Y2RrRm9sZGVyUGF0aH0vc3RhdGVmdWwvc3RhdGVmdWwudHNgLFxuICAgICAgdGVtcGxhdGVGaWxlOiAndGVtcGxhdGVzL3N0YWNrcy9zdGF0ZWZ1bC50cy5oYnMnLFxuICAgICAgZGF0YToge1xuICAgICAgICBjZGtGb2xkZXJQYXRoOiBjZGtGb2xkZXJQYXRoLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xufTtcbiJdfQ==