import React from "react";
import renderer from "react-test-renderer";
import Pallete from "../components/UI/Pallets";
import TestProvider from './tests_tools/TestProvider'
import { initialFakeData } from "./tests_tools/initialFakeStates";
test("DialogInfo was correctly", () => {
    const tree = renderer
        .create(
            <TestProvider>
                <Pallete data={initialFakeData} />
            </TestProvider>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});