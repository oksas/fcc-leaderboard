# Free Code Camp Leaderboard
A small React app that fetches data on [Free Code Camp](https://www.freecodecamp.com)'s top users, from [an external API](https://fcctop100.herokuapp.com/api/fccusers/top/recent), and displays them to the user in a custom interface. The list can be sorted either by recent points or all-time points.

## ⚛ React Component Breakdown

### Leaderboard Container
Fetches data and holds application state. Displays `<LoadingSpinner>` if data is not yet loaded, and `<Leaderboard>` once data has been loaded.

### LoadingSpinner
Displays a loading spinner animation (🎉 surprise! 🎉).

### Leaderboard
Displays list title, `<LeaderboardTop>`, and `<LeaderboardList>`.

### LeaderboardTop
Displays 4 `<LeaderboardCell>` elements, passing in the cell title and style.

### LeaderboardCell
Receives child props to display contents of the cell, and also receives `style` prop that is used for the [react-css-modules](https://github.com/gajus/react-css-modules) `styleName` prop, so that a single `<LeaderboardCell>` component can be reused with variable styles specified by a parent component.

### LeaderboardList
Maps over `items` prop to display a series of `<LeaderboardItem>`s.

### LeaderboardItem
Represents a single "row" in the actual list of data. Displays 4 `<LeaderboardCell>` elements, passing in the appropriate user data for each cell.
