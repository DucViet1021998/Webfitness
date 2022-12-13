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
        img: 'https://s3-alpha-sig.figma.com/img/e2da/22d0/9d66213bfd99e2da1e2314adcc038411?Expires=1672012800&Signature=fP2m3bT-JtMI5DppDqJDQCQPcw~cw8X7hEm8BJ47uqTlsfyiEKRyA3n1o8DicUbVSIziAFQWUF0B6yshB0LwlwXzIABT8O7WbHF-tEtfEKSuLppvvBr1Wb3trXds2pNEdDbGFDnaaeDv5ofPUynRymwFC17yP9NM~8i5H8TgzwUJdniX0EAM3WFbYJXOMp4RdD7uOjYdYRgLAk-FuvtZPP03B6ktItPBTdmLxg1E60lIGiutBE~o-eiep9tnxfhAoh6aQB6IK3gItjgwAtxD6oJRR2YOQfwEKJuDQeQibkalaF3sDQ5SPAsZ3CjiSQC4fFsIihf3~g-we4UkqWu1UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        path: '/schedule',
        component: Schedule,
        width: "408px",
        height: "612px",
        img: 'https://s3-alpha-sig.figma.com/img/3a90/932c/fd6d5b0c0a3d6cb8ab2448b8a6fcc85b?Expires=1672012800&Signature=H0~OCzG4PgVCkQZdDqxyOQ0Q0Ij93cQBTTREMlB8fQ8K3zOdBwlrH5DKqSegwmZa6-mtx2XFjdElMd6FLDbpdDMePilQlkiaBwZghpekUtDKn21xXGOcK0W-I1xHVALDc-n3EYGLJB6~e-PSmh546cQn-E9LDmTwFL81xOg2D6PI6mPZYpZBac3nCGpKzcFaEGVvvyzOiAf1NUgG8FMOLJEeWFATmqbNIGAsCkAVFIEmyqHSPCvhCZaaXmCqtMSISyoeKBgg3Wv8hmo3FU6YSCpnFdSHMjKxPG5hEU9bf~ajTlC20WVG4GaBE9OcFjCJhTtdUmav92YiMZwZuv~n~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },

]


const privateRoutes = [

]


export { privateRoutes, publicRoutes }