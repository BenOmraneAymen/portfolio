import { useEffect } from "react";
import tailwind from "../assets/blog2/tailwind.webp";
import ImageContainer from "../components/imageContainer";
import Terminal from "../components/Terminal";
import learningCurve from "../assets/blog2/learning-curve.png";
import { ToastContainer } from "react-toastify";

export default function SecondBlog() {
  useEffect(() => {
    document.title = "Tailwind Css";
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-y-scroll p-4 bg-neutral-50">
      <h1 className="text-5xl font-medium mb-10">
        Introduction to Tailwind Css
      </h1>
      <img className="w-full lg:w-1/2" src={tailwind} alt="" />
      <div className="w-1/2 flex flex-col items-start mt-4 mb-2">
        <h2 className="text-3xl font-medium mb-2">Content</h2>
        <ul>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Benefits</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ installation</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Tutorial</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Conclusion</a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-medium my-2">Introduction</h2>
        <p className="">
          Tailwind CSS is a popular utility-first CSS framework that allows you
          to build custom designs without ever leaving your HTML. Some of you
          might say <em>"Sounds like inline styles" </em> but it's not. It uses
          utility classes to style your HTML elements. Unlike other CSS
          frameworks like Bootstrap, it is a highly customizable, low-level CSS
          framework that gives you all of the building blocks you need to build
          bespoke designs without any annoying opinionated styles you have to
          fight to override.
        </p>
        <h3 className="text-xl font-semibold">Note</h3>
        <p>This site is built using Tailwind.</p>
      </div>
      <div className="w-1/2 flex flex-col items-start my-2">
        <h2 className="text-3xl font-medium my-2">Benefits</h2>
        <p className="text-lg">
          Using Tailwind CSS may sound like a hassle, but it has many benefits
          that make it highly worth it.
        </p>
        <ul>
          <li className="text-2xl">
            <span className="font-medium text-2xl">1.</span>Easy to learn:
          </li>
          <p className="text-lg mx-3 py-2 ">
            This may not be obvious at first glance, but Tailwind CSS is easy to
            learn. If you are familiar with CSS, you will find it easy to
            understand and use Tailwind CSS. It is also easy to install and
            configure. From my own experience, I was able to learn it on the go
            while working on a project and after a few days, I was able to use
            it without any problems.
          </p>
          <ImageContainer
            image={learningCurve}
            text="Tailwind Learning curve"
          />
          <div className="flex justify-between"></div>
          <li className="text-2xl">
            <span className="font-medium text-2xl">2.</span>Faster development:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Tailwind CSS allows you to build custom designs without ever leaving
            your HTML. This means that you don't have to switch between your
            HTML and CSS files to style your elements. This makes the
            development process much faster. Tailwind also helps you avoid
            writing custom CSS, which can be time-consuming. Tailwind save you a
            lot of time and effort naming classes especially in big projects.
          </p>

          <li className="text-2xl">
            <span className="font-medium text-2xl">3.</span>Highly customizable:
          </li>
          <p className="text-lg mx-3 py-2 ">
            unlike other CSS frameworks like Bootstrap, Tailwind CSS is a highly
            customizable framework. Developers can tailor the framework to match
            their project's design requirements by configuring colors, spacing,
            typography, and more.
          </p>

          <li className="text-2xl">
            <span className="font-medium text-2xl">4.</span>Responsive Made
            easy:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Tailwind CSS makes it easy to create responsive designs. It provides
            a set of utility classes that can be used to create responsive
            designs. For example, you can use the class
            <em>text-lg md:text-2xl</em> to set the font size to 2xl on medium
            screens and larger screens while setting it to lg on small screens.
            We will talk more about this in the tutorial section.
          </p>

          <li className="text-2xl">
            <span className="font-medium text-2xl">5.</span>Better code
            maintainability:
          </li>
          <p className="text-lg mx-3 py-2 ">
            The utility-first approach can lead to more maintainable code. Since
            styles are directly applied in the markup, it's often easier to
            understand the relationship between styles and HTML elements, making
            maintenance and updates more straightforward.
          </p>
          <li className="text-2xl">
            <span className="font-medium text-2xl">5.</span>Lighter CSS File
            Size:
          </li>
          <p className="text-lg mx-3 py-2 ">
            Tailwind is designed to be as modular as possible. When configured
            properly and used in conjunction with build tools, it can eliminate
            unused styles from the final production CSS, resulting in a smaller
            file size and improved page load performance.
          </p>
        </ul>
        <h2 className="text-3xl font-medium my-2">Installation</h2>
        <p className="text-lg">
          Now we get to the fun part. In this section, we will learn how to
          install and configure Tailwind CSS. Like i already mentioned, it is
          easy to install and configure. we will be using npm to install
          Tailwind CSS. If you don't have npm installed, you can install it from
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            className="font-semibold"
          >
            here
          </a>
          .
        </p>
        <p className="text-lg my-2">
          <span className="text-xl font-semibold">1.</span> First of all we need
          to install Tailwind CSS and its dependencies.
          <br />
          Enter your project folder and open your terminal and run the following
          command:
        </p>
        <Terminal
          title="Terminal"
          commands={["> npm install tailwindcss", "> npx tailwindcss init"]}
        />
        <p className="text-lg my-2">
          <span className="text-xl font-semibold">2.</span>Add the paths to all
          of your template files in your tailwind.config.js file. For this
          tutorial, we will be using the default paths. If you are using a
          different folder structure, you will need to add the paths to your
          files. For this tutorial also we will be using tailwind in html and js
          files only. If you are using other file types, you will need to add
          them to the content array.
        </p>
        <Terminal
          title="tailwind.config.js"
          commands={[
            "module.exports = {",
            '  content: ["./src/**/*.{html,js}"]',
            "theme: {",
            "   extend: {},",
            " },",
            " plugins: [],",
            "}",
          ]}
        />
        <p className="text-lg my-2">
          <span className="text-xl font-semibold">3.</span>Add the @tailwind
          directives for each of Tailwind layers to your main CSS file.
        </p>
        <Terminal
          title="style.css"
          commands={[
            "@tailwind base;",
            "@tailwind components;",
            "@tailwind utilities;",
          ]}
        />
        <p className="text-lg my-2">
          <span className="text-xl font-semibold">4.</span>Run the CLI tool to
          scan your template files for classes and build your CSS.
        </p>
        <Terminal
          title="Terminal"
          commands={["> npx tailwindcss build style.css -o output.css"]}
        />
        <p className="text-lg my-2">
          <span className="text-xl font-semibold">5.</span>Add your compiled CSS
          file to the head tag and start using Tailwind's utility classes to
          style your content.
        </p>
        <Terminal
          title="index.html"
          commands={[
            "<head>",
            '<link href="/dist/output.css" rel="stylesheet">',
            "</head>",
          ]}
        />
        <h3 className="text-lg">
          <span className="text-xl font-semibold"> Congratulations</span>, now
          you can use tailwind in your HTML file.
        </h3>
        <h2 className="text-3xl font-medium my-2">Conclusion</h2>
        <p className="text-lg">
          In this article, we took a look at Tailwind CSS and its benefits. We
          also learned how to install and configure Tailwind CSS. I hope you
          found this article useful.Soon, i will add a detailed tailwind
          tutorial so stay tuned. If you have any questions or suggestions, feel
          free to contact me.
        </p>
      </div>
      <ToastContainer limit={3} />
    </div>
  );
}
