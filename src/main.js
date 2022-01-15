import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailNewsPage from "./pages/detailNews";
import SinhVien from "./pages/sinhvien";
import TuyenDung from "./pages/tuyendung";

import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";

import DashBoardPage from "./admin/dashboard";
import AdminNewAdd from "./admin/news/add";
import AdminNewEdit from "./admin/news/edit";
import List from "./admin/news/list";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/sinhvien": () => {
        print(SinhVien.render());
    },
    "/tuyendung": () => {
        print(TuyenDung.render());
    },
    "/signup": () => {
        print(SignupPage.render());
    },
    "/signin": () => {
        print(SigninPage.render());
    },
    "/admin": () => {
        print(DashBoardPage.render());
    },
    "/admin/news/add": () => {
        print(AdminNewAdd.render());
    },
    "/admin/news": () => {
        print(List.render());
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(AdminNewEdit.render(id));
    },
});
router.resolve();