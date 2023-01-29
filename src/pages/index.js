import * as React from "react"
import { Layout } from "../components/layout"
import { Introduction, Experience, Skills, Education, NonProjectActivities, PersonalProjects, Languages } from "../components/index"

export const Head = () => (
  <>
    <title>Nikita Vozisov</title>
    <meta name="description" content="Senior Software Engineer" />
  </>
)

const IndexPage = () => {
  return (
    <Layout>
      <h1>Nikita Vozisov</h1>
      <Introduction />
      <Experience />
      <Skills />
      <Education />
      <NonProjectActivities />
      <PersonalProjects />
      <Languages />
    </Layout>
  )
}

export default IndexPage

