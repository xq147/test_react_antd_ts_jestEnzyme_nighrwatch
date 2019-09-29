import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; //enzyme关于react不同版本的适配器

Enzyme.configure({ adapter: new Adapter() });
