export default function WebBuildPage() {
  return (
    <div>
      <h1>🌍 Building a Country Web App</h1>

      <section>
        <h2>🛠️ Tools to Use</h2>
        <ul>
          <li>React – for building interactive UI components</li>
          <li>Vite – for fast development and bundling</li>
          <li>CSS / Tailwind – for styling your app</li>
          <li>REST Countries API – to fetch country data</li>
        </ul>
      </section>

      <section>
        <h2>📄 Pages to Build</h2>
        <ul>
          <li>Home Page – overview and search bar</li>
          <li>Country List – display all countries</li>
          <li>Country Details – show flag, population, region, etc.</li>
          <li>Favorites – save and view selected countries</li>
        </ul>
      </section>

      <section>
        <h2>🏁 Tips for Displaying Flags</h2>
        <ul>
          <li>Use image URLs from APIs like REST Countries</li>
          <li>Set consistent width/height for uniform layout</li>
          <li>Add alt text for accessibility</li>
          <li>Lazy load images for performance</li>
        </ul>
      </section>
    </div>
  );
}