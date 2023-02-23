import { Router } from './router.js'

// Mapeamento da rota 

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/theUniverse', '/pages/theUniverse.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = ()=> { router.handle()}

window.route = () => { router.route()}