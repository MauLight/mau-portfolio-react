import StarsCanvas from '../components/canvas/Stars'

export const StarsWrapper = (Component, IdName) =>
  function Stars_HOC() {
    return (
      <section className='w-[100%] max-w-full mx-auto relative z-0 bg-black' id={IdName}>
        <Component />
        <StarsCanvas />
      </section>
    )
  }


