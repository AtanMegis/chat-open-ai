import { useEffect, useRef, useState } from 'react'
import { MdSend } from 'react-icons/md'
import { FaMicrophone } from 'react-icons/fa'
import Prompt from './components/Prompt.jsx'
import ai from './assets/ai.png'

function App() {
	const [text, setText] = useState('')
	const textareaRef = useRef()

	useEffect(() => {
		const textarea = textareaRef.current
		if (textarea) {
			textarea.style.height = 'auto'
			textarea.style.height = `${textarea.scrollHeight}px`
		}
	}, [text])

	const handleChange = e => {
		setText(e.target.value)
	}

	return (
		<>
			<div className="flex   gap-4 w-full  justify-center h-screen bg-slate-150  max-w-full  relative px-4 ">
				<div className="flex flex-col h-4/5 w-full  max-w-5xl overflow-y-scroll  p-4 scrollbar-hide">
					<div className="flex flex-col items-center justify-center h-4/5 gap-2">
						<img
							src={ai}
							alt={ai}
							className="object-fit w-36 h-36 max-w-full  drop-shadow-2xl "
						/>
						<span className="text-center text-xl font-bold drop-shadow-md ">
							WILLY AI
						</span>
						<h1 className="flex w-1/2 text-pretty text-center">
							Empower your thought with audio or chatbot, customized to meet
							your unique needs and preferences.
						</h1>
					</div>
					{/* INI NANTI DI KONDISIIN AJA WIL
						KALO ADA CHAT / PROMPT BARU TAMPILIN CHAT NYA					
					 */}
					{/* <OpenAI />
					<User />
					<OpenAI />
					<User /> */}
				</div>
				<div className="fixed bottom-0  h-1/5 bg-slate-100  w-full lg:max-w-5xl">
					<div className=" flex  bg-slate-100 justify-center flex-wrap p-4 fixed bottom-1/4  h-36 w-full lg:max-w-5xl  rounded-md shadow-md gap-y-4 gap-x-2">
						<h1 className="flex w-full justify-center font-semibold text-xl">
							Prompt Suggestion For you
						</h1>
						<Prompt />
						<Prompt />
						<Prompt />
						<Prompt />
						<Prompt />
						<Prompt />
						<Prompt />
						<Prompt />
					</div>
					<div className="flex justify-center items-center w-full h-full gap-2">
						<textarea
							ref={textareaRef}
							value={text}
							onChange={handleChange}
							className="w-2/3 max-w-full inline break-words border-2 max-h-24 overflow-y-scroll scrollbar-hide border-black rounded-lg resize-none overflow-hidden"
						/>
						<MdSend className="size-6 hover:cursor-pointer" />
						<FaMicrophone className="size-6 hover:cursor-pointer" />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
