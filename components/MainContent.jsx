import Image from "next/image";

const EmptyStub = (e) => {};

const MainContent = () => {
  return (
    <div>
      <div className="absolute -z-10 min-w-full min-h-full md:bg-cover bg-[url('/images/backBlur.png')]" />
      <div>
        <div className="grid md:flex mx-auto w-[1300px] text-zinc-400">
          <div
            id="left_column"
            className="grid rounded-[5px] m-[10px] p-[30px] bg-zinc-800 w-[55%]"
          >
            <div className="flex">
              <Image
                className="rounded-full"
                priority
                src="/images/profile.png"
                height={144}
                width={144}
                alt="blah"
              />
              <div className="flex my-auto m-[20px]">
                <div>
                  <p className="font-SecularOne text-4xl text-zinc-100">
                    ALEXANDER YUSHKEVYCH
                  </p>
                  <br />
                  <p className="relative top-[-25px] hover:text-zinc-200 transition delay-75 duration-400">
                    Java Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex my-[20px] mx-auto hover:text-zinc-200 transition delay-75 duration-400">
              <p>
                Java developer with strong background in microservices
                development using Spring Boot.
                <br />
                Constantly developing my back-end and other technical skills for
                better product design.
              </p>
            </div>
            <div className="flex flex-row justify-evenly text-zinc-300">
              <p>Kiev, Ukraine</p>
              <p>alexandery41@gmail.com</p>
              <p>
                <a href="https://github.com/Alexander-94">GitHub</a>
              </p>
              <p>
                <a href="https://t.me/alex641">https://t.me/alex641</a>
              </p>
            </div>
            <div className="mt-[40px] flex flex-row justify-evenly items-start">
              <div id="DevelopmentSkills" className="grid w-[30%] mx-[20px]">
                <p className="text-zinc-300">SKILLS</p>
                <hr />
                <p className="hover:text-zinc-200 transition delay-75 duration-400">
                  Java
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="95"
                  className="range h-1 accent-zinc-200"
                  onChange={EmptyStub}
                />
                <p className="hover:text-zinc-200 transition delay-75 duration-400">
                  Spring Boot
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="93"
                  className="range h-1 accent-zinc-200"
                  onChange={EmptyStub}
                />
                <p className="hover:text-zinc-200 transition delay-75 duration-400">
                  SQL
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="90"
                  className="range h-1 accent-zinc-200"
                  onChange={EmptyStub}
                />
                <p className="hover:text-zinc-200 transition delay-75 duration-400">
                  Git
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="90"
                  className="range h-1 accent-zinc-200"
                  onChange={EmptyStub}
                />
                <p className="hover:text-zinc-200 transition delay-75 duration-400">
                  Docker
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="75"
                  className="range h-1 accent-zinc-200"
                  onChange={EmptyStub}
                />
                <p className="hover:text-zinc-200 transition delay-75 duration-400">
                  Hibernate
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="73"
                  className="range h-1 accent-zinc-200"
                  onChange={EmptyStub}
                />
                <p className="hover:text-zinc-200 transition delay-75 duration-400">
                  Linux
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="68"
                  className="range h-1 accent-zinc-200"
                  onChange={EmptyStub}
                />
              </div>
              <div id="LatestProjects" className="grid w-[40%] mx-[20px]">
                <p className="text-zinc-300">LATEST PROJECTS</p>
                <hr />
                <p className="pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Account maintenance service
                </p>
                <p className="text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Electronic payment system
                </p>
                <p className="text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Payment system migration
                </p>
              </div>
              <div id="Experience" className="grid w-[30%] mx-[20px] ">
                <p className="text-zinc-300">EXPERIENCE</p>
                <hr />
                <p className="pt-1 text-xl hover:text-zinc-200 transition delay-75 duration-400">
                  5+ years
                </p>
                <p className="pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Backend Development
                </p>
                <p className="pt-1 text-xs hover:text-zinc-200 transition delay-75 duration-400">
                  2018-2023
                </p>
              </div>
            </div>
            <div className="mt-[40px] flex flex-row justify-evenly items-start ">
              <div id="Expertise" className="grid w-[30%] mx-[20px]">
                <p className="text-zinc-300">EXPERTISE</p>
                <hr />
                <p className="pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Software architecture
                </p>
                <p className="text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Code refactoring
                </p>
                <p className="text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Unit/Integration testing
                </p>
              </div>
              <div id="Interests" className="grid w-[40%] mx-[20px]">
                <p className="text-zinc-300">INTERESTS</p>
                <hr />
                <p className="pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Clean code
                </p>
                <p className="text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Rollerblading
                </p>
                <p className="text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Front-end
                </p>
                <p className="text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  Latest technology
                </p>
              </div>
              <div id="Courses" className="grid w-[30%] mx-[20px]">
                <p className="text-zinc-300">COURSES</p>
                <hr />
                <p className="pt-1 text-xs hover:text-zinc-200 transition delay-75 duration-400">
                  Java Base/Advanced/Web, Educational center ITEA
                </p>
                <p className="pt-1 text-xs hover:text-zinc-200 transition delay-75 duration-400">
                  Red Hat Linux Essentials, Educational center ITEA
                </p>
                <div className="pt-1 text-xs hover:text-zinc-200 transition delay-75 duration-400">
                  <p>Oracle Database 11g: SQL Workshop,</p>
                  <p>Educational center I-Klass</p>
                </div>
              </div>
            </div>
            <div className="mt-[20px] flex flex-row justify-evenly items-start ">
              <div id="Lanuguages" className="grid w-[30%] mx-[20px]">
                <p className="text-zinc-300">LANGUAGES</p>
                <hr />
                <div className="flex pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  <div className="flex-row w-20">Ukrainian</div>
                  <div className="flex-row">&#8827;native</div>
                </div>
                <div className="flex flex-row pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  <div className="flex-row w-20">Russian</div>
                  <div className="flex-row">&#8827;native</div>
                </div>
                <div className="flex flex-row pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  <div className="flex-row w-20">English</div>
                  <div className="flex-row">&#8827;IELTS 7.0</div>
                </div>
                <div className="flex flex-row pt-1 text-sm hover:text-zinc-200 transition delay-75 duration-400">
                  <div className="flex-row w-20">German</div>
                  <div className="flex-row">&#8827;A1</div>
                </div>
              </div>
              <div id="Interests" className="grid w-[40%] mx-[20px]">
                <p className="text-zinc-300">&nbsp;</p>
                <hr />
              </div>
              <div id="Courses" className="grid w-[30%] mx-[20px]">
                <p className="text-zinc-300">&nbsp;</p>
                <hr />
              </div>
            </div>
          </div>

          <div id="right_column" className="grid m-[10px] w-[45%] ">
            <div className="bg-zinc-800 rounded-[5px] p-[15px] font-SecularOne text-4xl text-zinc-100">
              LATEST PROJECTS
            </div>
            <div className="bg-opacity-0" />
            <div className="bg-zinc-800 rounded-[5px] p-[15px] text-sm text-justify hover:text-zinc-200 transition delay-75 duration-400">
              <p className="text-base text-zinc-100">
                RAIFFEISEN BANK UKRAINE, ACCOUNT MAINTENANCE SERVICE
              </p>
              <hr />
              <p className="pt-1">
                The creation of this app was part of the R&D activity in our
                department.
              </p>
              <p>
                After IT transformation started and new services began to deploy
                in K8S, we decided it would be an exciting approach to call core
                banking API libraries directly from the microservice app.
              </p>
              <p>
                Regarding Java, there are three main options to implement this:
                JNI, JNA, and JNR. We decided to use JNA because there was no
                need to generate C wrappers.
              </p>
              <p>
                The main idea of POC is to split the app into the main
                microservice and Java application. The first part is fully
                integrable with all platform features like Kibana, Prometheus,
                and Boot Admin. The second part is used to call native API.
              </p>
              <p>The design turned out to be successful and was implemented.</p>
              Technologies used: Java 11, Spring Boot, JNA, Docker, SonarQube.
            </div>
            <div className="bg-opacity-0" />
            <div className="bg-zinc-800 rounded-[5px] p-[15px] text-sm text-justify hover:text-zinc-200 transition delay-75 duration-400">
              <p className="text-base text-zinc-100">
                RAIFFEISEN BANK UKRAINE, ELECTRONIC PAYMENT SYSTEM
              </p>
              <hr />
              <p className="pt-1">
                As a team member, I have developed part of the electronic
                system, which handles payment coverage documents.
              </p>
              <p>
                The project's main goal was to implement an electronic payment
                system in the new standard - ISO20022, and develop a new
                application layer using modern tech stacks, such as Java 17,
                Spring Boot, Kafka, Docker, and ArgoCD.
              </p>
            </div>
            <div className="bg-opacity-0" />
            <div className="bg-zinc-800 rounded-[5px] p-[15px] text-sm hover:text-zinc-200 transition delay-75 duration-400">
              <p className="text-base text-zinc-100">
                RAIFFEISEN BANK UKRAINE, PAYMENT SYSTEM MIGRATION
              </p>
              <hr />
              <p className="pt-1">
                The start of this project was inspired by migrating the existing
                payment system to the cloud and the need to implement the
                ISO20022 standard.
              </p>
              <p>
                A set of legacy programs was ported to Maven so that they could
                be integrated into the platform and run in the cloud. Also, I
                created a modern microservice that works as documents exchange
                part of the system, interacting with Kafka.{" "}
              </p>
              <p>The project covered unit and integration tests.</p>
              <p>
                Technologies used: Java 17, Spring Boot, Jsoup, Kafka, Docker,
                and ArgoCD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
