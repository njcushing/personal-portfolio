/* global describe, test, expect */

import { vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import MaterialSymbolsAnchor from './MaterialSymbolsAnchor'

describe("UI/DOM Testing...", () => {
    describe("The anchor element...", () => {
        test(`Should have an accessible name (aria-label) attribute whose value
         is the same as the provided 'ariaLabel' prop's value`, () => {
            render(
                <MaterialSymbolsAnchor
                    href="https://www.a.com/"
                    ariaLabel="test"
                    text="test text"
                />
            );
            const anchor = screen.getByRole("link", { name: /test/i });
            expect(anchor).toBeInTheDocument;
        });
        test(`Should have an href attribute whose value is the same as the
         provided 'href' prop's value`, () => {
            render(
                <MaterialSymbolsAnchor
                    href="https://www.a.com/"
                    ariaLabel="test"
                    text="test text"
                />
            );
            const anchor = screen.getByRole("link", { name: /test/i });
            expect(anchor.href).toBe("https://www.a.com/");
        });
    });
    describe("The div element containing the text...", () => {
        test(`Should have textContent equal to the provided 'text' prop's value`, () => {
            render(
                <MaterialSymbolsAnchor
                    href="https://www.a.com/"
                    ariaLabel="test"
                    text="test text"
                />
            );
            const anchor = screen.getByRole("listitem");
            expect(anchor.textContent).toBe("test text");
        });
    });
});