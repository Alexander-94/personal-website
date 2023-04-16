import Languages from "./atoms/Languages";
import LatestProjects from "./atoms/LatestProjects";
import Skills from "./atoms/Skills";
import Experience from "./atoms/Experience";
import Expertise from "./atoms/Expertise";
import Interests from "./atoms/Interests";
import Courses from "./atoms/Courses";
import Head from "./atoms/Head";
import LatestProjectsFull from "./atoms/LatestProjectsFull";

const MainContent = () => {
  return (
    <div>
      <div className="fixed -z-10 w-full h-full bg-cover bg-[url('/images/backBlur.png')]"></div>
      <div>
        <div className="grid md:flex mx-auto md:w-[1300px] text-zinc-400">
          <div
            id="left_column"
            className="grid rounded-[5px] m-[10px] md:m-[10px] p-[30px] bg-zinc-800 w-[115%] md:w-[55%]"
          >
            <Head captionColor="text-zinc-100" hoverTextColor="text-zinc-200" />
            <div className="flex flex-row justify-evenly items-start mt-[40px]">
              <div className="w-[30%] mx-[20px]">
                <Skills
                  captionColor="text-zinc-300"
                  hoverTextColor="text-zinc-200"
                />
              </div>
              <div className="w-[40%] mx-[20px]">
                <LatestProjects
                  captionColor="text-zinc-300"
                  hoverTextColor="text-zinc-200"
                />
                <Languages
                  captionColor="text-zinc-300"
                  hoverTextColor="text-zinc-200"
                />
              </div>
              <div className="w-[30%] mx-[20px]">
                <Experience
                  captionColor="text-zinc-300"
                  hoverTextColor="text-zinc-200"
                />
              </div>
            </div>
            <div className="flex flex-row justify-evenly items-start mt-[40px]">
              <div className="w-[30%] mx-[20px]">
                <Expertise
                  captionColor="text-zinc-300"
                  hoverTextColor="text-zinc-200"
                />
              </div>
              <div className="w-[40%] mx-[20px]">
                <Interests
                  captionColor="text-zinc-300"
                  hoverTextColor="text-zinc-200"
                />
              </div>
              <div className="w-[30%] mx-[20px]">
                <Courses
                  captionColor="text-zinc-300"
                  hoverTextColor="text-zinc-200"
                />
              </div>
            </div>
          </div>

          <div id="right_column" className="grid m-[10px] w-[115%] md:w-[45%]">
            <LatestProjectsFull
              captionColor="text-zinc-100"
              hoverTextColor="text-zinc-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
