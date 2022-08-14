import SideBar from "./components/SideBar";
import SearchBarHeader from "./components/SearchBarHeader";
import BodyContainer from "./components/BodyContainer";

export default function IndexPage() {

  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <SideBar></SideBar>
          {/* Sidebar ends */}
          <div className="w-full">
            {/* Navigation starts */}
            <SearchBarHeader></SearchBarHeader>
            {/* Navigation ends */}
            {/* Body starts */}
            <BodyContainer></BodyContainer>
          </div>
        </div>
      </div>
    </>
  );
}