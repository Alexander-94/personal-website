import Head from 'next/head';
import Image from 'next/image';
import InfoBlock from '../components/info-block';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout home>    
      <Head>
        <title>Personal Website</title>
      </Head>
      <div className="grid grid-cols-2 gap-4 place-content-center mx-[300px]">
        <div className="border border-indigo-600 rounded-lg">
          <Image priority src="/images/profile.png" className={utilStyles.borderCircle} height={144} width={144} alt="blah"/>
        </div>
        <div className="border border-indigo-600 rounded-lg">
          <h1>ALEXANDER YUSHKEVYCH</h1>
          <section className={utilStyles.headingMd}>
            <p>Java developer with strong background in microservices development using Spring Boot.</p>
            <p>Constantly developing my back-end and other technical skills for better product design.</p>
          </section>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mx-[300px]">
        <div className="border border-indigo-600 rounded-lg">
          Skills
          <hr/>
          <p>Java</p>
          <p>Spring Boot</p>
          <p>Hibernate</p>
          <p>Git</p>
          <p>Docker</p>
          <p>SQL</p>
          <p>Linux</p>
        </div>
        <div className="border border-indigo-600 rounded-lg">
          Projects
          <hr/>
        </div>
        <div className="border border-indigo-600 rounded-lg">
          Courses
          <hr/>
          <p>Oracle Database 11g</p>
          May 2019
          <p>Red Hat Linux Essentials</p>
          Oct 2019
          <p>Java Base/Advance/Web</p>
          Feb 2020
        </div>
        <div className="border border-indigo-600 rounded-lg">
          Languages
          <hr/>
          <p>Ukrainian - Native</p>
          <p>Russian - Native</p>
          <p>English - Ielts 7.0</p>
          <p>German - A1</p>
        </div>
        <div className="border border-indigo-600 rounded-lg">
          Links
          <hr/>
          <p>Github</p>
          <p>LinkedIn</p>
        </div>
        <div className="border border-indigo-600 rounded-lg">06</div>
        <div className="border border-indigo-600 rounded-lg">07</div>
        <div className="border border-indigo-600 rounded-lg">08</div>
        <div className="border border-indigo-600 rounded-lg">09</div>
      </div>    
    </Layout>
  );
}
