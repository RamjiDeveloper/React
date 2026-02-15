import React from 'react'
import ProfileCard from './components/ProfileCard'


function App() {
  const socialMediaUpdates = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    logoName: "Facebook",
    postTime: "2025-12-10T09:30:00Z",
    version: "Facebook v21.4",
    aboutVersion: "Improved Reels performance, new creator monetization tools, and enhanced privacy controls."
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png",
    logoName: "Instagram",
    postTime: "2025-12-09T14:15:00Z",
    version: "Instagram v314.0",
    aboutVersion: "Introduced AI-powered caption suggestions and better photo editing presets."
  },
  {
    logo: "https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492396.png",
    logoName: "X (Twitter)",
    postTime: "2025-12-08T18:45:00Z",
    version: "X v11.2",
    aboutVersion: "Added long-form posts, improved search relevance, and creator analytics updates."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg",
    logoName: "LinkedIn",
    postTime: "2025-12-07T11:00:00Z",
    version: "LinkedIn v9.6",
    aboutVersion: "Enhanced job matching algorithm and new company page insights."
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/023/741/177/non_2x/snapchat-logo-icon-social-media-icon-free-png.png",
    logoName: "Snapchat",
    postTime: "2025-12-06T20:10:00Z",
    version: "Snapchat v12.80",
    aboutVersion: "New AR lenses, faster camera launch, and improved chat reactions."
  },
  {
    logo: "https://img.freepik.com/premium-vector/tiktok-app-icon-social-media-logo_277909-647.jpg?semt=ais_hybrid&w=740&q=80",
    logoName: "TikTok",
    postTime: "2025-12-05T16:40:00Z",
    version: "TikTok v35.1",
    aboutVersion: "Expanded video length options, better content discovery, and creator fund updates."
  },
  {
    logo: "https://img.freepik.com/premium-vector/round-youtube-logo-isolated-white-background_469489-983.jpg?semt=ais_hybrid&w=740&q=80",
    logoName: "YouTube",
    postTime: "2025-12-04T10:25:00Z",
    version: "YouTube v19.48",
    aboutVersion: "New Shorts analytics, improved live streaming stability, and UI refinements."
  }
];

  return (
    <div className='parent'>
      {socialMediaUpdates.map(function(elem, idx){
        return <div key={idx}>
          <ProfileCard logo = {elem.logo} version = {elem.version} name = {elem.logoName} post = {elem.postTime} about = {elem.aboutVersion} />
        </div>
      })}
      
    </div>
  )
}

export default App
