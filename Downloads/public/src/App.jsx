import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/includes/header";
import Home from "./components/pages/Home";
import SideBar from "./components/includes/side-bar";
import Client from "./components/pages/client";
import User from "./components/pages/user";
import Notes from "./components/pages/notes";
import Setting from "./components/pages/setting";
import Kiddy from "./components/pages/kiddy";
import Costumer from "./components/pages/costumer";
import Request from "./components/pages/request";
import Admin from "./components/pages/admin";
function App() {
  const PageLayout = () => (
    <>
      <Header />
      <main>
        <SideBar />
        <div class="home_body">
          <div class="contain">
            <div className="home_content">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/client" element={<Client />} />{" "}
            <Route exact path="/user" element={<User />} />{" "}
            <Route exact path="/notes" element={<Notes />} />{" "}
            <Route exact path="/setting" element={<Setting />} />{" "}
            <Route exact path="/kiddy" element={<Kiddy />} />{" "}
            <Route exact path="/costumer" element={<Costumer />} />{" "}
            <Route exact path="/request" element={<Request />} />{" "}
            <Route exact path="/admin" element={<Admin />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
