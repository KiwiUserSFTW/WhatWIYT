import React from "react";
import renderer from "react-test-renderer";
import DialogInfo from "../components/UI/DialogInfo.tsx";
import TestProvider from './tests_tools/TestProvider.js'
const initialFaceData = {
    clouds: {
        all: 0
    },
    coord: {
        lon: 13.4105,
        lat: 52.5244
    },
    dt: 1683835750,
    id: 295015,
    main: {
        temp: 18.17,
        feels_like: 17.32,
        temp_min: 16.66,
        temp_max: 18.88,
        pressure: 1013
    },
    name: "Berlin",
    sys: {
        country: 'DE',
        timezone: 7200,
        sunrise: 1683775046,
        sunset: 1683830887
    },
    visibility: 10000,
    wind: {
        speed: 4.02,
        deg: 84
    }
};

test("DialogInfo was correctly", () => {
    const tree = renderer
        .create(
            <TestProvider>
                <DialogInfo data={initialFaceData} setDialogOpen={jest.fn()} dialogOpen = {true} />
            </TestProvider>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});