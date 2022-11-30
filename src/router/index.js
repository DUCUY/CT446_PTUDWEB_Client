import { createWebHistory, createRouter } from "vue-router";
import trangchu from '../views/trangchu.vue'
import dangKy from '../views/dangKy.vue'
import dangNhap from '../views/dangNhap.vue'
import bieuMau from '../views/bieuMau.vue'
import lienHe from '../views/lienHe.vue'
import dangKyForm from '../views/dangKyForm.vue'
import listFormDangKy from '../views/listFormDangKy.vue'

const routes = [
    {
        path: "/",
        name: "trangchu",
        component: trangchu,
    },

    {
        path: "/dangKy",
        name: "DangKy",
        component: dangKy,
    },

    {
        path: "/dangNhap",
        name: "DangNhap",
        component: dangNhap,
    },

    {
        path: "/bieuMau",
        name: "BieuMau",
        component: bieuMau,
    },

    {
        path: "/lienHe",
        name: "lienHe",
        component: lienHe,
    },

    {
        path: "/dangKyForm",
        name: "dangKyForm",
        component: dangKyForm,
    },

    {
        path: "/listFormDangKy",
        name: "listFormDangKy",
        component: listFormDangKy,
    },

    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "notfound",
    //     component: () => import("@/views/NotFound.vue"),
    // },

    // {
    //     path: "/contacts/:id",
    //     name: "contact.edit",
    //     component: () => import("@/views/ContactEdit.vue"),
    //     props: true // Truyền các biến trong $route.params vào làm props
    // },

    // {
    //     path: "/contacts/add",
    //     name: "contact.add",
    //     component: () => import("@/views/ContactAdd.vue"),
    //     props: true
    // },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;