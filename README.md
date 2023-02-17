# Star Rate Component with React Native

This is a simple React Native application that allows users to set a rating and displays it in the form of stars. The application makes use of a reusable `Rating` component that takes in the `note` and `maxNote` as props and renders the stars based on the rating.

## Getting Started

To get started with the application, you can follow the steps below:

1. Clone the repository using the following command:

```
git clone https://github.com/poulpyR2r/star-rate-react-native.git

```

2. Install the dependencies using the following command:

```
npm install

```


3. Start the application using the following command:



4. Run the application on an Android or iOS emulator or a physical device using the Expo app.

## Usage

When the application starts, you will see a form that allows you to set the rating. Once you set the rating and submit the form, the rating will be displayed in the form of stars.

## Components

The application makes use of the following components:

### `StarRate`

The `StarRate` component is the main component of the application. It contains a form that allows users to set the rating and a `Rating` component that displays the rating in the form of stars.

### `Rating`

The `Rating` component is a reusable component that takes in the `note` and `maxNote` as props and displays the rating in the form of stars. It makes use of the `FontAwesomeIcon` component from the `react-native-vector-icons` library to render the stars.

## Styling

The application makes use of the `StyleSheet` component from React Native to style the components. The styles are defined in the `styles` object in the `StarRate.js` file.

## Dependencies

The application makes use of the following dependencies:

- `react`
- `react-native`
- `react-native-vector-icons`

## License

This application is licensed under the MIT license. See the `LICENSE` file for more information.
