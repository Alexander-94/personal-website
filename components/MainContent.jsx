import Image from "next/image";

const MainContent = () => {
  return (
    <div className="bg-zinc-600 h-screen">
      <div className="flex mx-auto w-[1300px]  text-zinc-400">
        <div id="left_column" className="grid m-[10px] p-[30px] bg-zinc-800 w-[60%]">
          <div className="flex">
              <Image className="rounded-full"
                priority
                src="/images/profile.png"
                height={144}
                width={144}
                alt="blah"
              />
            <div className="flex my-auto m-[20px] ">
              <div>
                <p className="font-SecularOne text-4xl text-zinc-100">
                  ALEXANDER YUSHKEVYCH
                </p>
                <br />
                <p className="relative top-[-25px] hover:text-zinc-200 transition delay-75 duration-400">Java Developer</p> 
              </div>
            </div>
          </div>
          <div className="flex my-[20px] mx-auto hover:text-zinc-200 transition delay-75 duration-400">
            <p>
              Java developer with strong background in microservices development
              using Spring Boot.
              <br />
              Constantly developing my back-end and other technical skills for
              better product design.
            </p>
          </div>
          <div className="flex flex-row justify-evenly text-zinc-300">
            <p>Kiev, Ukraine</p>
            <p>alexandery41@gmail.com</p>
            <p>+380 95 157 49 94</p>
            <p><a href="https://t.me/alex641">https://t.me/alex641</a></p>
          </div>
          <div className="mt-[40px] flex flex-row justify-evenly items-start">
            <div id="DevelopmentSkills" className="grid w-[30%] mx-[20px]">
            <p className="text-zinc-300">Development Skills</p>
              <hr />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Java</p>
              <input type="range" min="0" max="100" value="95" className="range h-1 accent-zinc-200" />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Spring Boot</p>
              <input type="range" min="0" max="100" value="93" className="range h-1 accent-zinc-200" />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">SQL</p>
              <input type="range" min="0" max="100" value="90" className="range h-1 accent-zinc-200" />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Git</p>
              <input type="range" min="0" max="100" value="90" className="range h-1 accent-zinc-200" />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Docker</p>
              <input type="range" min="0" max="100" value="75" className="range h-1 accent-zinc-200" />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Hibernate</p>
              <input type="range" min="0" max="100" value="73" className="range h-1 accent-zinc-200" />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Linux</p>
              <input type="range" min="0" max="100" value="68" className="range h-1 accent-zinc-200" />

            </div>
            <div id="LatestProjects" className="grid w-[40%] mx-[20px]">
            <p className="text-zinc-300">Latest Projects</p>
              <hr />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Account maintenance service</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Electronic payment system</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">Payment system migration</p>
            </div>
            <div id="Experience" className="grid w-[30%] mx-[20px] ">
              <p className="text-zinc-300">Experience</p> 
              <hr />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test test</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test test</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">blah</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">blah</p>
            </div>
          </div>
          <div className="mt-[40px] flex flex-row justify-evenly items-start ">
            <div id="Expertise" className="grid w-[30%] mx-[20px]">
              <p className="text-zinc-300">Expertise</p>
              <hr />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test test</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">asdasdadasd a</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">lorem ipsum</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">asddsad asd asd</p>
            </div>
            <div id="Interests" className="grid w-[40%] mx-[20px]">
              <p className="text-zinc-300">Interests</p>
              <hr />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test test test</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test </p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">tese sretes wef</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test</p>
            </div>
            <div id="Rewards" className="grid w-[30%] mx-[20px]">
            <p className="text-zinc-300">Rewards</p>
              <hr />
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test test lorem </p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test</p>
              <p className="hover:text-zinc-200 transition delay-75 duration-400">test</p>
            </div>
          </div>
        </div>
        
        <div id="right_column" className="grid m-[10px] p-[30px] bg-zinc-800 w-[40%] text-zinc-300">
          <div className="relative top-[30px] font-SecularOne text-3xl">Latest Projects</div>
          <div>
            <p className="hover:text-zinc-200 transition delay-75 duration-400">1. Raiffeisen Bank Ukraine, Account maintenance service</p>
          </div>
          <div>
            <p className="">2. Raiffeisen Bank Ukraine, Electronic payment system</p>
          </div>
          <div>
            <p className="">3. Raiffeisen Bank Ukraine, Payment system migration to new platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
