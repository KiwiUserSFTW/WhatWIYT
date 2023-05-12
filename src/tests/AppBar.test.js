import React from "react";
import renderer from "react-test-renderer";
import TestProvider from './tests_tools/TestProvider'
import AppMapsBar from "../components/AppBar";

test('AppBar was correctly', () => {
    const tree = renderer
    .create(
    <TestProvider>
        <AppMapsBar />
    </TestProvider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})