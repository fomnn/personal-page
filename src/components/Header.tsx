import SolarHomeSmileOutline from '~icons/solar/home-smile-outline'
import SolarFolderWithFilesOutline from '~icons/solar/folder-with-files-outline'
import { Link } from "react-router-dom";


export default function Header({ path }: { path: string }) {

	console.log(path)

	return (
		<header className="bg-[#222222] h-[3rem] rounded-full flex items-center px-5">
			<ul className="flex items-center gap-4 text-2xl font-thin">
				<Link to={'/'} className="size-7 flex items-center justify-center rounded-full relative cursor-pointer">
					<SolarHomeSmileOutline className={"text-[1.1rem] " + (path === "/" ? "text-emerald-400" : "text-white")} />
					<span className="hidden bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5 w-7 h-[2px] absolute top-9"></span>
				</Link>
				<Link to={'/projects'} className="size-7 flex items-center justify-center rounded-full relative cursor-pointer">
					<SolarFolderWithFilesOutline className={"text-[1.1rem] "+ (path === "/projects" ? "text-emerald-400" : "text-white")} />
					<span className="hidden bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5 w-7 h-[2px] absolute top-9"></span>
				</Link>
				{/* <Link to={'/bag'} className="size-7 flex items-center justify-center rounded-full relative cursor-pointer">
					<SolarCaseRoundMinimalisticBroken className={"text-[1.1rem] " + (path === "/bag" ? "text-emerald-400" : "text-white")} />
					<span className="hidden bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5 w-7 h-[2px] absolute top-9"></span>
				</Link> */}
			</ul>
		</header>
	);
}