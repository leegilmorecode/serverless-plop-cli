import { ActionType } from 'plop';
export declare const createFunction: (cdkFolderPath: string) => {
    description: string;
    prompts: ({
        type: string;
        name: string;
        default: string;
        message: string;
        choices?: undefined;
        validate?: undefined;
    } | {
        type: string;
        name: string;
        default: string;
        choices: {
            name: string;
            value: string;
        }[];
        validate: (value: string) => boolean;
        message: string;
    } | {
        type: string;
        name: string;
        message: string;
        when(context: any): boolean;
        default?: undefined;
        choices?: undefined;
        validate?: undefined;
    } | {
        type: string;
        name: string;
        default: number;
        message: string;
        choices?: undefined;
        validate?: undefined;
    })[];
    actions: (data: any) => ActionType[];
};
