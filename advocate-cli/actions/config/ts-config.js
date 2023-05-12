export var tsConfigActions = function (cdkFolderPath) {
    return [
        {
            type: 'add',
            force: true,
            path: "../".concat(cdkFolderPath, "/tsconfig.json"),
            templateFile: 'templates/tsconfig.json.hbs',
        },
    ];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHMtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRyxVQUFDLGFBQXFCO0lBQ25ELE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsYUFBTSxhQUFhLG1CQUFnQjtZQUN6QyxZQUFZLEVBQUUsNkJBQTZCO1NBQzVDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICdwbG9wJztcblxuZXhwb3J0IGNvbnN0IHRzQ29uZmlnQWN0aW9ucyA9IChjZGtGb2xkZXJQYXRoOiBzdHJpbmcpOiBBY3Rpb25UeXBlW10gPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgZm9yY2U6IHRydWUsXG4gICAgICBwYXRoOiBgLi4vJHtjZGtGb2xkZXJQYXRofS90c2NvbmZpZy5qc29uYCxcbiAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy90c2NvbmZpZy5qc29uLmhicycsXG4gICAgfSxcbiAgXTtcbn07XG4iXX0=