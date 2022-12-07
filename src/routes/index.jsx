import Home from "../pages/home/indexHome"
import SignIn from "../pages/signIn/indexSignIn"
import HomeLoggedIn from "../pages/homeLoggedIn/indexHomeLoggedIn"
import Schedule from "../pages/Schedule"
import Register from "../pages/Register"
import HomePageLayout from "../components/layouts/HomePageLayout"


// Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
        img: 'https://s3-alpha-sig.figma.com/img/bee2/b321/d01a5ff15176379aaba68d10afdcb236?Expires=1670803200&Signature=f27V1lEGcei3P7-V~DI3SYIXyx8HITdewf2FOs4LDTKKLSnZ3UNYA-SnPqDuAyWsRePDZI8bRjKXhU-upqnOC7DwVpPcG6Nkz0pHXLd7-C6N7HB2UgDoLKD-nk5zfaqcgmCh2~W43WHhiUNuXnuK6F9o-CC58Y6e6D8IMdCwsl5vqN-ySmFHuCNNwSV0H-l31xZNTmtxl9HwBeLz3w7fNnTCWSPuOlxEaFa58AvwQ-nWoOfsC0RxU05m5PtjvGjqv7vOLtZUfY29fyRT1CIMCPI7JEuOtQWfmVx8ruFNTkQOMeujt51NB0vTope9ci~HP2EZBFxJX2VDXA18galHlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        width: "497px",
        height: "745px",
        layout: HomePageLayout
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '/home-logged-in',
        component: HomeLoggedIn,
        width: "382px",
        height: "652px",
        img: 'https://s3-alpha-sig.figma.com/img/e2da/22d0/9d66213bfd99e2da1e2314adcc038411?Expires=1670803200&Signature=RM7Sb3TzD5TyBpkLaNqTei4wiVXC-9HnYU4DBx4BUJJP9KKf0jr~vZJwpR4tJJTQZ6dJx41UQckJVj7O1UuZulikoHDfGhFzwm9vOyJfYULp7nGb-JBmkuaJYhs4YfleQ5xRKAO5aFkXYUbmeL0ThiKbTkO0S80oaPzmDUsHX7nVg-ET6Ag2HI03zKUn07mPWMO18aLbsK~gxGWukzDl-JVSkGRd3jd5rXcciWEEMp-HKrvJrzmLDgom1NDw0Ehbih7RGpF1gHL4NHl7dFBs1JVrO1R5xUMFUlgO2RalCiBTAUEhoWIQHdtZS~FM9BDwEWtYIy1BkpE35RVWA4y9XQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        path: '/schedule',
        component: Schedule,
        width: "408px",
        height: "612px",
        img: 'https://s3-alpha-sig.figma.com/img/3a90/932c/fd6d5b0c0a3d6cb8ab2448b8a6fcc85b?Expires=1670803200&Signature=AqgwQogct4G9eH3kvpUUAqI~3bOWtu3ngR4UpvUZDXST6tXQ05UHp1~~AuphZ-NaANOLHz9t6xnYT0a-GeeRYEHXI2KU2FS1SaJkUI9v3UM0yLlylBq5ToBscWrHd~TYLQfT8356RkLBfTr1N74lAc9oYVY0slNLEyi42Su3h8JISJ~Saj8GNz2OqRON0SLrwCC-ogy1iY6EY4rzrOwYU6-Dfe2S0bB3hqvdafP2L-IakdZPaoe8pmDiiAAWoKg4qasB0NS3NmX5M7MlxxGYTp9GOS6TCMUa5w2SKaS2eH43~ObAMD2vTcVZluaSAKNtp~ZF58GXvsh7w4SQ2DZtew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },

]


const privateRoutes = [

]


export { privateRoutes, publicRoutes }