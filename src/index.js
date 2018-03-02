import MobMenuMaster from "./mobileMenu"
import TabMaster from "./tabs"
import ModalMaster from "./modalWindow.js"


window.onload = function () {

    let myTabs = new TabMaster(".tabs-container", {
        activeTab: 2
    });


    let myMobMenu = new MobMenuMaster("nav > .menu", {
    });

    let modalWin = new ModalMaster(".modal-container", {
    });
};
