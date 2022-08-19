import SideBar from "./components/SideBar";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import DataProvider from "./context/data";

export default function IndexPage() {

  return (
    <>
    <DataProvider>
        <div className="w-full min-h-screen bg-gray-200">
          <div className="flex flex-no-wrap">
            {/* Sidebar starts */}
            <SideBar></SideBar>
            {/* Sidebar ends */}
            <div className="w-full">
              {/* Navigation starts */}
              <Header></Header>
              {/* Navigation ends */}
              {/* Body starts */}
              <BodyContainer></BodyContainer>
            </div>
          </div>
        </div>
      </DataProvider>
    </>
  );
}