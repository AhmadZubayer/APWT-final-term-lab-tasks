# LAB 01
## React Components, Props & Custom Styling
**Build the static UI shell of a Student Dashboard**

### Objective
Create a static Student Dashboard with reusable React components. Students will learn component decomposition, passing data through props, and applying a consistent design system using custom CSS or CSS Modules.

### Topics Covered
- **React Components** — functional components and JSX
- **Reusable Components** — building generic, configurable UI pieces
- **Props** — passing and validating data between components
- **Styling Components** — custom CSS with CSS variables (design tokens)

### Tasks
1. **StudentCard Component** — Create a StudentCard reusable component that accepts props: `name`, `id`, `avatar`, `gpa`, and `major`. Render at least 4 student cards on the page.
2. **CourseTag Component** — Build a CourseTag component that accepts a `courseName` and `color` prop. It should render a styled pill/badge. Use it inside StudentCard to show enrolled courses.
3. **StatBadge Component** — Create a StatBadge component that shows a label-value pair (e.g., `GPA: 3.8`, `Credits: 90`). Reuse it in at least two different places in the dashboard.
4. **DashboardHeader & Styling** — Build a DashboardHeader component with a title, tagline, and navigation bar. Style the entire application using a custom CSS file — define at least 5 CSS custom properties (variables) for colors, font sizes, and spacing.
5. **App Composition & PropTypes** — Compose all components inside a main App component and ensure proper parent-to-child prop flow. Add PropTypes validation for all components.
