import { useState } from 'react'
import rightArrow from '../assets/images/rightArrow.png'
import { GlassElement } from '../components/GlassElement/GlassElement'
import projectsImg from '../assets/images/modelImg.png'
import projectsImg1 from '../assets/images/ssssda.png'
import projectsImg3 from '../assets/images/testy.png'

export default function AllProjects() {

  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const [projects, setProjects] = useState([
    {id: 4, title: 'product2', preview_url: projectsImg1},
    {id: 1, title: 'product', preview_url: projectsImg},
    {id: 2, title: 'product', preview_url: projectsImg3},
    {id: 5, title: 'product2', preview_url: projectsImg1},
    {id: 3, title: 'product', preview_url: projectsImg},
  ])

  fetch('https://api.gumroad.com/v2/products', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(data => setProjects(data.products))
    .catch(err => console.error(err));

  return (
    <div className='container mt-40'>
        <h1 className='text-8xl text-white font-Neue-Montreal-Bold'>Gallery Of My Projects</h1>
        <p className='text-3xl mb-4 max-w-5xl text-white font-Neue-Montreal-Bold mt-6'>A versatile designer skilled in 2D design, 3D modeling, motion graphics, and Blender. With a strong creative vision and mastery of design principles, they <span className='text-secondery'>Combining professional tools with fresh ideas, they breathe life into every project. Their art is a fusion of beauty, motion, and storytelling.</span></p>
        <GlassElement
          width={140}
          height={45}
          radius={50}
          depth={10}
          blur={3}
          center={'flex'}
          chromaticAberration={5}
        >
          <button className='text-sm lg:text-base font-Neue-Montreal-Regular flex items-center justify-center gap-1.5 cursor-pointer text-white rounded-3xl'>
              Let's See
              <img src={rightArrow} alt="trend up button" className='mt-0.5 w-5' />
          </button>
        </GlassElement>
        <div
          className="columns-1 sm:columns-2 lg:columns-3 p-4"
          style={{ columnGap: "1rem" }}
        >
          {projects.map((c) => (
            <figure
              key={c.id}
              className="mb-4 rounded-xl shadow overflow-hidden [break-inside:avoid]"
            >
              {/* تصویر با نسبت طبیعی خودش */}
              <img
                src={c.preview_url}
                alt={c.title}
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
              <figcaption className="p-3 font-medium">{c.title}</figcaption>
            </figure>
          ))}
        </div>
    </div>
  )
}
