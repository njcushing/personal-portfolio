import { vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProjectPanelParams from './../ProjectPanel/ProjectPanelParams.jsx'
import ProjectList from './ProjectList.jsx'
import MaterialSymbolsAnchor from '@/components/MaterialSymbolsAnchor/MaterialSymbolsAnchor'
import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor'

const mockProjectCategoryTitle = "Test Project Name";

const mockProject = {
    ...ProjectPanelParams.defaultProps,
    name: "Project",
    desc: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
    imgSrc: "https://www.a.com/",
    imgAlt: "This is not an image",
    pageUrl: "https://www.b.com/",
    githubUrl: "https://www.c.com/",
}

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
    default: ({ params }) => {
        return <div>ProjectPanel</div>;
    },
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

describe("UI/DOM Testing...", () => {
    describe("The header element containing the project category's name...", () => {
        test(`Should have textContent equal to the provided
         'projectCategoryTitle' prop's value`, () => {
            render(<ProjectList
                projectCategoryTitle={mockProjectCategoryTitle}
                projects={mockProjects}
                initRowCount={2}
            />);
            const ele = screen.getByRole("heading", { name: /Test Project Name/i });
            expect(ele).toBeInTheDocument();
        });
    });
    describe("The list containing the projects...", () => {
        test(`Should contain as many items as can fit on the calculated number
         of columns and number of rows provided by the 'initRowCount' prop's
         value`, () => {
            render(<ProjectList
                projectCategoryTitle={mockProjectCategoryTitle}
                projects={mockProjects}
                initRowCount={2}
            />);
            const eleList = screen.getAllByText("ProjectPanel");
            expect(eleList.length).toBe(4);
        });
    });
    describe("The 'Show More...' button...", () => {
        test(`Should be visible if not all projects are currently being
         displayed`, () => {
            render(<ProjectList
                projectCategoryTitle={mockProjectCategoryTitle}
                projects={mockProjects}
                initRowCount={2}
            />);
            let ele = screen.getByRole("button", { name: "Show More...", });
            expect(ele).toBeInTheDocument();
        });
        test(`Should display another row of elements when clicked`, async () => {
            const user = userEvent.setup();
            render(<ProjectList
                projectCategoryTitle={mockProjectCategoryTitle}
                projects={mockProjects}
                initRowCount={2}
            />);
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
            render(<ProjectList
                projectCategoryTitle={mockProjectCategoryTitle}
                projects={mockProjects}
                initRowCount={2}
            />);
            let ele = screen.getByRole("button", { name: "Show More...", });
            expect(ele).toBeInTheDocument();

            await user.click(ele);
            await user.click(ele);
            await user.click(ele);

            expect(ele).not.toBeInTheDocument();
        });
    });
});