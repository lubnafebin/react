export default function App() {
  return (
    <div>
      <header>
        <nav>
          <img src="logo.png" alt="logo" />
          <span>ReactFacts</span>
        </nav>
      </header>
      <main>
        <h1>React Facts</h1>
        <ul className="facts-list">
          <li>first release in 2013</li>
          <li>created by jordan walke</li>
          <li>maintained by meta</li>
          <li>over 200k stars on github</li>
          <li>powers thousands of enterprise apps,including mobile apps</li>
        </ul>
      </main>
    </div>
  );
}
