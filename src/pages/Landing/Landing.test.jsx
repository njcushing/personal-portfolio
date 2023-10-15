/* global describe, test, expect */

import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { forwardRef } from 'react'
import Landing from './Landing.jsx'

import NavigationButton from '@/features/Navigation/components/NavigationButton/NavigationButton.jsx'
import * as verticalScrollToElement from '@/utils/verticalScrollToElement.jsx'


const renderComponent = () => {
    render(<Landing />);
};

vi.mock('@/features/Navigation', () => ({ 
    default: ({
        personalInformationOnClickHandler,
        projectsOnClickHandler,
        technologiesOnClickHandler,
        contactInformationOnClickHandler,
    }) => {
        return (
            <ul>
                <li><NavigationButton
                    text="About Me"
                    onClickHandler={personalInformationOnClickHandler}
                /></li>
                <li><NavigationButton
                    text="My Projects"
                    onClickHandler={projectsOnClickHandler}
                /></li>
                <li><NavigationButton
                    text="Technologies"
                    onClickHandler={technologiesOnClickHandler}
                /></li>
                <li><NavigationButton
                    text="Contact Me"
                    onClickHandler={contactInformationOnClickHandler}
                /></li>
            </ul>
        );
    }
}));

vi.mock('@/features/PersonalInformation', () => ({
    default: forwardRef(function PersonalInformation(props, ref) {
        return <div ref={ref}>Personal Information</div>;
    }),
}));

vi.mock('@/features/Projects', () => ({
    default: forwardRef(function Projects(props, ref) {
        return <div ref={ref}>Projects</div>;
    }),
}));

vi.mock('@/features/Technologies', () => ({
    default: forwardRef(function Projects(props, ref) {
        return <div ref={ref}>Technologies</div>;
    }),
}));

vi.mock('@/features/ContactInformation', () => ({
    default: forwardRef(function ContactInformation(props, ref) {
        return <div ref={ref}>Contact Information</div>;
    }),
}));

vi.mock('@/utils/verticalScrollToElement', () => ({
    default: () => {},
}));

describe("UI/DOM Testing...", () => {
    describe("A Navigation button, when clicked...", () => {
        test("Should invoke the verticalScrollToElement function", async () => {
            const user = userEvent.setup();
            renderComponent();
            const spy = vi.spyOn(verticalScrollToElement, 'default');

            const aboutMeButton = screen.getByRole("link", { name: /About Me/i });
            const myProjectsButton = screen.getByRole("link", { name: /My Projects/i });
            const technologiesButton = screen.getByRole("link", { name: /Technologies/i });
            const contactMeButton = screen.getByRole("link", { name: /Contact Me/i });

            await user.click(aboutMeButton);
            await user.click(myProjectsButton);
            await user.click(technologiesButton);
            await user.click(contactMeButton);

            expect(spy).toHaveBeenCalledTimes(4);
        })
    });
});