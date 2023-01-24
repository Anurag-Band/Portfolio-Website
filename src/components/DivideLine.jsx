import { RiMoreLine } from 'react-icons/ri'

const DivideLine = () => {
  return (
    <div className="relative flex items-center w-11/12 mx-auto sm:pr-24 md:py-8">
      <div className="flex-grow border-t border-slate-400"></div>
      <span className="flex-shrink mx-4 text-slate-400">
        <RiMoreLine />
      </span>
      <div className="flex-grow border-t border-slate-400"></div>
    </div>
  )
}

export default DivideLine
