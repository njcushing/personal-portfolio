import { vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import MaterialSymbolsButton from './MaterialSymbolsButton'

describe("UI/DOM Testing...", () => {
    describe("The button element...", () => {
        test(`Should have the same textContent as the provided 'text' prop's
         value`, () => {
            render(<BrowserRouter><MaterialSymbolsButton text="Example" /></BrowserRouter>);
            const button = screen.getByRole("button", { name: /Example/i });
            expect(button).toBeInTheDocument();
        });
        test(`When clicked, should invoke the provided callback function`, async () => {
            const user = userEvent.setup();
            const callback = vi.fn();
            
            render(<BrowserRouter><MaterialSymbolsButton onClickHandler={callback} /></BrowserRouter>);
            const button = screen.getByRole("button", { name: /Button/i });

            await user.click(button);

            expect(callback).toHaveBeenCalled();
        });
    });
});