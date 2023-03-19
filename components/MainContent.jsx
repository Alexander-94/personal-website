import Image from "next/image";

const MainContent = () => {
  return (
    <div className="flex justify-center">

      <div id="left_column" className="grid border border-black">
        <div className="flex">
          <div className="border border-indigo-600 rounded-lg">
            <Image
              priority
              src="/images/profile.png"
              height={144}
              width={144}
              alt="blah"
            />
          </div>
          <div>
            ALEXANDER YUSHKEVYCH            
          </div>
          <p>Java Developer</p>
        </div>
        <div className="flex flex-col">
          <p>
            Java developer with strong background in microservices development
            using Spring Boot.
          </p>
          <p>
            Constantly developing my back-end and other technical skills for
            better product design.
          </p>
        </div>
        <div className="flex flex-row justify-evenly">
          <p>Kiev, Ukraine</p>
          <p>alexandery41@gmail.com</p>
          <p>+380 95 157 49 94</p>
          <p>blah...</p>
        </div>
        <div className="flex flex-row justify-evenly items-start">
          <div id="DevelopmentSkills" className="grid">
            Development Skills
            <hr />
            <p>Java</p>
            <p>Spring Boot</p>
            <p>Hibernate</p>
            <p>Docker</p>
            <p>SQL</p>
            <p>Linux</p>
            <p>Git</p>
          </div>
          <div id="LatestProjects" className="grid">
            Latest Projects
            <hr />
            <p>
              Raiffeisen Bank Ukraine
              <br />
              Account maintenance service
            </p>
            <p>
              Raiffeisen Bank Ukraine
              <br />
              Electronic payment system
            </p>
            <p>
              Raiffeisen Bank Ukraine
              <br />
              Payment system migration to new platform
            </p>
          </div>
          <div id="Experience" className="grid">
            Experience
            <hr />
            <p>test test</p>
            <p>test test</p>
            <p>blah</p>
            <p>blah</p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-start">
          <div id="Expertise" className="grid">
            Expertise
            <hr />
            <p>test test</p>
            <p>asdasdadasd a</p>
            <p>lorem ipsum</p>
            <p>asddsad asd asd</p>
          </div>
          <div className="grid">
            Interests
            <hr />
            <p>test test test</p>
            <p>test </p>
            <p>tese sretes wef</p>
            <p>test</p>
          </div>
          <div className="grid">
            this
            <hr />
            <p>test test lorem </p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
      </div>

      <div id="right_column" className="grid border border-black">
        <div>Latest Projects</div>
        <div>1. Raiffeisen Bank Ukraine, Account maintenance service</div>
        <div>2. Raiffeisen Bank Ukraine, Electronic payment system</div>
        <div>
          3. Raiffeisen Bank Ukraine, Payment system migration to new platform
        </div>
      </div>
    </div>
  );
};

export default MainContent;
