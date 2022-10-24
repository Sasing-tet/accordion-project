import "./App.css";
import Accordion from "./accordion_list.js";
import accordionData from "./accordionData.js";

export default function App() {
  return (
    <main>
      <div className="accordion-container">
        <h1>Questions And Answers About Login</h1>
        <section>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
        </section>
      </div>
    </main>
  );
}
