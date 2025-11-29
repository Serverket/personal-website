import React from "react";
import PersonalWebsite from "../../components/Projects/CustomProjects/PersonalWebsite";
import DefaultProject from "../../components/Projects/DefaultProject";
import LatestRepos from "../../components/Projects/LatestRepos";
import { Text } from "../../components/Multilanguage/Text";

//Pictures
import ccwFront from "../pictures/ColibriCreativeWeb/ccwFront.webp";
import ccwBack from "../pictures/ColibriCreativeWeb/ccwBack.webp";
import rgcFront from "../pictures/RGC/rgcFront.webp";
import rgcBack from "../pictures/RGC/rgcBack.webp";
import fdFront from "../pictures/DARSE/fdFront.webp";
import fdBack from "../pictures/DARSE/fdBack.webp";
import gcFront from "../pictures/GeContrac/gcFront.webp";
import gcBack from "../pictures/GeContrac/gcBack.webp";
import jdFront from "../pictures/JDRivero/jdFront.webp";
import jdBack from "../pictures/JDRivero/jdBack.webp";

const projectList = [
  <LatestRepos />,

  <DefaultProject
    name={"Colibri Creative Web"}
    imageFront={ccwFront}
    imageBack={ccwBack}
    githubLink={"https://github.com/colibricreativeweb/ccw-web"}
    lockIcon={"icon-lock-open text-md"}
    liveVersionLink={"https://www.colibricreativeweb.com/"}
    showLiveVersion={false}
    projectShortDescription={<Text tid="ccwSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutCcw" />
      </div>
    }
    features={[<Text tid="ccwFeature1" />, <Text tid="ccwFeature2" />, <Text tid="ccwFeature3" />]}
    techStack={[
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white"
            alt="html"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-CSS-311701?style=for-the-badge&color=1e1e2e&logo=css3&logoColor=white"
            alt="css"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-JavaScript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white"
            alt="javascript"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-React-311701?style=for-the-badge&color=1e1e2e&logo=react&logoColor=white"
            alt="react"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-TailwindCSS-311701?style=for-the-badge&color=1e1e2e&logo=tailwindcss&logoColor=white"
            alt="tailwindcss"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Vercel-311701?style=for-the-badge&color=1e1e2e&logo=vercel&logoColor=white"
            alt="vercel"
          />
        ),
      },
    ]}
  />,

  <PersonalWebsite />,

  <DefaultProject
    name={"Rivero's Global Company"}
    imageFront={rgcFront}
    imageBack={rgcBack}
    githubLink={"https://github.com/RiveroVisualGroup/rgcweb-frontend"}
    lockIcon={"icon-lock text-md"}
    liveVersionLink={"https://www.riverosglobalcompany.com/"}
    sourceLabelTid="closedSource"
    projectShortDescription={<Text tid="ltSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutLt1" />
      </div>
    }
    features={[<Text tid="ltFeature1" />, <Text tid="ltFeature2" />]}
    techStack={[
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white"
            alt="html"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-JavaScript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white"
            alt="javascript"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Next-311701?style=for-the-badge&color=1e1e2e&logo=next.js&logoColor=white"
            alt="next"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-React-311701?style=for-the-badge&color=1e1e2e&logo=react&logoColor=white"
            alt="react"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-TailwindCSS-311701?style=for-the-badge&color=1e1e2e&logo=tailwindcss&logoColor=white"
            alt="tailwindcss"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Vercel-311701?style=for-the-badge&color=1e1e2e&logo=vercel&logoColor=white"
            alt="vercel"
          />
        ),
      },
    ]}
  />,
  <DefaultProject
    name={"DARSE"}
    imageFront={fdFront}
    imageBack={fdBack}
    githubLink={"https://github.com/RiveroVisualGroup/rgcweb-frontend"}
    lockIcon={"icon-lock text-md"}
    showLiveVersion={false}
    sourceLabelTid="closedSource"
    projectShortDescription={<Text tid="gcSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutGc1" />
      </div>
    }
    features={[
      <Text tid="gcFeature1" />,
      <Text tid="gcFeature2" />,
      <Text tid="gcFeature3" />,
    ]}
    techStack={[
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white"
            alt="html"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-CSS-311701?style=for-the-badge&color=1e1e2e&logo=css3&logoColor=white"
            alt="css"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-JavaScript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white"
            alt="javascript"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Next-311701?style=for-the-badge&color=1e1e2e&logo=next.js&logoColor=white"
            alt="next"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-React-311701?style=for-the-badge&color=1e1e2e&logo=react&logoColor=white"
            alt="react"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Node-311701?style=for-the-badge&color=1e1e2e&logo=node.js&logoColor=white"
            alt="node"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-TailwindCSS-311701?style=for-the-badge&color=1e1e2e&logo=tailwindcss&logoColor=white"
            alt="tailwindcss"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Vercel-311701?style=for-the-badge&color=1e1e2e&logo=vercel&logoColor=white"
            alt="vercel"
          />
        ),
      },
    ]}
  />,
  <DefaultProject
    name={"GeContrac"}
    imageFront={gcFront}
    imageBack={gcBack}
    githubLink={"https://github.com/RiveroVisualGroup/gecontracweb-frontend"}
    lockIcon={"icon-lock text-md"}
    showLiveVersion={false}
    sourceLabelTid="closedSource"
    projectShortDescription={<Text tid="spSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutSp1" />
      </div>
    }
    features={[
      <Text tid="spFeature1" />,
      <Text tid="spFeature2" />,
      <Text tid="spFeature3" />,
    ]}
    techStack={[
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white"
            alt="html"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-CSS-311701?style=for-the-badge&color=1e1e2e&logo=css3&logoColor=white"
            alt="css"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-JavaScript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white"
            alt="javascript"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Next-311701?style=for-the-badge&color=1e1e2e&logo=next.js&logoColor=white"
            alt="next"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-React-311701?style=for-the-badge&color=1e1e2e&logo=react&logoColor=white"
            alt="react"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-TailwindCSS-311701?style=for-the-badge&color=1e1e2e&logo=tailwindcss&logoColor=white"
            alt="tailwindcss"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-Vercel-311701?style=for-the-badge&color=1e1e2e&logo=vercel&logoColor=white"
            alt="vercel"
          />
        ),
      },
    ]}
  />,
  <DefaultProject
    name={<Text tid="jppHeading" />}
    imageFront={jdFront}
    imageBack={jdBack}
    githubLink={"https://github.com/RiveroVisualGroup/jdriveroweb-frontend"}
    lockIcon={"icon-lock text-md"}
    showLiveVersion={false}
    sourceLabelTid="closedSource"
    projectShortDescription={<Text tid="jppSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutJpp1" />
        <br />
        <br />
        <Text tid="aboutJpp2" />
        <br />
        <br />
        <Text tid="aboutJpp3" />
      </div>
    }
    features={[
      <Text tid="jppFeature1" />,
      <Text tid="jppFeature2" />,
      <Text tid="jppFeature3" />,
    ]}
    techStack={[
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white"
            alt="html"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-css-311701?style=for-the-badge&color=1e1e2e&logo=css3&logoColor=white"
            alt="css"
          />
        ),
      },
      {
        logo: (
          <img
            src="https://img.shields.io/badge/-javascript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white"
            alt="javascript"
          />
        ),
      },
    ]}
  />,
];

export default projectList;
