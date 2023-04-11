import Image from "next/image";

export default function Head(props) {
  const itemStyle = `hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="Head">
      <div className="flex">
        <Image
          className="rounded-full"
          priority
          src="/images/profile.png"
          height={144}
          width={144}
          alt="blah"
        />
        <div className="my-auto m-[20px]">
          <div>
            <p className={`font-SecularOne text-4xl ${props.captionColor}`}>
              ALEXANDER YUSHKEVYCH
            </p>
            <br />
            <p className={`relative top-[-25px] ${itemStyle}`}>
              Java Developer
            </p>
          </div>
        </div>
      </div>
      <div className={`my-[20px] mx-auto ${itemStyle}`}>
        <p>
          Java developer with strong background in microservices development
          using Spring Boot.
          <br />
          Constantly developing my back-end and other technical skills for
          better product design.
        </p>
      </div>
      <div className={`flex flex-row justify-evenly ${props.hoverTextColor}`}>
        <p>
          <a
            href="/files/yushkevych.pdf"
            alt="blah"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </p>
        <p>alexandery41@gmail.com</p>
        <p>
          <a href="https://github.com/Alexander-94">GitHub</a>
        </p>
        <p>
          <a href="https://t.me/alex641">https://t.me/alex641</a>
        </p>
      </div>
    </div>
  );
}
