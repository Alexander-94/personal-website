export default function LatestProjectsFull(props) {
  const commonRadius = "bg-zinc-800 rounded-[5px] p-[15px]";
  const itemStyle = `text-sm text-justify ${commonRadius} hover:${props.hoverTextColor} transition delay-75 duration-400`;

  return (
    <div id="LatestProjectsFull" className="grid">
      <div
        className={`font-SecularOne text-4xl ${commonRadius} ${props.captionColor}`}
      >
        LATEST PROJECTS
      </div>
      <div className="bg-opacity-0" />
      <div className={itemStyle}>
        <p className={`text-base ${props.captionColor}`}>
          RAIFFEISEN BANK UKRAINE, ACCOUNT MAINTENANCE SERVICE
        </p>
        <hr />
        <p className="pt-1">
          The creation of this app was part of the R&D activity in our
          department.
        </p>
        <p>
          After IT transformation started and new services began to deploy in
          K8S, we decided it would be an exciting approach to call core banking
          API libraries directly from the microservice app.
        </p>
        <p>
          Regarding Java, there are three main options to implement this: JNI,
          JNA, and JNR. We decided to use JNA because there was no need to
          generate C wrappers.
        </p>
        <p>
          The main idea of POC is to split the app into the main microservice
          and Java application. The first part is fully integrable with all
          platform features like Kibana, Prometheus, and Boot Admin. The second
          part is used to call native API.
        </p>
        <p>The design turned out to be successful and was implemented.</p>
        Technologies used: Java 11, Spring Boot, JNA, Docker, SonarQube.
      </div>
      <div className="bg-opacity-0" />
      <div className={itemStyle}>
        <p className={`text-base ${props.captionColor}`}>
          RAIFFEISEN BANK UKRAINE, ELECTRONIC PAYMENT SYSTEM
        </p>
        <hr />
        <p className="pt-1">
          As a team member, I have developed part of the electronic system,
          which handles payment coverage documents.
        </p>
        <p>
          The project's main goal was to implement an electronic payment system
          in the new standard - ISO20022, and develop a new application layer
          using modern tech stacks, such as Java 17, Spring Boot, Kafka, Docker,
          and ArgoCD.
        </p>
      </div>
      <div className="bg-opacity-0" />
      <div className={itemStyle}>
        <p className={`text-base ${props.captionColor}`}>
          RAIFFEISEN BANK UKRAINE, PAYMENT SYSTEM MIGRATION
        </p>
        <hr />
        <p className="pt-1">
          The start of this project was inspired by migrating the existing
          payment system to the cloud and the need to implement the ISO20022
          standard.
        </p>
        <p>
          A set of legacy programs was ported to Maven so that they could be
          integrated into the platform and run in the cloud. Also, I created a
          modern microservice that works as documents exchange part of the
          system, interacting with Kafka.
        </p>
        <p>The project covered unit and integration tests.</p>
        <p>
          Technologies used: Java 17, Spring Boot, Jsoup, Kafka, Docker, and
          ArgoCD.
        </p>
      </div>
    </div>
  );
}
