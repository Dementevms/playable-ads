import { Container } from '../modules/wrapper';

import Austin from './austin/austin';
import BookStand from './book-stand/book-stand';
import Globe from './globe/globe';
import IconHammer from './icon-hammer/icon-hammer';
import Final from './final/final';
import Logo from './logo/logo';
import Plant01 from './plant-01/plant-01';
import Plant02 from './plant-02/plant-02';
import Plant03 from './plant-03/plant-03';
import Sofa from './sofa/sofa';
import Stairs from './stairs/stairs';
import Table from './table/table';
import Menu from './menu/menu';

const components = {
  Austin,
  BookStand,
  Final,
  Globe,
  IconHammer,
  Logo,
  Plant01,
  Plant02,
  Plant03,
  Sofa,
  Stairs,
  Table,
  Menu,
};
export default class Components extends Container {
  constructor(app) {
    super(app, components);
  }
}
