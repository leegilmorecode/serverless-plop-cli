export declare const sharedActions: (cdkFolderPath: string) => ({
    type: string;
    skipIfExists: boolean;
    path: string;
    templateFile: string;
    force?: undefined;
} | {
    type: string;
    force: boolean;
    path: string;
    templateFile: string;
    skipIfExists?: undefined;
})[];
