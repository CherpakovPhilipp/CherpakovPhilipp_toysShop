import './registration.scss';

export class Registration extends Component {
  fields = [
    { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
    { label: 'name', reg: /^[^ ]{3,20}$/ },
    { label: 'surname', reg: /^[^ ]{3,20}$/ },
    { label: 'password', reg: /^[^ ]{6,20}$/, secure: true }
  ];

  state = this.fields.reduce((acc, item, index) => ({ ...acc, [item.label]: { value: '', error: '' } }), {});

  changeField = ({ target }) => { // деструктурировали event
    const value = target.hasOwnProperty('checked') ? target.checked : target.value;

    this.setState({ [target.name]: { value, error: '' } });
  }

  validateField = ({ target }, index) => {
    const field = this.fields[index];
    const stateField = this.state[field.label];

    if (!field.reg.test(stateField.value)) {
      this.setState({ [field.label]: { ...stateField, error: `${field.label} don\'t match` } });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  getDisabledState() {
    return Object.values(this.state).some(state => !state.value || state.error);
  }

  isExcluded = (field) => {
    const res = this.props.exclude.find(name => field === name);

    return Boolean(res);
  }

  isDisabled = (field) => {
    const res = this.props.disabled.find(name => field === name);

    return Boolean(res);
  }

  render() {
    const { } = this.state;

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
                    onBlur={e => this.validateField(e, index)}
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
