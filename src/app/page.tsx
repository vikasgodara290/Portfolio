
export default function Home() {
  return (
    <div className="bg-primary-bg-color w-screen h-screen flex justify-center items-center">
      {/* main div */}
      <div className="w-[96%] h-11/12 rounded-[5px] bg-black-200 opacity-40 border-1
      border-primary-border-font-color">
        {/* nav bar */}
        <div className="border-b-1 border-primary-border-font-color h-[50px] text-[16px] fira-code-600 flex 
        text-primary-border-font-color justify-between">
          {/* name logo */}
          <div className="flex w-1/2">
            <div className="w-64 pl-8 border-r-1 border-primary-border-font-color h-[50px] flex items-center">vikas-godara</div>
            <div className="px-5 border-r-1 border-primary-border-font-color h-[50px] flex items-center">_home</div>
            <div className="px-5 border-r-1 border-primary-border-font-color h-[50px] flex items-center">_about-me</div>
            <div className="px-5 border-r-1 border-primary-border-font-color h-[50px] flex items-center">_projects</div>
          </div>
          <div className="px-10 h-[50px] border-l-1 border-primary-border-font-color flex items-center">_contact-me</div>
        </div>
      </div>
    </div>
  );
}
