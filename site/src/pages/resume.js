/** @jsx jsx */

import React from "react"
import { motion } from "framer-motion"
import { jsx, css } from "@emotion/core"
import { colors } from "../styles/emotion"
import Layout from "../components/layout"
import octoCat from "../images/github.svg"

const octoLi = css`
  display: flex;

  &::before {
    flex: 1;
    align-self: center;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    background-image: url(${octoCat});
    content: "";
  }
`

const Resume = () => {
  return (
    <Layout>
      <section className="section">
        <h1 className="title is-size-2-desktop">Alex Low</h1>
        <h2 className="subtitle">Front-End Web Developer</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div
          className="content"
          css={css`
            &::before,
            ::after {
              display: block;
              width: 100%;
              height: 2px;
              margin: 1rem 0;
              background: ${colors.lightText};
              content: "";
            }
          `}
        >
          <h2 className="title">Projects</h2>
          <ul className="resume-list">
            <li>
              <div className="level has-text-weight-bold">
                <div className="level-left">
                  <a
                    css={octoLi}
                    href="https://github.com/XanderJL/aluminum-associates"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="highlight-primary">
                      Aluminum Associates
                    </span>
                  </a>
                </div>
                <div className="level-right">November 2019 - Present</div>
              </div>
              <ul>
                <li>Gatsby</li>
                <li>Sanity</li>
                <li>Bulma</li>
              </ul>
            </li>
            <li>
              <div className="level has-text-weight-bold">
                <div className="level-left">
                  <a
                    css={octoLi}
                    href="https://github.com/XanderJL/last-draft"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="highlight-primary">Last Draft Inc.</span>
                  </a>
                </div>
                <div className="level-right">November 2019 - March 2020</div>
              </div>
              <ul>
                <li>Gatsby</li>
                <li>Sanity</li>
                <li>Bulma</li>
              </ul>
            </li>
            <li>
              <div className="level has-text-weight-bold">
                <div className="level-left">
                  <a
                    css={octoLi}
                    href="https://github.com/XanderJL/portfolio"
                    target="_blank"
                    rek="noopener noreferrer"
                  >
                    <span className="highlight-primary">This Site</span>
                  </a>
                </div>
                <div className="level-right">July 2020</div>
              </div>
              <ul>
                <li>Gatsby</li>
                <li>Sanity</li>
                <li>Bulma</li>
                <li>
                  Emotion{" "}
                  <span role="img" aria-label="Bowie emoji">
                    👩‍🎤
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Resume
