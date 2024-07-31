import "@assets/css/globals.css";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl  mx-auto">
        <section id="home" className="min-h-screen bg-gray-100 p-10">
          <div className="text-3xl font-bold">Home </div>
          <div>
            Welcome to the Home1232132 13211231 2321211232
            13123211123123211212312 312 1232132131231231 1231231231 12312312
            12312 312312
          </div>
        </section>
        <section id="about" className="min-h-screen bg-gray-200 p-8">
          <h2 className="text-3xl font-bold">About</h2>
          <p>Information about us.</p>
        </section>
        <section id="project" className="min-h-screen bg-gray-300 p-8">
          <h2 className="text-3xl font-bold">Project</h2>
          <p>Details of our projects.</p>
        </section>
        <section id="constant" className=" min-h-screen bg-gray-400 p-8">
          <h2 className="text-3xl font-bold">Constant</h2>
          <span>Information on constants.</span>
        </section>
      </div>
      <div className="w-full bg-slate-50">목차</div>
    </>
  );
}
