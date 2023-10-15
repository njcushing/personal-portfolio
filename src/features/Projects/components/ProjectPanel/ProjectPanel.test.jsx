/* global describe, test, expect */

import { vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProjectPanelParams from './ProjectPanelParams.jsx'
import ProjectPanel from './ProjectPanel.jsx'

const renderComponent = () => {
    render(<ProjectPanel params={mockParams} />);
};

const mockParams = {
    ...ProjectPanelParams.defaultProps,
    name: "Test",
    desc: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
    imgSrc: "https://www.a.com/",
    imgAlt: "This is not an image",
    technologies: ["html", "css", "javascript"],
    pageUrl: "https://www.b.com/",
    githubUrl: "https://www.c.com/",
}

vi.mock('./../TechnologyPanel/TechnologyPanel', () => ({ 
    default: ({ technologyID }) => <div>{technologyID}</div>,
}));

const validateTechnologiesMock = vi.fn((category, technologies) => ["html", "css", "javascript"]);
vi.mock('@/utils/technologiesInformation/technologiesInformation', async () => { 
    const actual = await vi.importActual("@/utils/technologiesInformation/technologiesInformation");
    return {
        ...actual,
        validateTechnologies: (
            category, technologies
        ) => validateTechnologiesMock(category, technologies),
    };
});

vi.mock('@/components/MaterialSymbolsAnchor/MaterialSymbolsAnchor', () => ({ 
    default: ({ href }) => <a href={href} aria-label="page-link"></a>,
}));

vi.mock('@/components/DeviconsAnchor/DeviconsAnchor', () => ({ 
    default: ({ href }) => <a href={href} aria-label="github-link"></a>,
}));

describe("UI/DOM Testing...", () => {
    describe("The img element...", () => {
        test(`Should have src and alt attributes equal to the provided 'imgSrc'
         and 'imgAlt' props' values, respectively`, () => {
            render(<ProjectPanel params={mockParams} />);
            const ele = screen.getByRole("img", { name: /This is not an image/i });
            expect(ele).toBeInTheDocument();
         });
    });
    describe("The header element containing the project's name...", () => {
        test(`Should have textContent equal to the provided 'name' prop's value`, () => {
            render(<ProjectPanel params={mockParams} />);
            const ele = screen.getByRole("heading", { name: /Test/i });
            expect(ele).toBeInTheDocument();
         });
    });
    describe("The list element containing the project's description...", () => {
        test(`Should contain one paragraph element for each entry in the
         provided 'desc' prop's array, the textContent of which should be equal
         to the string value of that entry in the array`, () => {
            render(<ProjectPanel params={mockParams} />);
            expect(screen.getByText(/Paragraph 1/i).tagName).toBe("P");
            expect(screen.getByText(/Paragraph 2/i).tagName).toBe("P");
            expect(screen.getByText(/Paragraph 3/i).tagName).toBe("P");
         });
    });
    describe("The list containing the technologies used...", () => {
        test(`Should contain as many items as there are valid technologies
         returned by the 'validateTechnologies' function`, () => {
            validateTechnologiesMock.mockClear();
            renderComponent();
            const ele = screen.getByRole("list", { name: /Technologies Used/i });
            expect(ele.children.length).toBe(3);
        });
        test(`Even if some are removed`, () => {
            validateTechnologiesMock.mockClear();
            validateTechnologiesMock.mockReturnValueOnce(["html", "css"]);
            renderComponent();
            const ele = screen.getByRole("list", { name: /Technologies Used/i });
            expect(ele.children.length).toBe(2);
        });
    });
    describe(`The MaterialSymbolsAnchor component that links to the project's
       page...`, () => {
        test(`Should have an href attribute equal to the provided 'pageUrl'
         prop's value`, () => {
            render(<ProjectPanel params={mockParams} />);
            const ele = screen.getByRole("link", { name: "page-link" });
            expect(ele.getAttribute("href")).toBe(mockParams.pageUrl);
         });
    });
    describe(`The DeviconsAnchor component that links to the project's GitHub
       page...`, () => {
        test(`Should have an href attribute equal to the provided 'githubUrl'
         prop's value`, () => {
            render(<ProjectPanel params={mockParams} />);
            const ele = screen.getByRole("link", { name: "github-link" });
            expect(ele.getAttribute("href")).toBe(mockParams.githubUrl);
         });
    });
});