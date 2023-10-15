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
    desktopCompatible: false,
    mobileCompatible: false,
    tabletCompatible: false,
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

const MaterialSymbolsIconRenderMock = vi.fn(({ text }) => {
    return <div aria-label="device-compatibility-icon">{text}</div>;
});
vi.mock('@/components/MaterialSymbolsIcon/MaterialSymbolsIcon', () => ({ 
    default: ({ text }) => MaterialSymbolsIconRenderMock({ text }),
}));

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
            renderComponent();
            const ele = screen.getByRole("img", { name: /This is not an image/i });
            expect(ele).toBeInTheDocument();
         });
    });
    describe("The header element containing the project's name...", () => {
        test(`Should have textContent equal to the provided 'name' prop's value`, () => {
            renderComponent();
            const ele = screen.getByRole("heading", { name: /Test/i });
            expect(ele).toBeInTheDocument();
         });
    });
    describe("The list element containing the project's description...", () => {
        test(`Should contain one paragraph element for each entry in the
         provided 'desc' prop's array, the textContent of which should be equal
         to the string value of that entry in the array`, () => {
            renderComponent();
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
    describe("The list containing the device compatibilities...", () => {
        test(`Should contain a 'Desktop Compatible' icon if the
         'desktopCompatible' prop's value is true`, () => {
            MaterialSymbolsIconRenderMock.mockImplementationOnce(() => {
                return <div aria-label="device-compatibility-icon">Computer</div>;
            })
            render(<ProjectPanel params={{ ...mockParams, desktopCompatible: true }} />);
            expect(screen.getByText(/Computer/i)).toBeInTheDocument();
        });
        test(`Should not contain a 'Desktop Compatible' icon if the
         'desktopCompatible' prop's value is false`, () => {
            render(<ProjectPanel params={{ ...mockParams, desktopCompatible: false }} />);
            expect(screen.queryByText(/Computer/i)).not.toBeInTheDocument();
        });
        test(`Should contain a 'Mobile Compatible' icon if the
         'mobileCompatible' prop's value is true`, () => {
            MaterialSymbolsIconRenderMock.mockImplementationOnce(() => {
                return <div aria-label="device-compatibility-icon">Mobile</div>;
            })
            render(<ProjectPanel params={{ ...mockParams, mobileCompatible: true }} />);
            expect(screen.getByText(/Mobile/i)).toBeInTheDocument();
        });
        test(`Should not contain a 'Desktop Compatible' icon if the
         'mobileCompatible' prop's value is false`, () => {
            render(<ProjectPanel params={{ ...mockParams, mobileCompatible: false }} />);
            expect(screen.queryByText(/Mobile/i)).not.toBeInTheDocument();
        });
        test(`Should contain a 'Tablet Compatible' icon if the
         'tabletCompatible' prop's value is true`, () => {
            MaterialSymbolsIconRenderMock.mockImplementationOnce(() => {
                return <div aria-label="device-compatibility-icon">Tablet</div>;
            })
            render(<ProjectPanel params={{ ...mockParams, tabletCompatible: true }} />);
            expect(screen.getByText(/Tablet/i)).toBeInTheDocument();
        });
        test(`Should not contain a 'Desktop Compatible' icon if the
         'tabletCompatible' prop's value is false`, () => {
            render(<ProjectPanel params={{ ...mockParams, tabletCompatible: false }} />);
            expect(screen.queryByText(/Tablet/i)).not.toBeInTheDocument();
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