import './form.scss';

export class Form extends Component {
  fields = [
    { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
    { label: 'name', reg: /^[^ ]{3,20}$/ },
    { label: 'surname', reg: /^[^ ]{3,20}$/ },
    { label: 'password', reg: /^[^ ]{6,20}$/, secure: true }
  ];

  state = this.fields.reduce((acc, item) => ({ ...acc, [item.label]: {value: '', error: ''}}), {});

  changeField = ({ target }) => {            // деструктурировали event
    const value = target.hasOwnProperty('checked') ? target.checked : target.value;

    this.setState({ [target.name]: { value, error: '' }})
  }

  validateField = ({ target }, index) => {
    const field =  this.fields[index];
    const stateField = this.state[field.label];

    if (!field.reg.test(stateField.value)) {
      this.setState({ [field.label]: { ...stateField, error: `${field.label} don\'t match` }})
    }
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  getDisabledState(fields) {
    return Object.values(this.state).some(state => !state.value  || state.error);
  }
  
  render() {
    const { } = this.state;

    return (
      <>
        <form action="">
          {
            this.fields.map(({ label, secure }, index) => (
              <p key={label}>
                <input
                  type={secure ? 'passwod' : 'text'}
                  name={label}
                  placeholder={`Enter ${label}`}
                  onChange={this.changeField}
                  value={this.state[label].value}
                  onBlur={e => this.validateField(e, index)}
                  className={this.state.error ? 'error' : 'correct'}
                />
                {this.state[label].error && <mark>{this.state[label].error}</mark>}
              </p>
            ))
          }

          <input 
            type="submit" 
            onSubmit={this.onSubmit}
            value="Save"
            disabled={this.getDisabledState}
          />
        </form>
      </>
    )
  }
}