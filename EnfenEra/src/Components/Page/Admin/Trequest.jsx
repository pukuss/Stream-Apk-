import Request_Form from '../../../pages/T_REQUEST/Request_Form'




function Trequest() {
  return (
    <>
    <div className='fixed z-0 bg-[url("https://res.cloudinary.com/dndurawxp/image/upload/v1782063956/TournamentBackround_obl0a8.webp")]   bg-cover bg-center h-full w-full '></div>
    <div className='min-h-screen '>
      <header></header>

      <main className='relative z-10 max-w-350 m-auto px-5 '>
        <Request_Form />
      </main>
    </div>
    </>
  )
}

export default Trequest
