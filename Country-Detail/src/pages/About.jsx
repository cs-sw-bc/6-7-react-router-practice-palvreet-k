export default function AboutPage() {
  return (
    <div>
      <h1>ℹ️ About This App</h1>

      <section>
        <h2>About the App</h2>
        <p>
          This app lets users explore countries around the world, view details
          like population, region, capital, and see each country’s flag. It’s
          designed to provide a simple, interactive way to learn about different countries.
        </p>
      </section>

      <section>
        <h2>API Used</h2>
        <p>
          The app uses the <strong>REST Countries API</strong> to fetch up-to-date
          country information including names, flags, population, region, and more.
          This allows the app to display accurate and real-time data.
        </p>
      </section>
    </div>
  );
}