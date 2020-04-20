// import React, { useEffect, useState } from "react"
// import { NativeSelect, FormControl } from "@material-ui/core"
// import { fetchCountries } from "../../store/actions/fetchData"
// import styles from "./Countries.module.css"

// export const Countries = ({ handleCountryChange }) => {
//     const [fetchedCountries, setfetchedContries] = useState([])

//     useEffect(() => {
//         const fetchAPI = async () => {
//             setfetchedContries(await fetchCountries())
//         }
//         fetchAPI()
//     }, [setfetchedContries])

//     console.log(fetchedCountries)

//     return (
//         <FormControl className={styles.formControl}>
//             <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
//                 <option value="">Global</option>
//                 {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
//             </NativeSelect>
//         </FormControl>
//     )
// }


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
        return (
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => this.props.handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {this.props.fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
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
