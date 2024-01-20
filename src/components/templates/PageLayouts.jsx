// import { InnerTabNavigation } from "..";
// import { PageTabs } from "../atoms";


const PageLayouts = ({children}) => {
  return (
    <div className="py-12  text-gray-500 w-full overflow-hidden px-1 md:px-8 h-full min-h-[calc(100vh-100px)] max-h-[calc(100%-90px)]">
      {/* {tabs&& <PageTabs tabs={tabs} />} */}
      <div className="h-full pb-[24px] mt-[18px] overflow-auto rounded-[20px] bg-[#F9F9FB] max-h-[calc(100%-30px)] flex flex-col">
        {/* <InnerTabNavigation applicantsShown={applicantsShown} /> */}
        <div className="w-full pb-[20%] p-2 px-[21px] flex-wrap flex gap-4 min-h-full relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayouts;
