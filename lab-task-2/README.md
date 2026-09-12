# LAB 02
## State Management, Side Effects & Interactivity
**Make the Student Dashboard interactive with dynamic data**

> Extends from previous lab — Continue from Lab 01. Add state and effects to existing components. Do not start from scratch.

### Objective
Extend the Lab 01 dashboard by introducing interactivity through useState and lifecycle behaviors through useEffect. Students will add search, filtering, and data simulation features to make the dashboard dynamic.

### Topics Covered
- **useState** — managing local component state
- **useEffect** — side effects, data fetching simulation, and cleanup
- **Reusable Components** — SearchBar and SortControls
- **Props & state lifting** — sharing state between parent and children

### Tasks
1. **Simulated API Fetch** — Replace hardcoded student data in App with a `useState` hook. Simulate an API fetch using `useEffect` with `setTimeout` to load student data after 1.5 seconds. Show a loading spinner during data fetch.
2. **Live Search** — Add a live search bar (new SearchBar reusable component) that filters the student list in real-time by name or major using `useState` for the query and derived filtering logic.
3. **Favorite Toggle & State Lifting** — Add a Favorite toggle button inside each StudentCard. Use `useState` inside the card to track the toggle state (icon change, color change). Lift state to App to show a count of total favorites in DashboardHeader.
4. **Dynamic Document Title** — Use `useEffect` to update the browser tab title (`document.title`) to reflect the number of students currently displayed (e.g., `Dashboard — 4 Students`). Update it whenever the search filters change.
5. **Sort Controls** — Create a SortControls reusable component with buttons to sort students by Name (A–Z), GPA (high to low), and Default order. Store sort preference in `useState` and apply the sort before rendering the student list.
