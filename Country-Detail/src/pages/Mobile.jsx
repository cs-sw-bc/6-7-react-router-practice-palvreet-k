export default function MobileBuildPage() {
  return (
    <div>
      <h1>📱 Building a Country Mobile App</h1>

      <section>
        <h2>🛠️ Tools to Use</h2>
        <ul>
          <li>React Native – build native mobile apps using React</li>
          <li>Expo – simplifies development and testing</li>
          <li>REST Countries API – fetch country data</li>
          <li>React Navigation – handle screen navigation</li>
        </ul>
      </section>

      <section>
        <h2>🌐 Key Differences from Web</h2>
        <ul>
          <li>No HTML/CSS – use React Native components like View and Text</li>
          <li>Navigation uses stacks and tabs instead of routes</li>
          <li>Styling uses JavaScript objects instead of CSS files</li>
          <li>Performance considerations are more important on mobile devices</li>
        </ul>
      </section>

      <section>
        <h2>📐 Tips for Mobile Layout</h2>
        <ul>
          <li>Use Flexbox for responsive layouts</li>
          <li>Design for different screen sizes</li>
          <li>Keep UI simple and touch-friendly</li>
          <li>Use ScrollView or FlatList for long content</li>
        </ul>
      </section>
    </div>
  );
}