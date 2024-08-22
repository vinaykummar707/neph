import './App.css';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

function App() {
	return (
		<div className="h-screen w-screen bg-neutral-100 gap-2 flex px-48 py-8 justify-center">
			<div className=" flex items-start w-[28%] bg-white justify-start flex-col gap-4 rounded-lg p-6 border">
				<h1 className="font-extrabold text-lg">Steps</h1>

				<div className="flex flex-col w-full gap-2">
					<h1 className=" px-4 py-3 bg-green-600 text-white font-medium rounded-lg text-sm">
						Clinic Details
					</h1>

					<h1 className=" px-4 py-3 hover:bg-neutral-200 	font-medium rounded-lg text-sm">
						Dialysis Units
					</h1>

					<h1 className=" px-4 py-3 hover:bg-neutral-200 	font-medium rounded-lg text-sm">
						Unit Administrators
					</h1>

					<h1 className=" px-4 py-3 hover:bg-neutral-200 	font-medium rounded-lg text-sm">
						Beds
					</h1>

					<h1 className=" px-4 py-3 hover:bg-neutral-200 	font-medium rounded-lg text-sm">
						Technicians
					</h1>
					<h1 className=" px-4 py-3 hover:bg-neutral-200 	font-medium rounded-lg text-sm">
						Assistants
					</h1>
				</div>
			</div>
			<div className=" flex items-start w-full bg-white justify-start flex-col gap-6 rounded-lg p-6 border">
				<h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
					Add Your Clinic Information
				</h1>

				<div className="grid grid-cols-2 w-full gap-3">
					<div className=" space-y-2">
						<Label className="text-sm" htmlFor="email">
							Name
						</Label>
						<Input type="email" />
					</div>
					<div className=" space-y-2">
						<Label htmlFor="email">Branch</Label>
						<Input type="email" />
					</div>
					<div className="col-span-2 space-y-2">
						<Label htmlFor="email">Address</Label>
						<Input type="email" />
					</div>
					<div className="grid grid-cols-2 col-span-2 gap-3">
						<div className=" space-y-2">
							<Label htmlFor="email">Email Address</Label>
							<Input type="email" placeholder="" />
						</div>
						<div className=" space-y-2">
							<Label htmlFor="email">Phone Number</Label>
							<Input type="email" />
						</div>
						<div className=" space-y-2">
							<Label htmlFor="email">Pincode</Label>
							<Input type="email" />
						</div>
					</div>
				</div>

				<Button className="justify-end" size={'lg'}>
					Continue
				</Button>
			</div>
		</div>
	);
}

export default App;
