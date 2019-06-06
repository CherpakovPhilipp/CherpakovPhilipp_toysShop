import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';

import { Header } from './components/header';
import { Main } from './components/main';
import { Pages } from './pages';
import { Loader } from './components/loader';
import { getShopInfoService } from './services/categoriesService';
import { setUser, setUserAsync } from './store/user';
import { setInfo, setInfoAsync } from './store/categories';
import { setError } from './store/status';

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
    this.props.dispatch(setUserAsync());
  }

  getInfo = () => {
    const { dispatch } = this.props;

    dispatch(setInfoAsync());
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

const mapStateToProps = state => ({ user: state.user.data, info: state.info, status: state.status });

export const App = connect(mapStateToProps)(AppComponent);
