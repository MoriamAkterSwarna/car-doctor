import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className='w-3/4 rounded-lg shadow-xl' />
    <img src={parts} className='w-1/2 rounded-lg border-8 border-white shadow-xl absolute right-12 top-1/2 ' />
    </div>
    <div className='lg:w-1/2'>
      <h1 className="text-3xl font-bold text-error space-y-2">About Us!</h1>
      <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="btn btn-primary my-4">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;