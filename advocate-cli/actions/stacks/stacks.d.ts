export declare const stacksActions: (cdkFolderPath: string) => ({
    type: string;
    force: boolean;
    path: string;
    data: {
        cdkFolderPath: string;
    };
    templateFile?: undefined;
    skipIfExists?: undefined;
} | {
    type: string;
    force: boolean;
    path: string;
    templateFile: string;
    data: {
        cdkFolderPath: string;
    };
    skipIfExists?: undefined;
} | {
    type: string;
    skipIfExists: boolean;
    path: string;
    templateFile: string;
    data: {
        cdkFolderPath: string;
    };
    force?: undefined;
})[];
