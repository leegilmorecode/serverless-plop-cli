export declare const errorActions: (cdkFolderPath: string) => ({
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
