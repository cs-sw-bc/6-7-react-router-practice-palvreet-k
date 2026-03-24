# Lesson 7 Assignment – Countries Explorer

Build a multi-page React app using React Router that lets users browse countries and explore them by region.

---

## API Reference

All endpoints are free and require no authentication.

| Purpose | Endpoint |
|---|---|
| All countries (list) | `https://restcountries.com/v3.1/all?fields=name,flags,cca3` |
| Countries by region | `https://restcountries.com/v3.1/region/{region}?fields=name,flags,cca3` |
| Country detail by name | `https://restcountries.com/v3.1/name/{name}` |

Regions available: `africa`, `americas`, `asia`, `europe`, `oceania`

---

## App Structure

```
src/
├── App.jsx
├── pages/
│   ├── Home.jsx
│   ├── CountryDetail.jsx
│   ├── Build.jsx
│   ├── Web.jsx
│   ├── Mobile.jsx
│   └── About.jsx
└── components/
    └── Navbar.jsx
```

---

## Routes

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/country/:name" element={<CountryDetail />} />
  <Route path="/build" element={<Build />}>
    <Route path="web" element={<Web />} />
    <Route path="mobile" element={<Mobile />} />
  </Route>
  <Route path="/about" element={<About />} />
</Routes>
```

---

## Page Requirements

### Home (`/`)
- Fetch all countries from the API on load using `useEffect`
- Display each country as a card showing its **flag** and **name**
- Clicking a card navigates to `/country/:name` — use the country's common name as the URL param
- Show a loading message while data is being fetched

### CountryDetail (`/country/:name`)
- Read the country name from the URL using `useParams`
- Fetch that country's data from the API on load
- Decide what information to display — at minimum show the flag and name
- Include a back button that returns to the previous page using `useNavigate`

### Build (`/build`)
- Display two links: **Build a Web App** and **Build a Mobile App**
- Show a message: *"Select an option to get started"*
- Use `<NavLink>` so the active link is visually highlighted
- Use `<Outlet />` to render the selected child route below the links

### Web (`/build/web`)
- Static page with dummy content about building a country web app
- Suggested content: tools to use (React, Vite), what pages to build, tips for displaying flag images

### Mobile (`/build/mobile`)
- Static page with dummy content about building a country mobile app
- Suggested content: tools to use (React Native, Expo), differences from web, tips for mobile layout

### About (`/about`)
- Static page — write a short description of the app and the API it uses

---

## Completion Checklist

- [ ] `BrowserRouter` set up in `main.jsx`
- [ ] Navbar visible on all pages using `<NavLink>`
- [ ] Home page fetches and displays all countries
- [ ] Clicking a country card navigates to the detail page
- [ ] `useParams` used in `CountryDetail` to read the country name from the URL
- [ ] Back button on detail page uses `useNavigate(-1)`
- [ ] `/build` uses nested routes with `<Outlet />`
- [ ] `Web` and `Mobile` are separate components with their own content
- [ ] Active `<NavLink>` is visually distinct from inactive links
- [ ] Loading state shown while data is fetching
