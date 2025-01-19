import cv from "../data/cv.mjs";

export default function Home() {
  return (
    <main className="flex flex-col max-w-xl mx-auto">
      <h1 className="flex flex-col">
        <span>{cv.title}</span>
        <small>{cv.name}</small>
      </h1>

      <section>
        {cv.summary.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        <ol>
          {cv.experience.map((exp, index) => (
            <li key={index}>
              <h3 className="flex flex-col mb-1">
                {exp.position} at {exp.company}
                <small>{exp.duration}</small>
              </h3>
              <ul className="ml-3 gap-y-1">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Education</h2>
        <ol>
          {cv.education.map((ed, index) => (
            <li key={index}>
              <h3 className="flex flex-col mb-1">
                {ed.institution}
                <small>
                  {ed.degree} - {ed.graduationYear}
                </small>
              </h3>
            </li>
          ))}
        </ol>
      </section>

      <ul className="flex gap-x-2">
        {cv.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </main>
  );
}
