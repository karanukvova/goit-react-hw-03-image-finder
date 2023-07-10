import { Component } from 'react';
import PropTypes from 'prop-types';
import css from  './searchbar.module.css';
class Searchbar extends Component {
    state = {
        name: '',
    }
    handleSubmit = async event => { 
        event.preventDefault()
        const data = this.state.name;
        await this.props.onSubmit(data);
        this.setState({
          name: ''
        });
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    render() {
    
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            autoComplete="off"
            required
            name="name"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;