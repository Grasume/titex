import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
      <img className="mx-auto" height="128" width="128" src="/titex.png"></img>
      
      <h1 className="text-3xl font-bold mx-auto m-2 text-center text-neutral-300">Tit's Express</h1>

     <div className='flex justify-center'>
     <div className="flex flex-row text-neutral-300 text-center bg-slate-600 opacity-80 rounded-md">
    <div className="flex flex-row  text-center border-gray-200">
      <fieldset className="border border-solid  p-3 m-2 w-64">
        <legend className="text-sm select-none">Contract Information </legend>
              
        <fieldset className="border border-solid border-gray-200 p-3 m-2">
        <legend className="text-sm select-none text-left">Contract To </legend>
        <label htmlFor="Corporation select" className=""> Tit's Express</label><br />
        </fieldset>
        <fieldset className="border border-solid border-gray-200 p-3 m-2">
          <legend className="text-sm select-none text-left">Ship To</legend>
          <label htmlFor="Corporation select" className=""> NSI</label><br />
        </fieldset>
        <fieldset className="border border-solid border-gray-200 p-3 m-2">
          <legend className="text-sm select-none text-left">Total Volume </legend>
          <label htmlFor="Corporation select" className=""> 300,000 m3</label><br />
        </fieldset>
        <fieldset className="border border-solid border-gray-200 p-3 m-2">
          <legend className="text-sm select-none text-left">Total Collateral </legend>
          <label htmlFor="Corporation select" className=""> 300,000,000 ISK</label><br />
        </fieldset>
        <fieldset className="border border-solid border-gray-200 p-3 m-2">
          <legend className="text-sm select-none text-left">Reward </legend>
          <label htmlFor="Corporation select" className=""> 3,000,000 ISK</label><br />
        </fieldset>
        
      </fieldset>
    </div>

    <div className="flex flex-row  text-center border-gray-200">

      <div className="row-span-2 col-span-2">
        
        <button id="Origin" data-dropdown-toggle="dropdown" className=" border border-solid w-64 p-4 m-4 text-neutral-300 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-small rounded-md text-sm px-2 text-center inline-flex items-center justify-center" type="button">Origin <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>
        <br></br>
        <button id="Origin" data-dropdown-toggle="dropdown" className=" border border-solid w-64 p-4 m-4 text-neutral-300 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-small rounded-md text-sm px-2 text-center inline-flex items-center justify-center" type="button">Origin <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>

        <fieldset className="border border-solid border-gray-200 p-3 m-2">
        <legend className="text-md select-none text-left">Janice Appraiser </legend>  
        <textarea id="message" className="block p-2.5 w-full h-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Copy your Appraiser information here...."></textarea>
        </fieldset>

      </div>
    </div>  

    </div>
    </div>
    </div>
  )
}
