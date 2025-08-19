import rightArrow from '../assets/images/rightArrow.png'
import { GlassElement } from '../components/GlassElement/GlassElement'

export default function AllProjects() {
  return (
    <div className='container mt-40'>
        <h1 className='text-8xl text-white font-Neue-Montreal-Bold'>Gallery Of My Projects</h1>
        <p className='text-3xl max-w-5xl text-white font-Neue-Montreal-Bold mt-6'>A versatile designer skilled in 2D design, 3D modeling, motion graphics, and Blender. With a strong creative vision and mastery of design principles, they <span className='text-secondery'>Combining professional tools with fresh ideas, they breathe life into every project. Their art is a fusion of beauty, motion, and storytelling.</span></p>
        <GlassElement
          width={160}
          height={50}
          radius={50}
          depth={10}
          blur={3}
          chromaticAberration={5}
        >
          <button className='py-2 lg:py-3 text-sm lg:text-base font-Neue-Montreal-Regular px-4 lg:px-6 flex items-center justify-center gap-1.5 cursor-pointer text-white rounded-3xl'>
              Let's See
              <img src={rightArrow} alt="trend up button" className='mt-0.5 w-5' />
          </button>
        </GlassElement>
    </div>
  )
}
