import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { ToggleTheme } from '../components/ToggleTheme'
import { GitHubIcon } from '../styles/icons/githubIcon'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>NextJS Template with Typescript</title>
      </Head>

      <main>
        <ToggleTheme />
        <h1>NextJS Template with Typescript</h1>

        <footer>
          <a href="https://github.com/Darckfast/nextjs-typescript-template">
            <GitHubIcon></GitHubIcon>
          </a>
        </footer>
      </main>
    </Container>
  )
}

export default Home
