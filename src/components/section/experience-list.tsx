import { dataExperience } from "@/data/dataExperience"
import ExperienceUnique from "./expericen-unique"

const ExperienceList = () => {
  return (
    <section className="border-[0.2px] dark:bg-[#242930] mb-4 p-4 rounded-md">
      <ol className="relative border-gray-300 border-s dark:border-gray-700">
        {dataExperience.map((experience) => (
          <li className="mb-10 ms-4" key={experience.id}>
            <div className="absolute border-white dark:border-gray-900 bg-blue-600 dark:bg-blue-300 mt-1.5 border rounded-full w-3 h-3 -start-1.5" />
            <ExperienceUnique
              date={experience.date}
              title={experience.title}
              description={experience.description}
            />
          </li>
        ))}
      </ol>
    </section>

  )
}
export default ExperienceList