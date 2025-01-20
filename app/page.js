import cv from "../data/cv.mjs";

export default function Home() {
  return (
    <main className="flex flex-col max-w-xl mx-auto gap-y-8">
      <h1 className="flex flex-col gap-y-3">
        <span>{cv.title}</span>
        <small>{cv.name}</small>
      </h1>

      <section className="flex flex-col gap-y-3">
        {cv.summary.map((paragraph, index) => (
          <p dangerouslySetInnerHTML={{ __html: paragraph }} key={index}></p>
        ))}
      </section>

      <section className="flex flex-col gap-y-3">
        <h2>Work</h2>
        <div className="flex flex-col gap-y-3">
          {cv.experience_summary.map((paragraph, index) => (
            <p dangerouslySetInnerHTML={{ __html: paragraph }} key={index}></p>
          ))}
        </div>
        <ol>
          {cv.experience.map((exp, index) => (
            <li
              key={index}
              className="flex justify-between items-center gap-y-2"
            >
              <div>
                {exp.position}
                {` `}
                <span className="text-gray-600">{exp.company}</span>
              </div>
              <div className="text-gray-600">{exp.duration}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-y-3">
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
    </main>
  );
}
