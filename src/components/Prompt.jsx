import React from 'react'
import { RiAiGenerate } from 'react-icons/ri'

function Prompt() {
	return (
		<div className="inline-flex justify-center items-center w-fit bg-white border border-black shadow-sm px-2  rounded-2xl gap-2 scrollbar-hide hover:bg-black hover:text-white duration-100 cursor-pointer">
			<RiAiGenerate className="text-base" />
			<p className="text-center">Make me a poem</p>
		</div>
	)
}

export default Prompt
