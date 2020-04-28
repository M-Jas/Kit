# Styles

The functions to support styles and theming for this project are in the spirit of those provided by `material-ui`. Have a look at their source code for their [styles package](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-styles).

Since their package depends upon JSS we won't be able to use it directly.

## ThemeProvider

This component provides a theme! This should one of the top level providers to your application so that the hook `useStyles` can access the applications theme object from any component.

## makeStyles => useStyles

We have to make to use.

```ts
const useStyles = makeStyles(props?) => {
    return themeObject;
}
```

Then within our components

```
const MyProfile = (props) => {
    const styles = useStyles(props);

    return {
        <View style={styles.myClass} />
    }
}
```
