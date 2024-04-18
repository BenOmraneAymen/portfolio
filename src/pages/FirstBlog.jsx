import oop from "../assets/blog1/oop.avif";
import ranking from "../assets/blog1/ranking.webp";
import compatibility from "../assets/blog1/compatibility.svg";
import jsSyntax from "../assets/blog1/jsSyntax.webp";
import tsSyntax from "../assets/blog1/tsSyntax.webp";
import dataTypes from "../assets/blog1/dataTypes.webp";
import browser from "../assets/blog1/browser.webp";
import tsvsjs from "../assets/blog1/TsvsJs.webp";
import ImageContainer from "../components/imageContainer";
import Terminal from "../components/Terminal";
import { useEffect } from "react";

export default function FirstBlog() {

  useEffect(() => {
    document.title = "Javascript vs Typescript";
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-y-scroll p-4 bg-neutral-50">
      <h1 className="text-5xl text-center font-medium mb-10">Javascript vs Typescript</h1>
      <img
        className="w-full lg:w-2/3 2xl:w-1/2"
        src={tsvsjs}
        alt=""
      />
      <div className="w-full lg:w-2/3 2xl:w-1/2 flex flex-col items-start mt-4 mb-2">
        <h2 className="text-3xl font-medium mb-2">Content</h2>
        <ul>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Similarities</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Diffrences</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Why use Typescript over Javascript?</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Conclusion</a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2">
        <h2 className="text-3xl font-medium my-2">Introduction</h2>
        <p className="">
          As most of you know, Javascript is a popular programming language
          primarily used for web development. It is quite old being created in
          1995. JavaScript is a client-side language, meaning that it runs in
          the browser and is used to create interactive web pages. Meanwhile,
          Typescript is a programming language backed by Microsoft and created
          in 2012. It is considered the successor of Javascript by a significant
          portion of the programming community after being considered one of the
          fastest-growing languages last year. Like its predecessor, typescript
          is mostly used in web development and has garnered a large following
          in the last years.
        </p>
      </div>
      <div className="w-full p-4 lg:p-0 lg:w-2/3 2xl:w-1/2 flex flex-col items-start my-2">
        <h2 className="text-3xl font-medium my-2">Similarties</h2>
        <p className="text-lg">
          JavaScript and TypeScript share many similarities due to TypeScript
          being a superset of JavaScript.
        </p>
        <ul>
          <li className="text-2xl">
            <span className="font-medium text-2xl">1.</span>Syntax:
          </li>
          <p className="text-lg mx-3 py-2 ">
            This may be an obvious similarity given that typescript is basically
            an extension of javascript. Both programming languages share a very
            similar syntax aside from some minute differences. This means that
            developers who are familiar with either of them can quickly start
            writing code in the other.
          </p>
          <div className="flex flex-col lg:flex-row justify-between  ">
            <ImageContainer image={jsSyntax} text="Javascript Syntax" />
            <ImageContainer image={tsSyntax} text="Typescript Syntax" />
          </div>
          <li className="text-2xl">
            <span className="font-medium text-2xl">2.</span>Open-Source
            Community:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Both languages have large and active open-source communities, which
            create and maintain libraries and frameworks that make it easier to
            build complex web applications.
          </p>
          <ImageContainer
            image={ranking}
            text="Stackoverflow Ranking of the most popular languages in 2023"
          />
          <li className="text-2xl">
            <span className="font-medium text-2xl">3.</span>Browser
            compatibility:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Being two languages mainly used in web development, both TypeScript
            and JavaScript are supported by all major web browsers.Typescript is
            compiled to JavaScript, so it can run in any browser that supports
            JavaScript.
          </p>
          <ImageContainer
            image={browser}
            text="Typescript is compatible with all major browsers"
          />
          <li className="text-2xl">
            <span className="font-medium text-2xl">4.</span>Object-Oriented
            Programming:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Both Javascript and Typescript support Object-Oriented
            Programming(OOP) concepts such as classes, objects, and inheritance.
          </p>
          <ImageContainer
            image={oop}
            text="Diffrent OOP terms in both languages"
          />
          <li className="text-2xl">
            <span className="font-medium text-2xl">5.</span>Dom manipulation:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Both languages can manipulate the Document Object Model(DOM) used to
            create dynamic web pages.
          </p>
        </ul>
        <h2 className="text-3xl font-medium my-2">Diffrences</h2>
        <p className="text-lg">
          JavaScript and TypeScript may share many similarities, but there are
          some differences between the two.
        </p>
        <ul>
          <li className="text-2xl">
            <span className="font-medium text-2xl">1.</span>Type system:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Javascript, as most know, is a dynamically-typed language. this
            means that the type of a variable is determined at runtime. On the
            Flipside, typescript is statically-typed which means variable types
            are known at compile time.
          </p>
          <div className="flex justify-between">
            <ImageContainer
              image={dataTypes}
              text="Diffrent data types in Typescript"
            />
          </div>
          <li className="text-2xl">
            <span className="font-medium text-2xl">2.</span>Compilation:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Typescript is compiled to Javascript before it can be run while
            JavaScript does not require compilation and is interpreted directly
            by the browser. This makes Javascript much faster.
          </p>
          <ImageContainer
            image={compatibility}
            text="Typescript and Javascript execution process"
          />
        </ul>
        <h2 className="text-3xl font-medium my-2">
          Why use Typescript over Javascript?
        </h2>
        <p className="text-lg">
          After having a look at the similarities and differences, you can
          conclude that both Javascript and Typescript have a lot in common.
          This begs the question: Why learn Typescript? The short answer is
          typescript, despite its steep learning curve, helps developers write
          better code. Let’s dig a little deeper.
        </p>
        <ul>
          <li className="text-lg py-3">
            <span className="font-medium text-2xl px-2">1.</span>The type system
            implemented in Typescript helps programmers catch multiple errors in
            development that might cause problems during runtime. This feature
            is called type safety.
          </li>
          <li className="text-lg py-3">
            <span className="font-medium text-2xl px-2">2.</span>Being a
            statically-typed language, Typescript code tends to be
            self-documenting and easier to understand as variable types provide
            some needed clarity and more information about the code. This may
            come in handy when working in teams where developers are expected to
            read each other code.
          </li>
          <li className="text-lg py-3">
            <span className="font-medium text-2xl px-2">3.</span>Typescript offers
            better scalability than Javascript, which makes it the go-to when
            working on large projects. This advantage is due to Typescript
            implementing some features such as interfaces and generics.
          </li>
        </ul>
        <h2 className="text-3xl font-medium my-2">
          Should we replace Javascript with Typescript?
        </h2>
        <p className="text-lg">
          With all these benefits and advantages, should we stop using
          Javascript and switch to Typescript? The short answer is no.
          Typescript does not replace JavaScript completely. In general,
          Typescript provides a more robust and scalable option for large
          projects where the potential for errors is high. Meanwhile, Javascript
          embraces flexibility above all else, which makes it easier to develop
          small to medium-sized projects without sticking to the same rules.
          Javascript is also easier and faster to run.
        </p>
        <h2 className="text-3xl font-medium my-2">Conclusion</h2>
        <p className="text-lg">
          In this article, we took a look at both Javascript and Typescript,
          their similarities and differences. We also learned that Typescript is
          basically an extension of Javascript. It was developed for large
          projects that transplied to Javascript. We also reviewed that
          Javascript is still the way to go when developing small and medium
          applications.
        </p>
      </div>
    </div>
  );
}
