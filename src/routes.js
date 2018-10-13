import home from './component/home.vue'
import pemasukan from './component/pemasukan.vue'
import pengeluaran from './component/pengeluaran.vue'

export default [
    {path: '/home', component:home},
    {path: '*', component:home},
    {path: '/pemasukan', component:pemasukan},
    {path: '/pengeluaran', component:pengeluaran}
]