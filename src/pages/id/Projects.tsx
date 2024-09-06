import { useEffect } from "react"
import { projects } from "@/data/projects"
// import MaterialSymbolsLightPhoneAndroidRounded from '~icons/material-symbols-light/phone-android-rounded'
// import LogosVue from '~icons/logos/vue'
import { getSkillIcon } from "@/utlis/getIconBySkillName"
export default function Projects() {
  useEffect(() => {
    document.title = "My Personal Page | Projects"
  }, [])

  return (
    <div className="space-y-16 py-12">
      <div className="space-y-4">
        <h1 className="text-3xl">Projects.</h1>
        <p>
          Selama kuliah di Telkom University, saya telah terlibat dalam berbagai proyek yang cukup saya banggakan. Banyak di antaranya yang bersumber terbuka, jadi silakan jelajahi kodenya dan berkontribusi jika Anda punya ide untuk perbaikan!
        </p>
      </div>
      <div className=" mt-3 space-y-4">
        {
          projects.map((project, index) => {
            return (
              <a
                href={project.link}
                target="_blank"
                className="group flex items-stretch gap-2 w-full h-full"
                key={index}
              >
                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <h3 className="font-semibold group-hover:text-emerald-400 w-full">
                      {project.title}
                    </h3>
                    <div className="text-xs items-center gap-2 flex-grow flex ">
                      {/* <MaterialSymbolsLightPhoneAndroidRounded className="text-white" />
                      <LogosVue /> */}
                      {project.stack.map(skill => {
                        const icon = getSkillIcon(skill)
                        if (!icon) return null
                        if (icon.icon) {
                          return <abbr title={skill}><img src={icon.icon} /></abbr>
                        } else {
                          return <abbr title={skill}><icon.Icon /></abbr>
                        }
                        // return icon && typeof icon === "string" ? (<img src={icon} />): (<icon />)
                      })}
                    </div>
                  </div>
                  <div className="flex items-end">
                    <p className="truncate w-fit">
                      {project.description}
                    </p>
                    <span className="border-b border-dashed h-2 flex-grow border-zinc-800 group-hover:border-zinc-700"></span>
                  </div>
                </div>
                <project.icon className="text-2xl text-white" />
              </a>
            )
          })
        }
      </div>
    </div>
  )
}
