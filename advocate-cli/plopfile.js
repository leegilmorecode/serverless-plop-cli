var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as path from 'path';
import { createFunction } from './actions/functions/create-function/create-function.js';
import { errorActions } from './actions/errors/errors.js';
import { executeNpmCommand } from './utils/execute-npm-command.js';
import fs from 'fs';
import { installCdkAppActions } from './actions/installs/install-cdk-app.js';
import { installDepsActions } from './actions/installs/install-deps.js';
import { jestActions } from './actions/config/jest.config.js';
import { sharedActions } from './actions/shared/shared.js';
import { stacksActions } from './actions/stacks/stacks.js';
import { tsConfigActions } from './actions/config/ts-config.js';
var cdkFolderPath = path.basename(process.cwd());
export default function (plop) {
    // create the new cdk app
    plop.setActionType('create the cdk app', function () {
        executeNpmCommand('cdk init app --language typescript');
        return 'new cdk app installing...';
    });
    // install the common deps that we need
    plop.setActionType('install deps', function () {
        executeNpmCommand('npm i uuid @aws-lambda-powertools/metrics @aws-lambda-powertools/tracer @aws-lambda-powertools/logger @middy/core ajv ajv-formats && npm i -D @types/aws-lambda @types/uuid');
        return 'dependencies installing...';
    });
    // delete the lib folder as it contains the single stack that we replace
    // with the stateless and stateful stacks
    plop.setActionType('delete lib folder', function (answers, config) {
        fs.rmSync(config.path, { recursive: true, force: true });
        return "deleted lib folder ".concat(config.path);
    });
    // set the welcome message and the generators
    plop.setWelcomeMessage('please choose an option below:');
    plop.setGenerator('Create a new CDK app', {
        description: 'Create a new CDK app',
        prompts: [],
        actions: __spreadArray([], installCdkAppActions(), true),
    });
    plop.setGenerator('Create all base deps', {
        description: 'Create all of the base shared libs and config files',
        prompts: [],
        actions: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], installDepsActions(), true), errorActions(cdkFolderPath), true), tsConfigActions(cdkFolderPath), true), jestActions(cdkFolderPath), true), sharedActions(cdkFolderPath), true), stacksActions(cdkFolderPath), true),
    });
    plop.setGenerator('Create tsconfig.json', {
        description: 'Create the tsconfig.json with path aliases',
        prompts: [],
        actions: __spreadArray([], tsConfigActions(cdkFolderPath), true),
    });
    plop.setGenerator('Create jest.config.js', {
        description: 'Create the jest.config.js with path aliases',
        prompts: [],
        actions: jestActions(cdkFolderPath),
    });
    plop.setGenerator('Create shared utils', {
        description: 'Create the shared utility functions',
        prompts: [],
        actions: __spreadArray([], sharedActions(cdkFolderPath), true),
    });
    plop.setGenerator('Create lambda adapter', __assign({}, createFunction(cdkFolderPath)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvcGZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbG9wZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3BCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVoRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sQ0FBQyxPQUFPLFdBQVcsSUFBaUI7SUFDeEMseUJBQXlCO0lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUU7UUFDdkMsaUJBQWlCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUN4RCxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsdUNBQXVDO0lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO1FBQ2pDLGlCQUFpQixDQUNmLDZLQUE2SyxDQUM5SyxDQUFDO1FBQ0YsT0FBTyw0QkFBNEIsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNILHdFQUF3RTtJQUN4RSx5Q0FBeUM7SUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3RELEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekQsT0FBTyw2QkFBc0IsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsNkNBQTZDO0lBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUU7UUFDeEMsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sb0JBQU0sb0JBQW9CLEVBQUUsT0FBQztLQUNyQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFO1FBQ3hDLFdBQVcsRUFBRSxxREFBcUQ7UUFDbEUsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLDBGQUNGLGtCQUFrQixFQUFFLFNBQ3BCLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FDM0IsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUM5QixXQUFXLENBQUMsYUFBYSxDQUFDLFNBQzFCLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FDNUIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUNoQztLQUNGLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUU7UUFDeEMsV0FBVyxFQUFFLDRDQUE0QztRQUN6RCxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sb0JBQU0sZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFDO0tBQzdDLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUU7UUFDekMsV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDO0tBQ3BDLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUU7UUFDdkMsV0FBVyxFQUFFLHFDQUFxQztRQUNsRCxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sb0JBQU0sYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFDO0tBQzNDLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLGVBQ3BDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFDaEMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBOb2RlUGxvcEFQSSB9IGZyb20gJ3Bsb3AnO1xuaW1wb3J0IHsgY3JlYXRlRnVuY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMvZnVuY3Rpb25zL2NyZWF0ZS1mdW5jdGlvbi9jcmVhdGUtZnVuY3Rpb24uanMnO1xuaW1wb3J0IHsgZXJyb3JBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zL2Vycm9ycy9lcnJvcnMuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZU5wbUNvbW1hbmQgfSBmcm9tICcuL3V0aWxzL2V4ZWN1dGUtbnBtLWNvbW1hbmQuanMnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGluc3RhbGxDZGtBcHBBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zL2luc3RhbGxzL2luc3RhbGwtY2RrLWFwcC5qcyc7XG5pbXBvcnQgeyBpbnN0YWxsRGVwc0FjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMvaW5zdGFsbHMvaW5zdGFsbC1kZXBzLmpzJztcbmltcG9ydCB7IGplc3RBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zL2NvbmZpZy9qZXN0LmNvbmZpZy5qcyc7XG5pbXBvcnQgeyBzaGFyZWRBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zL3NoYXJlZC9zaGFyZWQuanMnO1xuaW1wb3J0IHsgc3RhY2tzQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucy9zdGFja3Mvc3RhY2tzLmpzJztcbmltcG9ydCB7IHRzQ29uZmlnQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucy9jb25maWcvdHMtY29uZmlnLmpzJztcblxuY29uc3QgY2RrRm9sZGVyUGF0aCA9IHBhdGguYmFzZW5hbWUocHJvY2Vzcy5jd2QoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwbG9wOiBOb2RlUGxvcEFQSSkge1xuICAvLyBjcmVhdGUgdGhlIG5ldyBjZGsgYXBwXG4gIHBsb3Auc2V0QWN0aW9uVHlwZSgnY3JlYXRlIHRoZSBjZGsgYXBwJywgKCkgPT4ge1xuICAgIGV4ZWN1dGVOcG1Db21tYW5kKCdjZGsgaW5pdCBhcHAgLS1sYW5ndWFnZSB0eXBlc2NyaXB0Jyk7XG4gICAgcmV0dXJuICduZXcgY2RrIGFwcCBpbnN0YWxsaW5nLi4uJztcbiAgfSk7XG4gIC8vIGluc3RhbGwgdGhlIGNvbW1vbiBkZXBzIHRoYXQgd2UgbmVlZFxuICBwbG9wLnNldEFjdGlvblR5cGUoJ2luc3RhbGwgZGVwcycsICgpID0+IHtcbiAgICBleGVjdXRlTnBtQ29tbWFuZChcbiAgICAgICducG0gaSB1dWlkIEBhd3MtbGFtYmRhLXBvd2VydG9vbHMvbWV0cmljcyBAYXdzLWxhbWJkYS1wb3dlcnRvb2xzL3RyYWNlciBAYXdzLWxhbWJkYS1wb3dlcnRvb2xzL2xvZ2dlciBAbWlkZHkvY29yZSBhanYgYWp2LWZvcm1hdHMgJiYgbnBtIGkgLUQgQHR5cGVzL2F3cy1sYW1iZGEgQHR5cGVzL3V1aWQnXG4gICAgKTtcbiAgICByZXR1cm4gJ2RlcGVuZGVuY2llcyBpbnN0YWxsaW5nLi4uJztcbiAgfSk7XG4gIC8vIGRlbGV0ZSB0aGUgbGliIGZvbGRlciBhcyBpdCBjb250YWlucyB0aGUgc2luZ2xlIHN0YWNrIHRoYXQgd2UgcmVwbGFjZVxuICAvLyB3aXRoIHRoZSBzdGF0ZWxlc3MgYW5kIHN0YXRlZnVsIHN0YWNrc1xuICBwbG9wLnNldEFjdGlvblR5cGUoJ2RlbGV0ZSBsaWIgZm9sZGVyJywgKGFuc3dlcnMsIGNvbmZpZykgPT4ge1xuICAgIGZzLnJtU3luYyhjb25maWcucGF0aCwgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pO1xuICAgIHJldHVybiBgZGVsZXRlZCBsaWIgZm9sZGVyICR7Y29uZmlnLnBhdGh9YDtcbiAgfSk7XG4gIC8vIHNldCB0aGUgd2VsY29tZSBtZXNzYWdlIGFuZCB0aGUgZ2VuZXJhdG9yc1xuICBwbG9wLnNldFdlbGNvbWVNZXNzYWdlKCdwbGVhc2UgY2hvb3NlIGFuIG9wdGlvbiBiZWxvdzonKTtcbiAgcGxvcC5zZXRHZW5lcmF0b3IoJ0NyZWF0ZSBhIG5ldyBDREsgYXBwJywge1xuICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIGEgbmV3IENESyBhcHAnLFxuICAgIHByb21wdHM6IFtdLFxuICAgIGFjdGlvbnM6IFsuLi5pbnN0YWxsQ2RrQXBwQWN0aW9ucygpXSxcbiAgfSk7XG4gIHBsb3Auc2V0R2VuZXJhdG9yKCdDcmVhdGUgYWxsIGJhc2UgZGVwcycsIHtcbiAgICBkZXNjcmlwdGlvbjogJ0NyZWF0ZSBhbGwgb2YgdGhlIGJhc2Ugc2hhcmVkIGxpYnMgYW5kIGNvbmZpZyBmaWxlcycsXG4gICAgcHJvbXB0czogW10sXG4gICAgYWN0aW9uczogW1xuICAgICAgLi4uaW5zdGFsbERlcHNBY3Rpb25zKCksXG4gICAgICAuLi5lcnJvckFjdGlvbnMoY2RrRm9sZGVyUGF0aCksXG4gICAgICAuLi50c0NvbmZpZ0FjdGlvbnMoY2RrRm9sZGVyUGF0aCksXG4gICAgICAuLi5qZXN0QWN0aW9ucyhjZGtGb2xkZXJQYXRoKSxcbiAgICAgIC4uLnNoYXJlZEFjdGlvbnMoY2RrRm9sZGVyUGF0aCksXG4gICAgICAuLi5zdGFja3NBY3Rpb25zKGNka0ZvbGRlclBhdGgpLFxuICAgIF0sXG4gIH0pO1xuICBwbG9wLnNldEdlbmVyYXRvcignQ3JlYXRlIHRzY29uZmlnLmpzb24nLCB7XG4gICAgZGVzY3JpcHRpb246ICdDcmVhdGUgdGhlIHRzY29uZmlnLmpzb24gd2l0aCBwYXRoIGFsaWFzZXMnLFxuICAgIHByb21wdHM6IFtdLFxuICAgIGFjdGlvbnM6IFsuLi50c0NvbmZpZ0FjdGlvbnMoY2RrRm9sZGVyUGF0aCldLFxuICB9KTtcbiAgcGxvcC5zZXRHZW5lcmF0b3IoJ0NyZWF0ZSBqZXN0LmNvbmZpZy5qcycsIHtcbiAgICBkZXNjcmlwdGlvbjogJ0NyZWF0ZSB0aGUgamVzdC5jb25maWcuanMgd2l0aCBwYXRoIGFsaWFzZXMnLFxuICAgIHByb21wdHM6IFtdLFxuICAgIGFjdGlvbnM6IGplc3RBY3Rpb25zKGNka0ZvbGRlclBhdGgpLFxuICB9KTtcbiAgcGxvcC5zZXRHZW5lcmF0b3IoJ0NyZWF0ZSBzaGFyZWQgdXRpbHMnLCB7XG4gICAgZGVzY3JpcHRpb246ICdDcmVhdGUgdGhlIHNoYXJlZCB1dGlsaXR5IGZ1bmN0aW9ucycsXG4gICAgcHJvbXB0czogW10sXG4gICAgYWN0aW9uczogWy4uLnNoYXJlZEFjdGlvbnMoY2RrRm9sZGVyUGF0aCldLFxuICB9KTtcbiAgcGxvcC5zZXRHZW5lcmF0b3IoJ0NyZWF0ZSBsYW1iZGEgYWRhcHRlcicsIHtcbiAgICAuLi5jcmVhdGVGdW5jdGlvbihjZGtGb2xkZXJQYXRoKSxcbiAgfSk7XG59XG4iXX0=