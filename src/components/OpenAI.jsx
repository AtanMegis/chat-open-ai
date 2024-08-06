import user2 from '../assets/user2.avif'

export default function OpenAI() {
	return (
		<>
			<div className="flex gap-4  h-fit items-center  py-4  w-full">
				<img
					src={user2}
					alt="tes"
					className="max-w-full w-12 h-12 rounded-full"
				/>
				<div className="flex flex-col">
					<div className="flex gap-2 items-center">
						<h2 className="font-medium ">User2</h2>
						<span className="text-gray-500 text-xs">10.14 PM</span>
					</div>
					<p className="max-w-md shadow-md bg-[#F5F4FF] rounded-sm px-2 py-1 drop-shadow-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
						voluptate ipsam necessitatibus?
					</p>
				</div>
			</div>
		</>
	)
}
