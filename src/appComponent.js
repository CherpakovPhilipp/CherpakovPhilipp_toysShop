import { connect } from 'react-redux';

import { Header } from './components/header';
import { Main } from './components/main';
import { Pages } from './pages';
import { Loader } from './components/loader';
import { checkUserService } from './services/userService';
import { setUser } from './store/user';

import './styles/general.scss';

export class AppComponent extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp, prevStates) {
    const { user } = this.props;

    // делаем редирект на гл. страницу при логауте
    if (prevStates.user && !user) {
      this.props.history.push('/');
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

  render() {
    const { isLoading } = this.state;

    return (
      <>
        <Header />
        <Main>
          {
            isLoading
              ? <Loader shown={isLoading} />
              : <Pages />
          }
        </Main>
      </>
    );
  }
}

export const App = connect()(AppComponent);
