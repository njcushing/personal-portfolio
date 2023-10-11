/* global describe, test, expect */

import { vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import ButtonBasic from './ButtonBasic.jsx'

describe("UI/DOM Testing...", () => {
    describe("The button (Link) element...", () => {
        test(`Should have the same textContent as the provided 'text' prop's
         value`, () => {
            render(<BrowserRouter><ButtonBasic text="Example" /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Example/i });
            expect(button).toBeInTheDocument();
        });
        test(`When clicked, should invoke the provided callback function`, async () => {
            const user = userEvent.setup();
            const callback = vi.fn();
            
            render(<BrowserRouter><ButtonBasic onClickHandler={callback} /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Button/i });

            await user.click(button);

            expect(callback).toHaveBeenCalled();
        });
        test(`Should not have the 'disabled' attribute by default`, () => {
            render(<BrowserRouter><ButtonBasic enabled={true} /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Button/i });
            expect(button.getAttribute('disabled')).toBeNull();
        });
        test(`Should have the 'disabled' attribute if the 'enabled'
         prop === false`, () => {
            render(<BrowserRouter><ButtonBasic enabled={false} /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Button/i });
            expect(button.getAttribute('disabled')).toBeFalsy();
        });
        test(`Should have a 'border-radius' styling value of '9999px' if
         the 'rounded' prop === 'true'`, () => {
            render(<BrowserRouter><ButtonBasic rounded={true} /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Button/i });
            expect(button.style["border-radius"]).toBe("9999px");
        });
        test(`Should have a 'border-radius' styling value of '0px' if
        the 'rounded' prop === 'true'`, () => {
            render(<BrowserRouter><ButtonBasic rounded={false} /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Button/i });
            expect(button.style["border-radius"]).toBe("0px");
        });
        test(`Should have the 'sel' (selected) attribute with a value
         of 'true' if the 'selected' prop === true`, () => {
            render(<BrowserRouter><ButtonBasic selected={true} /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Button/i });
            expect(button.getAttribute('sel')).toBe("true");
        });
        test(`Should have the 'sel' (selected) attribute with a value
        of 'false' if the 'selected' prop === false`, () => {
            render(<BrowserRouter><ButtonBasic selected={false} /></BrowserRouter>);
            const button = screen.getByRole("link", { name: /Button/i });
            expect(button.getAttribute('sel')).toBe("false");
        });
    });
});