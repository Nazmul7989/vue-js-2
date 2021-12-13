import home from "@/Components/vueRoute/home";
import about from "@/Components/vueRoute/about";
import contact from "@/Components/vueRoute/contact";
import customer from "@/Components/vueRoute/customer";
import customerStart from "@/Components/vueRoute/customerStart";
import customerDetail from "@/Components/vueRoute/customerDetail";
import customerEdit from "@/Components/vueRoute/customerEdit";
import notFound from "@/Components/vueRoute/notFound";

export const routes = [
    {
        path: '/',
        component : home,
        name: 'home'
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/contact/:id',
        component: contact
    },
    {
        path: '/customer',
        component: customer,
        children: [
            {
                path: '/',
                component: customerStart,
            },
            {
                path: ':id',
                component: customerDetail
            },
            {
                path: ':id/edit',
                component: customerEdit,
                name: 'customerEdit'
            },
        ]
    },
    {
        path: '*',
        component: notFound
    }

]