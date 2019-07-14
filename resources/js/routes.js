//componentes
import Formulario from './components/Formulario.vue'
import Post from './components/Post'
import Resultado from './components/Resultado'
import Resultado2 from './components/Resultado2'

import Error from './components/Error'



const routes = [
     {
        path: '/',
        name: 'formulario',
        component: Formulario
     },
     {
         path: '/post',
         name: 'post',
         component: Post
     },
     {
        path: '/resultado',
        name: 'resultado',
        component: Resultado
     },
     {
        path: '/resultado2',
        name: 'resultado2',
        component: Resultado2
     },
     {
         path: '*',
         component: Error
     }
      //  mode : 'history'
    ]
   


export default routes