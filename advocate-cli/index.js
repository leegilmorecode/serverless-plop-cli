#!/usr/bin/env node
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
import { Plop, run } from 'plop';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import minimist from 'minimist';
import path from 'node:path';
var args = process.argv.slice(2);
var argv = minimist(args);
var __dirname = dirname(fileURLToPath(import.meta.url));
Plop.prepare({
    cwd: argv.cwd,
    configPath: path.join(__dirname, './plopfile.js'),
    preload: argv.preload || [],
    completion: argv.completion,
}, function (env) {
    return Plop.execute(env, function (env) {
        var options = __assign(__assign({}, env), { dest: process.cwd() });
        return run(options, undefined, true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUU3QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFNUIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUQsSUFBSSxDQUFDLE9BQU8sQ0FDVjtJQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztJQUNiLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7SUFDakQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRTtJQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Q0FDNUIsRUFDRCxVQUFDLEdBQUc7SUFDRixPQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRztRQUNwQixJQUFNLE9BQU8seUJBQ1IsR0FBRyxLQUNOLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQ3BCLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztBQU5GLENBTUUsQ0FDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgeyBQbG9wLCBydW4gfSBmcm9tICdwbG9wJztcblxuaW1wb3J0IHsgZGlybmFtZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IG1pbmltaXN0IGZyb20gJ21pbmltaXN0JztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5cbmNvbnN0IGFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG5jb25zdCBhcmd2ID0gbWluaW1pc3QoYXJncyk7XG5cbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKTtcblxuUGxvcC5wcmVwYXJlKFxuICB7XG4gICAgY3dkOiBhcmd2LmN3ZCxcbiAgICBjb25maWdQYXRoOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9wbG9wZmlsZS5qcycpLFxuICAgIHByZWxvYWQ6IGFyZ3YucHJlbG9hZCB8fCBbXSxcbiAgICBjb21wbGV0aW9uOiBhcmd2LmNvbXBsZXRpb24sXG4gIH0sXG4gIChlbnYpID0+XG4gICAgUGxvcC5leGVjdXRlKGVudiwgKGVudikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgLi4uZW52LFxuICAgICAgICBkZXN0OiBwcm9jZXNzLmN3ZCgpLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBydW4ob3B0aW9ucywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9KVxuKTtcbiJdfQ==