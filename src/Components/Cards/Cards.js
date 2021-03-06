import React from "react"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"
import styles from "./Cards.module.css"
import cx from "classnames"

export const Cards = (props) => {
    if (!props.data) {
        return 'Loading...'
    }
    const {data} = props
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent className={styles.cardMain}>
                        <Typography className={styles.mainHeading} color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={2}
                                end={data.confirmed.value}
                                duration={2.5}
                                separator=","
                                className={styles.covidCounter}
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoveries)}>
                    <CardContent className={styles.cardMain}>
                        <Typography className={styles.mainHeading} color="textSecondary" gutterBottom>Recoveries</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={2}
                                end={data.recovered.value}
                                duration={2.5}
                                separator=","
                                className={styles.covidCounter}
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent className={styles.cardMain}> 
                        <Typography className={styles.mainHeading} color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={2}
                                end={data.deaths.value}
                                duration={2.5}
                                separator=","
                                className={styles.covidCounter}
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

