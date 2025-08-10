import conf1 from "../assets/Conference1.jpg"
import conf2 from "../assets/Conference2.jpg"
import conf3 from "../assets/Conference3.jpg"
import conf4 from "../assets/Conference4.jpg"
import conf5 from "../assets/Conference5.jpg"
import conf6 from "../assets/Conference6.jpg"
import conf7 from "../assets/Conference7.jpg"
import conf8 from "../assets/Conference8.jpg"
import conc1 from "../assets/Concert1.jpg"
import conc2 from "../assets/Concert2.jpg"
import conc3 from "../assets/Concert3.jpg"
import conc4 from "../assets/Concert4.jpg"
import conc5 from "../assets/Concert5.jpg"
import wed1 from "../assets/Wedding1.jpg"
import wed2 from "../assets/Wedding2.jpg"
import b1 from "../assets/Birthday1.jpg"
import b2 from "../assets/Ballons.jpg"
import b3 from "../assets/social1.jpg"
import b4 from "../assets/Birthday2.jpg"
import b5 from "../assets/Birthday3.jpg"
import b6 from "../assets/Birthday4.jpg"
import edu1 from "../assets/Education1.png"
import edu2 from "../assets/Education2.jpg"
import edu3 from "../assets/Education3.jpg"
import edu4 from "../assets/Education4.jpg"
import edu5 from "../assets/Education5.jpg"
import edu6 from "../assets/Education6.jpg"
import edu7 from "../assets/Education7.jpg"
import edu8 from "../assets/Education8.jpg"
import fes1 from "../assets/Festival1.jpg"
import fes2 from "../assets/Festival2.jpg"
import fes3 from "../assets/Festival3.jpg"
import fes4 from "../assets/Festival4.jpg"
import fes5 from "../assets/Festival5.jpg"
import fes6 from "../assets/Festival6.jpg"
import fes7 from "../assets/Festival7.jpg"
import fes8 from "../assets/Festival8.jpg"
import m1 from "../assets/Marathon1.jpg"
import m2 from "../assets/Marathon2.jpg"
import m3 from "../assets/Marathon3.jpg"


const events=[
    //Corporate
    {
        id: 1,
        name:" Corporate Events",
        images: [conf1,conf2,conf3,conf4,conf5,conf6,conf7,conf8],
        category: "corporate"
    },
    {
        id: 2,
        name: "Social Events",
        images: [wed1,wed2,b1,b2,b3,b6,b4,b5],
        cateogry: "social"
    },
    {
        id: 3,
        name: "Cultural Events",
        images:[fes1,fes2,fes3,fes4,fes5,fes6,fes7,fes8],
        category: "Cultural"
    },
    {
        id: 4,
        name: "Entertainment Events",
        images: [conc1,m1,conc2,conc4,m3,conc3,m2,conc5],
        category: "Entertainment"
    },
    {
        id: 5,
        name: "Educational Events",
        images:[edu1,edu2,edu3,edu4,edu5,edu6,edu7,edu8],
        category:"Educational"
    },
];

export default events;