/* global describe, test, expect */

import { vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import MaterialSymbolsIcon from './MaterialSymbolsIcon'

const renderComponent = () => {
    render(
        <MaterialSymbolsIcon
            ariaLabel="test"
            text="test text"
        />
    );
}

describe("UI/DOM Testing...", () => {
    describe("The anchor element...", () => {
        test(`Should have an accessible name (aria-label) attribute whose value
         is the same as the provided 'ariaLabel' prop's value`, () => {
            renderComponent();
            const anchor = screen.getByLabelText(/test/i);
            expect(anchor).toBeInTheDocument;
        });
    });
    describe("The div element containing the text...", () => {
        test(`Should have textContent equal to the provided 'text' prop's value`, () => {
            renderComponent();
            expect(screen.getByText(/test text/i)).toBeInTheDocument();
        });
    });
});