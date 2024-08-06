import { useEffect, useRef, useState } from 'react'
import user1 from './assets/user1.jpg'
import user2 from './assets/user2.avif'
import { MdSend } from 'react-icons/md'
import { FaMicrophone } from 'react-icons/fa'
import OpenAI from './components/OpenAI.jsx'
import User from './components/User.jsx'

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
				<div className="flex flex-col h-4/5 w-full  max-w-5xl overflow-y-scroll  p-4 ">
					<OpenAI />
					<User />
					<OpenAI />
					<User />
				</div>
				<div className="fixed bottom-0  h-1/5 bg-slate-50  w-full lg:max-w-5xl">
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
