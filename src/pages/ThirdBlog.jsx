import meme1 from "../assets/blog3/meme1.webp";
import dockerHub from "../assets/blog3/dockerHub.webp";
import dockerArchitecture from "../assets/blog3/dockerArchitecture.webp";
import dockerVsVM from "../assets/blog3/dockerVsVM.webp";
import dockerVsVM1 from "../assets/blog3/dockerVsVM1.webp";
import bios from "../assets/blog3/Bios.jpg";
import landingImage from "../assets/blog3/landingImage.webp";
import dockerCompatability from "../assets/blog3/dockerCompatibility.webp";
import { useEffect } from "react";
import Terminal from "../components/Terminal";
import ImageContainer from "../components/imageContainer";

export default function ThirdBlog() {
  useEffect(() => {
    document.title = "Introduction to Docker";
  });

  return (
    <div className="w-screen h-screen text-lg flex flex-col items-center overflow-y-scroll p-4 bg-neutral-50">
      <h1 className="text-3xl font-medium my-10">Introduction to Docker</h1>
      <img
        className="w-full lg:w-2/3 2xl:w-1/2"
        src={landingImage}
        alt="an image of a docker logo"
      />
      <div className="w-full lg:w-2/3 2xl:w-1/2 flex flex-col items-start mt-4 mb-2">
        <h2 className="text-3xl font-medium mb-2">Content</h2>
        <ul>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ How does docker works ?</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Benefits</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ How to install Docker ?</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Diffrence between Docker and a Virtual machine</a>
          </li>
          <li className="text-lg font-normal ml-2 mb-2">
            <a href="">⚫ Learn Docker CLI</a>
          </li>
          <li>
            <a className="text-lg font-normal ml-2 mb-2" href="">
              ⚫ Let's Create a Dockerfile
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2 my-2">
        <h2 className="text-3xl font-medium my-2">Introduction</h2>
        <p className="text-lg">
          Have you ever sent a friend a code, only to have it not work on his
          computer? Or perhaps you encountered an issue when attempting to run a
          code on your computer that was functioning flawlessly on your friend's
          computer? If so, you're not the only one. This is a typical issue that
          all developers deal with. The code on both machines is not operating
          in the same environment, which is the cause of this issue.
        </p>
        <div className="flex justify-center my-4">
          <img src={meme1} alt="a meme about docker" className="w-1/2" />
        </div>
        <p className="text-lg">
          This is where docker comes into play. Docker is a tool that allows
          developers <em> to create, deploy, and run </em> applications by using
          containers. Containers allow a developer to package up an application
          with all of the parts it needs, such as libraries and other
          dependencies, and ship it all out as one package. This ensures that
          the code will run in the same environment on every machine.
          <br />
          In this blog, we will learn about docker and how it works.
        </p>
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2 my-2">
        <h2 className="text-3xl font-medium my-2"> Benefits</h2>
        <p className="text-lg">
          Docker is increasingly popular because containers are:
          <ul className="list-disc ml-4">
            <li>
              <span className="font-bold text-xl">Flexible:</span>
              <br /> Even the most complex applications can be containerized.
            </li>
            <ImageContainer
              image={dockerCompatability}
              text="Diffrent programing languages and frameworks compatible with docker"
            />
            <li>
              <span className="font-bold text-xl">Lightweight:</span>
              <br /> Containers leverage and share the host kernel.
            </li>
            <ImageContainer
              image={dockerArchitecture}
              text="Docker architcture"
              style={"w-2/3"}
            />
            <li>
              <span className="font-bold text-xl">Interchangeable:</span>
              <br /> You can deploy updates and upgrades on-the-fly.
            </li>
            <li>
              <span className="font-bold text-xl">Portable:</span>
              <br /> You can build locally, deploy to the cloud, and run
              anywhere.
            </li>
            <ImageContainer image={dockerHub} text="Dockerhub" />
          </ul>
        </p>
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2 my-2">
        <h2 className="text-3xl font-medium my-2">How to install Docker ?</h2>
        <h3 className="text-xl font-medium">On windows :</h3>
        <p className="">
          First of all, you need to enable WSL 2 feature on your windows.
        </p>
        <ul className="list-disc ml-4 my-4">
          <li>
            <span className="font-bold text-xl">Step 1:</span>
            <br /> Run this command in powershell as an administrator:
          </li>
          <Terminal title={"CMD"} commands={["wsl --install"]} />
          <li>
            <span className="font-bold text-xl">Step 2:</span>
            <br />
            Enable Hardware virtualization in BIOS settings.
          </li>
          <ImageContainer image={bios} text="BIOS Panel" style="w-2/3" />
          <li>
            <span className="font-bold text-xl">Step 3:</span>
            <br />
            Download and install Docker Desktop from the official website. Here
            is the link:
            <br />
            <a
              href="https://docs.docker.com/desktop/install/windows-install/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-800"
            >
              Install Docker Desktop
            </a>
          </li>
        </ul>
        <h3 className="text-xl font-medium">On Linux ( ubuntu ) :</h3>
        <p className="text-lg">
          You can install docker on ubuntu by running the following commands in
          your terminal:
        </p>
        <Terminal
          title={"Terminal"}
          commands={[
            "sudo apt-get update",
            "sudo apt-get install ca-certificates curl",
            "sudo install -m 0755 -d /etc/apt/keyrings",
            "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc",
            "sudo chmod a+r /etc/apt/keyrings/docker.asc",
            "sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin",
          ]}
        />
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2 my-2">
        <h2 className="text-3xl font-medium my-2">
          Diffrence between Docker and Virtual machine
        </h2>
        <img src={dockerVsVM1} alt="docker vs vm image" className="my-4" />
        <h3 className="text-2xl font-medium">Architecture</h3>
        <p className="text-lg">
          Both docker and virtual machines have their own architecture. The VM
          is the emulation of a physical computer inside a host machine. It uses
          a component called hypervisor that runs on top the host system to
          manage and control diffrent VMs. Each Vm has its own OS. On the other
          hand, Unlike a VM, Docker containers do not boot up their own guest
          OS. Rather, they run on top of the host operating system. This is
          facilitated by a docker engine.
        </p>
        <img src={dockerVsVM} alt="docker vs vm image" className="my-4" />
        <h3 className="text-2xl font-medium">Performance</h3>
        <p className="text-lg">
          Virtual machines are <em> more ressource intensive </em> than docker
          containers. This is because each VM runs its own OS and has ressources
          such as memory and CPU allocated to it permanently. On the other hand,
          Docker containers share the host OS kernel and do not require a
          hypervisor. This makes them <em> more lightweight</em> and
          <em> faster </em>than VMs.
        </p>
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2 my-2">
        <h2 className="text-3xl font-medium">Docker Cli</h2>
        <p className="text-lg">
          Let's learn together Docker Commands. Docker CLI is a command line
          tool that allows you to interact with Docker. You can use it to build,
          run, and manage containers. Here are some of the most commonly used
          commands:
        </p>
        <ul className="list-disc my-2 ml-4">
          <li className="text-xl font-medium mb-2"> Image commands</li>
          <ul className="list-disc my-2 ml-4">
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker images :</span> Display the
              list of images
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker image build :</span> Build an
              image from a Dockerfile
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker image pull :</span> Download
              an image from Dockerhub
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="text-lg font-medium mb-2">
                Docker image push :
              </span>{" "}
              Upload image to Dockerhub
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker rmi :</span> Delete an image
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker image prune : </span> Delete
              all unused images
            </li>
          </ul>
        </ul>
        <ul className="list-disc my-2 ml-4">
          <li className="text-xl font-medium mb-2"> Container commands</li>
          <ul className="list-disc my-2 ml-4">
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker ps :</span> Display the list
              of running containers
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker run :</span> Run a container
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker start :</span> Start a
              container
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker stop :</span> Stop a
              container
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker rm :</span> Delete a
              container
            </li>
            <li className="text-lg font-normal mb-2">
              <span className="font-medium">docker container prune :</span>{" "}
              Delete all unused containers
            </li>
          </ul>
        </ul>
        <p className="text-lg">
          This is just a small part of the Docker CLI. There are many other
          commands that you can use to manage your containers and images. You
          can find the full list of commands on the official documentation.{" "}
          <a
            className="text-blue-800"
            href="https://docs.docker.com/engine/reference/commandline/cli/"
            target="_blank"
            rel="noreferrer"
          >
            Here.
          </a>
        </p>
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2 my-2">
        <h2 className="text-3xl font-medium">Let's create a Dockerfile</h2>
        <p className="text-lg">
          In the last section we spoke about creating an image using a
          dockerfile, but what is a dockerfile exactly? <br />
          A Dockerfile is a text document that contains all the commands a user
          could call on the command line to assemble an image. It is basically a
          blueprint for building a docker image. <br />
          Here is an example of a Dockerfile:
        </p>
        <br />
        <div className="w-full bg-neutral-100 p-4 rounded-lg my-4">
          <pre>
            <code className="text-lg">
              FROM node:21
              <br /># Set the working directory inside the container
              <br />
              WORKDIR /app
              <br />
              # Copy package.json and package-lock.json to the working directory
              <br />
              COPY package*.json ./
              <br />
              # Install application dependencies
              <br />
              RUN npm install
              <br />
              # Copy the entire application source code to the working directory
              <br />
              COPY . .<br />
              # Expose the port that your Nest.js application will run on
              <br />
              EXPOSE 3000
              <br />
              # Command to run your Nest.js application
              <br />
              CMD ["npm", "run", "start:prod"]
              <br />
            </code>
          </pre>
        </div>
      </div>
      <div className="w-full lg:w-2/3 2xl:w-1/2 my-2">
        <h2 className="text-3xl font-medium">Conclusion</h2>
        <p className="text-lg">
          Docker is a powerful tool that allows developers to create, deploy,
          and run applications using containers. It is increasingly popular
          because it is flexible, lightweight, interchangeable, and portable.
          Docker containers are more lightweight and faster than virtual
          machines, and they share the host OS kernel. Docker CLI is a command
          line tool that allows you to interact with Docker. You can use it to
          build, run, and manage containers. A Dockerfile is a text document
          that contains all the commands a user could call on the command line
          to assemble an image. It is basically a blueprint for building a
          docker image.
        </p>
      </div>
    </div>
  );
}
