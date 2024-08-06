import user1 from '../assets/user1.jpg'

export default function User() {
	return (
		<>
			<div className="flex gap-4 flex-row-reverse  h-fit items-center  py-4  w-full">
				<img
					src={user1}
					alt="tes"
					className="max-w-full w-12 h-12 rounded-full"
				/>
				<div className="flex flex-col">
					<div className="flex gap-2 flex-row-reverse items-center">
						<span className="text-gray-500 text-xs">10.14 PM</span>
					</div>
					<p className="max-w-md shadow-md bg-[#F5F4FF] rounded-sm px-2 py-1 drop-shadow-lg">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
						eligendi vel aliquid ducimus, quaerat illo, amet cum eos sapiente
						provident reprehenderit asperiores perspiciatis dolores unde iusto
						tenetur, explicabo quisquam delectus ipsam maiores natus accusamus
						magni nulla esse! Facilis maiores animi aperiam.
					</p>
				</div>
			</div>
		</>
	)
}
