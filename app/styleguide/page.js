export default function Styleguide() {
  return (
    <main className="flex flex-col gap-y-4 max-w-xl mx-auto">
      <h1>Styleguide</h1>
      <section>
        <section className="flex flex-col gap-y-4">
          <h2>Typography</h2>
          <p>
            Typography is essential for creating a clear and accessible design
            system. This section outlines the headings, body text, and other
            typographic elements used in our project. For more details, visit
            our <a href="#full-styleguide">full style guide</a>.
          </p>

          <h1>The quick brown fox jump over the lazy dog</h1>
          <h2>The quick brown fox jump over the lazy dog</h2>
          <h3>The quick brown fox jump over the lazy dog</h3>
          <h4>The quick brown fox jump over the lazy dog</h4>

          <h2>Font Sizes Table</h2>
          <table className="prose dark:prose-invert">
            <thead>
              <tr>
                <th>Element</th>
                <th>Font Size</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heading 1 (h1)</td>
                <td>48px</td>
                <td>
                  <strong>This is a Heading 1</strong>
                </td>
              </tr>
              <tr>
                <td>Body Text</td>
                <td>16px</td>
                <td>This is body text.</td>
              </tr>
              <tr>
                <td>Small Text</td>
                <td>12px</td>
                <td>
                  <small>This is small text.</small>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}
