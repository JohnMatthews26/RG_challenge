import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-responsive-modal';

class LoanInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanSize: "",
      creditScore: "",
      propertyType: "",
			occupancy: ""
    };
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
		return e => this.setState({ [key]: e.target.value });
	}


  render() {

    return (
      <div className='inputs-div'>
        <form className='inputs-form'>
          <label className="inputs-label">
            <input type="number"
              value={this.state.loanSize}
              onChange={this.handleChange('loanSize')}
              className="inputs-input"
              placeholder="$"
            />
          </label>

          <label className="inputs-label">
            <input type="number"
              value={this.state.creditScore}
              onChange={this.handleChange('creditScore')}
              className="inputs-input"
              placeholder="680"
            />
          </label>

          <label className="inputs-label">
            <select name='residences' className='dropdowns' onChange={this.handleChange('propertyType')}>
              <option value="SingleFamily">Single Family</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="MultiFamily">Multi Family</option>
            </select>
          </label>

          <label className="inputs-label">
            <select name='type' className="dropdowns" onChange={this.handleChange('occupancy')}>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Investment">Investment</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default LoanInputs;
