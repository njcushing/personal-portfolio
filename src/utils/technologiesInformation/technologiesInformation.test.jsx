/* global global, describe, test, expect */

import { vi } from 'vitest'
import * as technologiesInformation from './technologiesInformation.jsx';

/* Disabling manual console errors */
const consoleErrorFunc = global.console.error;
const suppressManualConsoleError = () => {
    global.console.error = vi.fn(() => {}).mockImplementationOnce(() => {});
};
const resetConsoleError = () => {
    global.console.error = consoleErrorFunc;
};

describe("Method testing...", () => {
    describe("The 'validateTechnologies' function...", () => {
        test(`Should remove technologies not found within a category (when a
         category is specified)`, () => {
            suppressManualConsoleError();
            expect(
                technologiesInformation.validateTechnologies("languages", ["html", "css", "react"])
            ).toStrictEqual(["html", "css"]);
            resetConsoleError();
        });
        test(`Should remove technologies not found within any category (when no
         category is specified)`, () => {
            suppressManualConsoleError();
            expect(
                technologiesInformation.validateTechnologies(null, ["html", "css", "react", "this-is-not-a-real-technology"])
            ).toStrictEqual(["html", "css", "react"]);
            resetConsoleError();
        });
    });
    describe("The 'getCategoryName' function...", () => {
        test("Should return the correct value", () => {
            expect(
                technologiesInformation.getCategoryName("languages")
            ).toBe("Languages");
        })
    });
    describe("The 'getTechnologyInformation' function...", () => {
        test("Should return the correct value", () => {
            expect(
                technologiesInformation.getTechnologyInformation("c")
            ).toStrictEqual(
                {
                    name: "C",
                    svg: <g><path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path></g>,
                    baseColour: "#03599C",
                }
            );
        });
    });
})