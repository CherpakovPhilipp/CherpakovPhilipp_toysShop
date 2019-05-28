import { connect } from 'react-redux';

import { Header } from './components/header';
import { Main } from './components/main';
import { Pages } from './pages';
import { Loader } from './components/loader';
import { checkUserService } from './services/userService';
import { getShopInfoService } from './services/categoriesService';
import { setUser } from './store/user';
import { setInfo } from './store/categories';
import { ToastContainer } from "react-toastr";


import './styles/general.scss';

export class AppComponent extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp, prevStates) {
    const { history, user, status } = this.props;

    // делаем редирект на гл. страницу при логауте
    if (prevProp.user && !user) {
      history.push('/');
    }

    if (!prevProp.user && user) {
      this.getInfo();
    }

    if (!prevProp.status && user) {
      this.container.error(
        <em>{status}</em>,
        <strong>Error</strong>
      );
    }
  }

  checkUser = () => {
    this.setState({ isLoading: true });

    checkUserService()
      .then((user) => {
        this.props.dispatch(setUser(user));
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  }

  getInfo = () => {
    getShopInfoService().then(data => this.props.dispatch(setInfo(data)));
  }

  render() {
    const { isLoading } = this.state;
    const { user ={}, info = {} } = this.props;

    return (
      <>
        <Header />
        <Main>
          {
            isLoading
              ? <Loader shown={isLoading} />
              : <Pages user={user} />
          }
        </Main>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({ user: state.user, info: state.info, status: state.status });

export const App = connect(mapStateToProps)(AppComponent);
