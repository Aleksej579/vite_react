import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Switch_component() {
  const [enabled, setEnabled] = useState(false)

  function getDarkMode() {
    var element = document.querySelector("html");
    element.classList.toggle("dark");
  }

  return (
    <>
      <div className="py-16 text-center">
        <p>HeadlessUI library</p>
        <Switch
          onClick={getDarkMode}
          id='checkboxBtn'
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
            relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>

      <p>Custom Tailwind</p>
      <div className="switchTailwind relative">
        <input 
          onClick={getDarkMode}
          type="checkbox" 
          className="peer appearance-none cursor-pointer border border-gray-300 rounded-full checked:border-rose-500 w-12 h-6 checked:bg-red-300/50"/>
        <span 
          className="peer-checked:left-7 peer-checked:bg-rose-500 transition-all duration-200 pointer-events-none w-4 h-4 block absolute top-1 left-1 rounded-full bg-gray-300"
        ></span>
      </div>
    </>
  )
}
