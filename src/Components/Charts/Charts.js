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
        const { dailyData, data, country } = this.props
        const lineChart = (
            dailyData.length ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }]
                }}

            />) : null
        )

        const barChart = (
            data ? (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `current state in ${country}` }
                }}
            />) : null
        )
        return (
            <div className={styles.container}>
                {country ? barChart : lineChart}
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
