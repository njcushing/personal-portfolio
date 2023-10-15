/* global describe, test, expect */

import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import * as React from 'react';
import TechnologiesList from './TechnologiesList.jsx'

const renderComponent = () => {
    render(<TechnologiesList
        category="languages"
        technologies={["html", "css", "javascript"]}
    />);
};

vi.mock('./../TechnologyPanel/TechnologyPanel', () => ({ 
    default: ({ technologyID }) => <div>{technologyID}</div>,
}));

const mockScrollEventListener = vi.fn(() => {});
vi.mock('@/utils/animateInViewport/animateInViewport', () => ({
    default: () => mockScrollEventListener,
}));

const validateTechnologiesMock = vi.fn((category, technologies) => ["html", "css", "javascript"]);
const getCategoryNameMock = vi.fn((category) => "Languages");
vi.mock('@/utils/technologiesInformation/technologiesInformation', async () => { 
    const actual = await vi.importActual("@/utils/technologiesInformation/technologiesInformation");
    return {
        ...actual,
        validateTechnologies: (
            category, technologies
        ) => validateTechnologiesMock(category, technologies),
        getCategoryName: (category) => getCategoryNameMock(category),

        /*
            This function is used to validate propTypes within the component, so
            I'm returning "languages" as a valid category to prevent console
            errors for the sake of testing.
        */
        technologiesCategories: () => ["languages"],
    };
});

describe("When the component is mounted...", () => {
    describe("The 'validateTechnologies' function should be called...", () => {
        test("With the provided 'category' and 'technologies' props' values", () => {
            validateTechnologiesMock.mockClear();
            renderComponent();
            expect(validateTechnologiesMock).toHaveBeenCalledWith(
                "languages", ["html", "css", "javascript"]
            );
        });
    });
});
describe("UI/DOM Testing...", () => {
    describe("The window element...", () => {
        describe("When scrolled...", () => {
            test("Should call the 'animateInViewport' function", () => {
                renderComponent();
                mockScrollEventListener.mockClear();
                window.dispatchEvent(new Event('scroll'));
                expect(mockScrollEventListener).toHaveBeenCalledTimes(1);
            });
        });
    });
    describe("The header element containing the technologies' category name...", () => {
        test(`Should have textContent equal to the return value of the
         'getCategoryName' function`, () => {
            getCategoryNameMock.mockClear();
            renderComponent();
            expect(getCategoryNameMock).toHaveBeenCalledWith("languages");
            const ele = screen.getByRole("heading", { name: /Languages/i });
            expect(ele).toBeInTheDocument();
        });
    });
    describe("The list containing the technologies...", () => {
        test(`Should contain as many items as there are valid technologies
         returned by the 'validateTechnologies' function`, () => {
            validateTechnologiesMock.mockClear();
            renderComponent();
            const ele = screen.getByRole("list");
            expect(ele.children.length).toBe(3);
        });
        test(`Even if some are removed`, () => {
            validateTechnologiesMock.mockClear();
            validateTechnologiesMock.mockReturnValueOnce(["html", "css"]);
            renderComponent();
            const ele = screen.getByRole("list");
            expect(ele.children.length).toBe(2);
        });
    });
});