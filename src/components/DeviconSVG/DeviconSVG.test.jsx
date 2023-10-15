/* global describe, test, expect */

import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import * as React from 'react';
import DeviconSVG from './DeviconSVG.jsx'

const renderComponent = () => { render(<DeviconSVG technologyID="test_2" />); };

const getTechnologyInformationMock = vi.fn((technologyID) => {
    switch (technologyID) {
        case "test_1": return {
            name: "technology_1",
            svg: "SVG_1",
            baseColour: "colour_1",
        }
        case "test_2": return {
            name: "technology_2",
            svg: "SVG_2",
            baseColour: "colour_2",
        }
        default: return {
            name: "default_name",
            svg: "default_SVG",
            baseColour: "default_colour",
        }
    }
});
vi.mock('@/utils/technologiesInformation/technologiesInformation', async () => { 
    const actual = await vi.importActual("@/utils/technologiesInformation/technologiesInformation");
    return {
        ...actual,
        getTechnologyInformation: (technologyID) => getTechnologyInformationMock(technologyID),
        
        /*
            This function is used to validate propTypes within the component, so
            I'm returning "test_2" as a valid 'technologyID' prop value to
            prevent console errors for the sake of testing.
        */
        allTechnologies: () => ["test_2"],
    };
});

describe("When the component is mounted...", () => {
    describe("The getTechnologyInformation function should be called...", () => {
        test("With the provided 'technologyID' prop's value", () => {
            getTechnologyInformationMock.mockClear();
            renderComponent();
            expect(getTechnologyInformationMock).toHaveBeenCalledWith("test_2");
        });
    });
});

