// import React, { useState, useEffect } from "react"
// import { fetchDailyData } from "../../store/actions/fetchData"
// import { Line, Bar } from "react-chartjs-2"
// import styles from "./Charts.module.css"

// export const Chart = (props) => {
//     const [dailyData, setDailyData] = useState([])

//     useEffect(() => {
//         const fetchAPI = async () => {
//             setDailyData(await fetchDailyData())
//         }
//         fetchAPI()
//     }, [])

//     const lineChart = (
//         dailyData.length ? (<Line
//             data={{
//                 labels: dailyData.map(({ date }) => date),
//                 datasets: [{
//                     data: dailyData.map(({ confirmed }) => confirmed),
//                     label: 'Infected',
//                     borderColor: '#3333ff',
//                     fill: true
//                 }, {
//                     data: dailyData.map(({ deaths }) => deaths),
//                     label: 'Deaths',
//                     borderColor: 'red',
//                     backgroundColor: 'rgba(255,0,0,0.5)',
//                     fill: true
//                 }]
//             }}

//         />) : null
//     )

//     const barChart = (
//         props.data ? (<Bar
//             data={{
//                 labels: ['Infected', 'Recovered', 'Deaths'],
//                 datasets: [{
//                     label: 'People',
//                     backgroundColor: ['rgba(0,0,255,0.5)',
//                         'rgba(0,255,0,0.5)',
//                         'rgba(255,0,0,0.5)'],
//                     data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value]
//                 }]
//             }}
//             options={{
//                 legend: { display: false },
//                 title: { display: true, text: `current state in ${props.country}` }
//             }}
//         />) : null
//     )

//     return (
//         <div className={styles.container}>
//             {props.country ? barChart : lineChart}
//         </div>
//     )
// }

import React, { Component } from "react"
import { Line, Bar } from "react-chartjs-2"
import styles from "./Charts.module.css"
import { connect } from "react-redux"
import * as actions from "../../store/actions/index"

class Chart extends Component {
    componentDidMount() {
        this.props.onDailyData()
    }

    render() {
        const lineChart = (
            this.props.dailyData.length ? (<Line
                data={{
                    labels: this.props.dailyData.map(({ date }) => date),
                    datasets: [{
                        data: this.props.dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: this.props.dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }]
                }}

            />) : null
        )

        const barChart = (
            this.props.data ? (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'],
                        data: [this.props.data.confirmed.value, this.props.data.recovered.value, this.props.data.deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `current state in ${this.props.country}` }
                }}
            />) : null
        )
        return (
            <div className={styles.container}>
                {this.props.country ? barChart : lineChart}
            </div>
        )
    }


}
const mapStateToProps = state => {
    return {
        dailyData: state.dailyData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onDailyData: () => dispatch(actions.fetchDailyData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
