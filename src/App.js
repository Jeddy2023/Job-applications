import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import Faq from "./Pages/help/Faq";
import Contact, { contactAction } from "./Pages/help/Contact";
import Notfound from "./Pages/Notfound";
import CareersLayout from "./layout/CareersLayout";
import Careers, { careersLoader } from "./Pages/careers/Careers";
import CareerDetail, { careerDetailsloader } from "./Pages/careers/CareerDetail";
import CareersError from "./Pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} action={contactAction}/>
        </Route>

        <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
          <Route
            index
            element={<Careers />}
            loader={careersLoader}
          />
          <Route
            path=":id"
            element={<CareerDetail />}
            loader={careerDetailsloader}
          />
        </Route>
      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
