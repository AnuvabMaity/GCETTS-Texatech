import Navbar from '@/app/components/Navbar';
import Landing from '@/app/components/Landing';
import Events from '@/app/components/Events';
import Sponsors from '@/app/components/Sponsors';
import Timeline from '@/app/components/Timeline';
import About from '@/app/components/About';
import Footer from '@/app/components/Footer';

const Home = () => {
  const techevents = ['Hackathon', 'Design', 'Robo Wars', 'Aptitude Test'];
  const cultevents = ['Debate', 'Extempore', 'Poetry', 'Photography']

  const sponsors = [
    { id: 1, name: "Oerlikon Textile", logo: "https://cdn.brandfetch.io/idd7INCOuX/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { id: 2, name: "Unstop", logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue.svg" },
    { id: 3, name: "Sponsor 3", logo: "emptylink.png" },
    { id: 4, name: "Sponsor 4", logo: "emptylink.png" },
  ];

  return (
    <>
      <Navbar/>
      <Landing/>
      <div className="bg-[url('/images/BG.png')] h-auto w-full bg-cover relative overflow-x-hidden">
        <Sponsors sponsors={sponsors}/>
        <Events heading= 'Technical Events' contents = {techevents} rotation={345}/>
        <Events heading = 'Cultural Events' contents = {cultevents} rotation={15}/>
        <Timeline/>
        <About/>
      </div>
      <Footer/>
    </>
  );
}

export default Home;