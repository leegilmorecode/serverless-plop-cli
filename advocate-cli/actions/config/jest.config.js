export var jestActions = function (cdkFolderPath) {
    return [
        {
            type: 'add',
            force: true,
            path: "../".concat(cdkFolderPath, "/jest.config.js"),
            templateFile: 'templates/jest.config.js.hbs',
        },
    ];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqZXN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsVUFBQyxhQUFxQjtJQUMvQyxPQUFPO1FBQ0w7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLGFBQU0sYUFBYSxvQkFBaUI7WUFDMUMsWUFBWSxFQUFFLDhCQUE4QjtTQUM3QztLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgamVzdEFjdGlvbnMgPSAoY2RrRm9sZGVyUGF0aDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICBmb3JjZTogdHJ1ZSxcbiAgICAgIHBhdGg6IGAuLi8ke2Nka0ZvbGRlclBhdGh9L2plc3QuY29uZmlnLmpzYCxcbiAgICAgIHRlbXBsYXRlRmlsZTogJ3RlbXBsYXRlcy9qZXN0LmNvbmZpZy5qcy5oYnMnLFxuICAgIH0sXG4gIF07XG59O1xuIl19