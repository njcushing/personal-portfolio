/* global describe, test, expect */

import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { useRef } from 'react';
import PersonalInformation from './index.jsx'

const renderComponent = () => {
    const Component = () => {
        const mockRef = useRef(2);
        return <PersonalInformation ref={mockRef} />;
    }
    render(<Component />);
};

const mockScrollEventListener = vi.fn(() => {});
vi.mock('@/utils/animateInViewport', () => ({
    default: () => mockScrollEventListener,
}));

describe("UI/DOM Testing...", () => {
    describe("The window element...", () => {
        test("When scrolled, should call the 'animateInViewport' function", () => {
            renderComponent();
            mockScrollEventListener.mockClear();
            window.dispatchEvent(new Event('scroll'));
            expect(mockScrollEventListener).toHaveBeenCalledTimes(1);
        });
    });
});