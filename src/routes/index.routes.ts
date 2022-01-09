import informationApi from './information.routes'
import menuApi from './menu.routes';
import subMenuApi from './submenu.routes';
import kategoriApi from './kategori.routes';
import artikelApi from './artikel.routes';
import testingApi from './testing.routes';

const api = `/api/v1`;

const router = (app:any) => {
    app.use(`${api}/menu`, menuApi)
    app.use(`${api}/submenu`, subMenuApi)
    // app.use(`${api}/information`, informationApi)
    app.use(`${api}/kategori`, kategoriApi)
    app.use(`${api}/artikel`, artikelApi)
    // app.use(`${api}/icon`, iconApi)
    app.use(`${api}/testing`, testingApi)
}

export default router