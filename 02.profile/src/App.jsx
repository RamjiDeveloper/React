import React from 'react'
import ProfileCard from './components/ProfileCard'


function App() {
  const profiles = [
  {
    span: "available",
    pay: "$55-$100/hr",
    profileImage: "https://i.pinimg.com/originals/8e/21/29/8e2129f44804db65316ed3db92cf8552.jpg",
    name: "R. D. J.",
    post: "UI/UX Designer",
    profession: {
      label: "💼Freelancer"
    },
    tags: ["UI", "UX", "Figma", "+4"],
    about: "Creative UI/UX designer with 6+ years of experience designing user-centered digital products.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "non-available",
    pay: "$40-$75/hr",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudm_pwua4E9mmIpsCeffx8KH4_DYue2H70A&s",
    name: "Samantha Lee",
    post: "Mobile Designer",
    profession: {
      label: "⚡Epic Coders"
    },
    tags: ["Mobile", "iOS", "Android", "+2"],
    about: "Mobile-first designer specializing in iOS and Android app interfaces.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "available",
    pay: "$60-$120/hr",
    profileImage: "https://media.gettyimages.com/id/495179828/photo/london-england-dan-carter-of-the-new-zealand-all-blacks-poses-with-the-webb-ellis-cup-after.jpg?s=612x612&w=gi&k=20&c=LVY3xT_EiaN7c0lCSbFLGGQ2vfarlIwlp_zooDkgX1w=",
    name: "Daniel Carter",
    post: "Frontend Developer",
    profession: {
      label: "💻Freelancer"
    },
    tags: ["React", "JavaScript", "UI", "+3"],
    about: "Frontend developer focused on performant and accessible web applications.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "available",
    pay: "$50-$90/hr",
    profileImage: "https://m.media-amazon.com/images/M/MV5BMjAwNzc5MjE0N15BMl5BanBnXkFtZTcwMzUyNTMzNw@@._V1_FMjpg_UX1000_.jpg",
    name: "Emily Watson",
    post: "Graphic Designer",
    profession: {
      label: "🎨Creative Studio"
    },
    tags: ["Branding", "Illustration", "UI", "+5"],
    about: "Graphic designer with a strong passion for branding and visual storytelling.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "non-available",
    pay: "$70-$150/hr",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY48mP_RrEOMRCUTUws1Ltv2oNf7OiwnFh4w&s",
    name: "Michael Brown",
    post: "Product Designer",
    profession: {
      label: "📦Freelancer"
    },
    tags: ["UX", "Research", "Wireframe", "+4"],
    about: "Product designer who bridges business goals with user needs.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "available",
    pay: "$45-$80/hr",
    profileImage: "https://m.media-amazon.com/images/M/MV5BMTU5MzAwODgxNV5BMl5BanBnXkFtZTcwNjQ3NDUxNA@@._V1_FMjpg_UX1000_.jpg",
    name: "Olivia Martinez",
    post: "Photography Designer",
    profession: {
      label: "📷Freelancer"
    },
    tags: ["Photography", "Editing", "UI", "+3"],
    about: "Visual storyteller combining photography with modern digital design.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "available",
    pay: "$65-$110/hr",
    profileImage: "https://media.gettyimages.com/id/72338632/photo/ryan-thompson.jpg?s=1024x1024&w=gi&k=20&c=OGCqPbDtZ0BvVHFl-n0mWHMly9FIruPJ8O6H-HgTboc=",
    name: "Ryan Thompson",
    post: "Web Designer",
    profession: {
      label: "🚀Epic Coders"
    },
    tags: ["Web", "UX", "CSS", "+4"],
    about: "Web designer crafting responsive and user-friendly websites.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "non-available",
    pay: "$80-$140/hr",
    profileImage: "https://media.gettyimages.com/id/98066125/photo/sophia-loren.jpg?s=612x612&w=gi&k=20&c=PoQIN3dsiWWMCCIepS2Mh98izZTnOM7E6GFJ5HhQmUo=",
    name: "Sophia Anderson",
    post: "UX Researcher",
    profession: {
      label: "🔬Research Lab"
    },
    tags: ["Research", "UX", "Testing", "+2"],
    about: "UX researcher turning insights into actionable design strategies.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "available",
    pay: "$50-$95/hr",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pMWhkuydBtMFzE0ahcK1yxO3x2WCMPyaPw&s",
    name: "James Wilson",
    post: "Interaction Designer",
    profession: {
      label: "🧩Freelancer"
    },
    tags: ["Interaction", "Motion", "UX", "+3"],
    about: "Interaction designer focused on micro-interactions and smooth animations.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "available",
    pay: "$60-$105/hr",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NRR6sc-BJnlHZdmgFeGF7sWUo6h6k2eFLA&s",
    name: "Isabella Moore",
    post: "Visual Designer",
    profession: {
      label: "✨Creative Studio"
    },
    tags: ["Visual", "Branding", "UI", "+4"],
    about: "Visual designer delivering clean and impactful digital visuals.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "non-available",
    pay: "$90-$160/hr",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWjjkwpJECkhEsmmnUMSmgw3G8OU5cw_0Tw&s",
    name: "Ethan Clark",
    post: "Full Stack Designer",
    profession: {
      label: "🔥Epic Coders"
    },
    tags: ["UI", "UX", "Code", "+5"],
    about: "Full stack designer blending design systems with scalable code.",
    viewProfile: "VIEW PROFILE"
  },
  {
    span: "available",
    pay: "$55-$100/hr",
    profileImage: "https://www.investopedia.com/thmb/ikFTVy2y_kYKFHkMpIxBz51rD1U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mia-Davis_02-1-small-370b53be049843e0b09634913a2413c0.jpg",
    name: "Mia Davis",
    post: "Motion Designer",
    profession: {
      label: "🎥Freelancer"
    },
    tags: ["Motion", "Animation", "UI", "+3"],
    about: "Motion designer creating engaging animations for digital products.",
    viewProfile: "VIEW PROFILE"
  }
];



  
  return (
    <div className='profile'>
    {profiles.map(function(elem, idx){
      return <div key={idx}>
        <ProfileCard span = {elem.span} pay = {elem.pay} img = {elem.profileImage} name = {elem.name} post = {elem.post} profession = {elem.profession.label} tags = {elem.tags} about = {elem.about} view = {elem.viewProfile} />
      </div>
    })}

    </div>
  )
}

export default App
