/* global global, describe, test, expect */

import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProjectPanelParams from './../ProjectPanel/ProjectPanelParams.jsx'
import ProjectList from './ProjectList.jsx'

import * as findGridColumnCount from '../../utils/findGridColumnCount'
import * as animateInViewport from '../../utils/animateInViewport'

const renderComponent = () => {
    render(<ProjectList
        projectCategoryTitle={mockProjectCategoryTitle}
        projects={mockProjects}
        initRowCount={2}
    />);
};

const mockProjectCategoryTitle = "Test Project Name";

const mockProject = {
    ...ProjectPanelParams.defaultProps,
    name: "Project",
    desc: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
    imgSrc: "https://www.a.com/",
    imgAlt: "This is not an image",
    pageUrl: "https://www.b.com/",
    githubUrl: "https://www.c.com/",
};

const mockProjects = [
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
    { ...mockProject },
];

vi.mock('./../ProjectPanel/ProjectPanel', () => ({ 
    default: () => <div>ProjectPanel</div>,
}));

vi.mock('@/components/MaterialSymbolsAnchor/MaterialSymbolsAnchor', () => ({ 
    default: ({ href }) => <a href={href} aria-label="page-link"></a>,
}));

vi.mock('@/components/DeviconsAnchor/DeviconsAnchor', () => ({ 
    default: ({ href }) => <a href={href} aria-label="github-link"></a>,
}));

vi.mock('../../utils/findGridColumnCount', () => ({
    default: () => 2,
}));

const mockScrollEventListener = vi.fn(() => {});
vi.mock('../../utils/animateInViewport', () => ({
    default: () => mockScrollEventListener,
}));

describe("UI/DOM Testing...", () => {
    describe("The window element...", () => {
        test("When resized, should call the 'findGridColumnCount' function", () => {
            renderComponent();
            const spy = vi.spyOn(findGridColumnCount, 'default');
            window.dispatchEvent(new Event('resize'));
            expect(spy).toHaveBeenCalledTimes(1);
        });
        test("When scrolled, should call the 'animateInViewport' function", () => {
            renderComponent();
            mockScrollEventListener.mockClear();
            window.dispatchEvent(new Event('scroll'));
            expect(mockScrollEventListener).toHaveBeenCalledTimes(1);
        });
    });
    describe("The header element containing the project category's name...", () => {
        test(`Should have textContent equal to the provided
         'projectCategoryTitle' prop's value`, () => {
            renderComponent();
            const ele = screen.getByRole("heading", { name: /Test Project Name/i });
            expect(ele).toBeInTheDocument();
        });
    });
    describe("The list containing the projects...", () => {
        test(`Should contain as many items as can fit on the calculated number
         of columns and number of rows provided by the 'initRowCount' prop's
         value`, () => {
            renderComponent();
            const eleList = screen.getAllByText("ProjectPanel");
            expect(eleList.length).toBe(4);
        });
    });
    describe("The 'Show More...' button...", () => {
        test(`Should be visible if not all projects are currently being
         displayed`, () => {
            renderComponent();
            let ele = screen.getByRole("button", { name: "Show More...", });
            expect(ele).toBeInTheDocument();
        });
        test(`Should display another row of elements when clicked`, async () => {
            const user = userEvent.setup();
            renderComponent();
            let showMoreButton = screen.getByRole("button", { name: "Show More...", });
            let eleList = screen.getAllByText("ProjectPanel");
            expect(eleList.length).toBe(4);

            await user.click(showMoreButton);

            eleList = screen.getAllByText("ProjectPanel");
            expect(eleList.length).toBe(6);
        });
        test(`Should not be visible if all projects are currently being
         displayed`, async () => {
            const user = userEvent.setup();
            renderComponent();
            let ele = screen.getByRole("button", { name: "Show More...", });
            expect(ele).toBeInTheDocument();

            await user.click(ele);
            await user.click(ele);
            await user.click(ele);

            expect(ele).not.toBeInTheDocument();
        });
    });
});