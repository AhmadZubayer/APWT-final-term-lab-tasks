# LAB 03
## Global State with Context & Form Validation
**Add a new student registration flow with global context**

> Extends from previous lab — Continue from Lab 02. Integrate Context API and a validated form. Same project, new layer.

### Objective
Extend the Lab 02 dashboard by adding global theme management via the Context API and a fully validated Add Student registration form. By the end, students will have a complete, full-featured React dashboard application built progressively across all three labs.

### Topics Covered
- **createContext & useContext** — creating and consuming context
- **Context Provider pattern** — ThemeContext and StudentContext
- **Form Validation** — inline errors, field rules, and submission handling
- **useState & useEffect** — applied in form and notification flows
- **localStorage persistence** — rehydrating state on page load

### Tasks
1. **ThemeContext — Light/Dark Mode** — Create a ThemeContext using createContext and a ThemeProvider component. Support light and dark themes. Wrap the entire app in the provider. Add a toggle button in DashboardHeader that uses `useContext(ThemeContext)` to switch themes — all components must respond to the theme change.
2. **StudentContext & Refactoring** — Create a StudentContext that holds the global list of students, the search query, sort preference, and favorites. Move all related state from App into this context. Refactor SearchBar, SortControls, and StudentCard to consume state via `useContext` instead of prop drilling.
3. **AddStudentForm with Validation** — Build an AddStudentForm component with fields: Full Name, Student ID, Major, GPA, and Courses (comma-separated). Implement validation: name must be non-empty, ID must be unique and numeric, GPA must be between 0–4.0, major is required. Show inline error messages below each invalid field.
4. **Form Submission & Success Notification** — On successful form submission, add the new student to StudentContext so the dashboard immediately reflects the addition without a page reload. Reset the form after submission and show a success notification using `useEffect` that auto-dismisses after 3 seconds.
5. **Remove Student & localStorage Persistence** — Add a Remove Student button to each StudentCard that removes the student from context. Use `useEffect` to persist the student list to localStorage and rehydrate it on app load, so data survives a page refresh.
