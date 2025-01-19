import cv from "../data/cv.mjs";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4">
      <h1 className="flex flex-col">
        <span>{cv.title}</span>
        <small>{cv.name}</small>
      </h1>

      <section className="flex flex-col gap-y-2">
        {cv.summary.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="flex flex-col gap-y-2">
        <h2>Experience</h2>
        <ol className="flex flex-col gap-y-2">
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

      <section className="flex flex-col gap-y-2">
        <h2>Education</h2>
        <ol className="flex flex-col gap-y-2">
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
