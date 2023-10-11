/* global describe, test, expect */

import { vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import DeviconsAnchor from './DeviconsAnchor'

describe("UI/DOM Testing...", () => {
    describe("The anchor element...", () => {
        test(`Should have an accessible name (aria-label) attribute whose value
         is the same as the provided 'ariaLabel' prop's value`, () => {
            render(
                <DeviconsAnchor
                    href="https://www.a.com/"
                    ariaLabel="test"
                    src="a"
                    alt="a"
                />
            );
            const anchor = screen.getByRole("link", { name: /test/i });
            expect(anchor).toBeInTheDocument;
        });
        test(`Should have an href attribute whose value is the same as the
         provided 'href' prop's value`, () => {
            render(
                <DeviconsAnchor
                    href="https://www.a.com/"
                    ariaLabel="test"
                    src="a"
                    alt="a"
                />
            );
            const anchor = screen.getByRole("link", { name: /test/i });
            expect(anchor.href).toBe("https://www.a.com/");
        });
    });
    describe("The image element...", () => {
        test(`Should have a src attribute whose value is the same as the
        provided 'src' prop's value`, () => {
            render(
                <DeviconsAnchor
                    href="https://www.a.com/"
                    ariaLabel="test"
                    src="https://www.b.com/"
                    alt="a"
                />
            );
            const icon = screen.getByRole("img");
            expect(icon.src).toBe("https://www.b.com/");
        });
        test(`Should have an alt attribute whose value is the same as the
        provided 'alt' prop's value`, () => {
            render(
                <DeviconsAnchor
                    href="https://www.a.com/"
                    ariaLabel="test"
                    src="https://www.b.com/"
                    alt="test text"
                />
            );
            const icon = screen.getByRole("img");
            expect(icon.alt).toBe("test text");
        });
    });
});