import React from "react";
import renderer from "react-test-renderer";
import MapsPalete from "../components/Maps";
import TestProvider from './tests_tools/TestProvider'

test('Maps was correctly', () => {
    const tree = renderer
    .create(
    <TestProvider>
        <MapsPalete />
    </TestProvider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})