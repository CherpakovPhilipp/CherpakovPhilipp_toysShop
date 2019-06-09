import './userForm.scss';

export class UserForm extends Component {
  static defaultProps = { 
    data: {},
    disabled: [],
    exclude: []
  }

  fields = [
    { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
    { label: 'firstname', reg: /^[^ ]{3,20}$/ },
    { label: 'lastname', reg: /^[^ ]{3,20}$/ },
    { label: 'password', reg: /^[^ ]{6,20}$/, secure: true }
  ];

  state = this.fields.reduce((acc, item) => ({ 
    ...acc, 
    [item.label]: { value: this.props.data[item.label] || '', error: '' } }), {});

  changeField = ({ target }) => { // деструктурировали event
    const value = target.hasOwnProperty('checked') ? target.checked : target.value;

    this.setState({ [target.name]: { value, error: '' } });
  }

  validateField = (index) => {
    const field = this.fields[index];
    const stateField = this.state[field.label];

    if (!field.reg.test(stateField.value)) {
      this.setState({ [field.label]: { ...stateField, error: `${field.label} don't match` } });
    }
  }

  onSubmit = (event) => {
    const { handleSubmit } = this.props;

    const data = Object
      .entries(this.state)
      .reduce((acc, [key, item]) => ({ ...acc, [key]: item.value }), {});

    event.preventDefault();
    handleSubmit(data);
  }

  getDisabledState() {
    const { exclude } = this.props;

    return Object.entries(this.state)
      .filter(([key, item]) => item.value && !exclude.includes(key))
      .some(([key, item]) => !item.value || item.error);
    //return Object.values(this.state).some(state => !state.value || state.error);
  }

  isExcluded = (field) => {
    const { exclude } = this.props;

    const res = exclude.find(name => field === name);

    return Boolean(res);
  }

  isDisabled = (field) => {
    const { disabled } = this.props;

    const res = disabled.find(name => field === name);

    return Boolean(res);
  }

  render() {
    return (
      <>
        <form className="user-form" onSubmit={this.onSubmit}>
          {
            this.fields.map(({ label, secure }, index) => {
              if (this.isExcluded(label)) return;

              const elem = (
                <p key={label}>
                  <input
                    type={secure ? 'passwod' : 'text'}
                    name={label}
                    placeholder={`Enter ${label}`}
                    onChange={this.changeField}
                    value={this.state[label].value}
                    onBlur={() => this.validateField(index)}
                    className={this.state[label].error ? 'error' : 'correct'}
                    disabled={this.isDisabled(label)}
                  />
                  {this.state[label].error && <mark>{this.state[label].error}</mark>}
                </p>
              );
              return elem;
            })
          }

          <input
            type="submit"
            value="Save"
            disabled={this.getDisabledState()}
          />
        </form>
      </>
    );
  }
}
