import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';

import { Header } from './components/header';
import { Main } from './components/main';
import { Pages } from './pages';
import { Loader } from './components/loader';
import { checkUserService } from './services/userService';
import { getShopInfoService } from './services/categoriesService';
import { setUser } from './store/user';
import { setInfo } from './store/categories';
import { setError } from './store/status';
import { setUserAsync } from './store/user';

import './styles/general.scss';

export class AppComponent extends Component {
  state = {
    isLoading: false
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp) {
    const { history, user, status, dispatch } = this.props;

    // делаем редирект на гл. страницу при логауте
    if (prevProp.user && !user) {
      history.push('/');
    }

    if (!prevProp.user && user) {
      this.getInfo();
    }

    if (!prevProp.status && status) {
      this.container.error(
        <em>{status}</em>,
        <strong>Error</strong>
      );

      dispatch(setError(''));
    }
  }

  checkUser = () => {
    // const { dispatch } = this.props;
    // this.setState({ isLoading: true });

    // checkUserService()
    //   .then((user) => {
    //     dispatch(setUser(user));
    //     this.setState({ isLoading: false });
    //   })
    //   .catch(() => {
    //     this.setState({ isLoading: false });
    //   });
    this.props.dispatch(setUserAsync());
  }

  getInfo = () => {
    const { dispatch } = this.props;

    getShopInfoService().then(data => dispatch(setInfo(data)));
  }

  render() {
    const { isLoading } = this.state;
    const { user } = this.props;

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
