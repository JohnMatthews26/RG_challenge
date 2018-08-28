import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

  handleSubmit(e) {
    e.preventDefault();


  }


  render() {

    return (
      <div className='inputs-div'>
        <form className='inputs-form'>
          <label className="inputs-label">Loan Size
            <input type="text"
              value={this.state.loanSize}
              onChange={this.handleChange('loanSize')}
              className="inputs-input"
              placeholder="$"
            />
          </label>
          <br/>
          <label className="inputs-label"> Credit Score
            <input type="text"
              value={this.state.creditScore}
              onChange={this.handleChange('creditScore')}
              className="inputs-input"
              placeholder="680"
            />
          </label>
          <br/>
          <label className="inputs-label"> Property Type
            <select name='residences' className='dropdowns' onChange={this.handleChange('propertyType')}>
              <option value="SingleFamily">Single Family</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="MultiFamily">Multi Family</option>
            </select>
          </label>
          <br/>
          <label className="inputs-label"> Occupancy
            <select name='type' className="dropdowns" onChange={this.handleChange('occupancy')}>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Investment">Investment</option>
            </select>
          </label>
          <br/>
          <input type="submit" value="Quote Rates"></input>
        </form>
      </div>
    );
  }
}

export default LoanInputs;
