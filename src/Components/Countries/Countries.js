import React, { Component } from "react"
import { NativeSelect, FormControl } from "@material-ui/core"
import styles from "./Countries.module.css"
import { connect } from "react-redux"
import * as actions from "../../store/actions/index"

class Countries extends Component {
    componentDidMount() {
        this.props.onFetchCountry()
    }
    render() {
        const { fetchedCountries, handleCountryChange } = this.props
        return (
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }


}
const mapStateToProps = state => {
    return {
        fetchedCountries: state.countryNmae
    }
}
const dispatchPropsToState = dispatch => {
    return {
        onFetchCountry: () => dispatch(actions.fetchCountries())
    }
}

export default connect(mapStateToProps, dispatchPropsToState)(Countries)
