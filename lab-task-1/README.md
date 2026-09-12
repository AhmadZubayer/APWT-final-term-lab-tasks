# LAB 01 - Student Dashboard

A static React dashboard using TSX, arrow functions, basic Tailwind classes, and custom CSS.

## Run

```sh
npm install
npm run dev
```

## Components

- App passes sample data to four StudentCard components and composes the page.
- DashboardHeader receives a title and tagline. Its navigation links jump to page sections.
- StudentCard receives name, id, avatar (initials), gpa, major, credits, and courses.
- CourseTag receives courseName and color to display a course pill.
- StatBadge receives label and value. It is reused in Overview and StudentCard.

## Explaining the code

1. Each component is an arrow function that returns JSX.
2. Props pass information from a parent to a child.
3. Destructuring reads individual values from props.
4. The courses.map arrow function renders one CourseTag per course.
5. TypeScript types check props during development and compilation.
6. Component.propTypes describes runtime validation rules. React 19 does not run these automatically, so checkPropTypes is called explicitly.
7. App accepts no props, so App.propTypes is empty.
8. index.css defines nine CSS variables for shared colors, font size, and spacing.
9. App.css uses the variables; Tailwind classes handle simple layout, sizing, and spacing.
10. md:grid-cols-2 makes the cards use two columns on wider screens.

No state, effects, routing library, or backend is needed for this static lab.

## Checks

```sh
npm run build
npm run lint
```
