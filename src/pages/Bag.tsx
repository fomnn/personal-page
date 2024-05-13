export default function Bag() {
  return (
    <div className="py-12 space-y-16">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-white">What's in my bag?</h1>
        <p>Software I use, gadgets I love, and other things I recommend. Here``s a big list of all of my favorite stuff.</p>
      </div>
      <div className="space-y-5">
        <div className="flex gap-5 items-center">
          <span>Hardware</span>
          <span className="h-0.5 w-full bg-zinc-800 translate-y-0.5"></span>
        </div>
        <div className="space-y-5">
          <div className="">
            <h3 className="text-white font-semibold text-lg">Poco X3 GT</h3>
            <p>I dont usually invest and upgrade my phone frequently, I used my last phone for 1 years, I will use this one for 10 years.</p>
          </div>
          <div className="">
            <h3 className="text-white font-semibold text-lg">Lenovo Yoga Slim 7 Carbon</h3>
            <p>My laptop is in that awkward phase of its life where it's not exactly brand new, but it's not ancient history either. It's like the middle child of technology</p>
          </div>
          <div className="">
            <h3 className="text-white font-semibold text-lg">Rexus Mouse Office Wireless Q35</h3>
            <p>My mouse is like a bargain bin treasure - cheap, cheerful, and surprisingly reliable.</p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex gap-5 items-center">
          <span>Hardware</span>
          <span className="h-0.5 w-full bg-zinc-800 translate-y-0.5"></span>
        </div>
        <div className="space-y-5">
          <div className="">
            <h3 className="text-white font-semibold text-lg">Notion</h3>
            <p>Notion is like a digital Swiss Army knife - versatile, intuitive, and ready to tackle any organizational challenge with finesse.</p>
          </div>
          <div className="">
            <h3 className="text-white font-semibold text-lg">HTTPie</h3>
            <p>An API testing tool with a beautiful UI, free of nonsense and unnecessary features.</p>
          </div>
          <div className="">
            <h3 className="text-white font-semibold text-lg">HTTPie</h3>
            <p>DBeaver is the ultimate database wizard - making the complexities of data management disappear with a flick of its digital wand.</p>
          </div>
          <div className="">
            <h3 className="text-white font-semibold text-lg">VS Code</h3>
            <p>No brainer, my primary code editor. I use it for everything from writing code to writing this website.</p>
          </div>
        </div>
      </div>
    </div>
  )
}