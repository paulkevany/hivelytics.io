import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Header from './Header'
import { Redirect } from 'react-router-dom'
import { Typography, Link, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  Hero,
  ScrollDownIndicator,
  Section,
  Checklist
} from 'react-landing-page'
import CheckIcon from '@material-ui/icons/Check'
import { Helmet } from 'react-helmet'

// Import Other compoents here

// Import actions functions here

const styles = {
  leftChecklist: {
    float: 'left',
    marginLeft: '12%'
  },
  rightChecklist: {
    float: 'right',
    marginRight: '12%'
  },
  loginLink: {
    color: '#808080',
    marginTop: 20
  },
  description: {
    color: '#312222'
  },
  button: {
    backgroundColor: '#21FFD0',
    marginTop: 35,
    color: '#204E69'
  },
  story: {
    marginTop: -30
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props

    const { authenticated } = this.props.auth

    const isLoggedIn = authenticated ? <Redirect to="/dashboard" /> : null

    const title =
      'Hivelytics.io - Dispute resolution and rental property insights for Remote Landlords'
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {isLoggedIn}
        <Hero
          color="white"
          bg="black"
          backgroundImage="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        >
          <Typography variant="h1">Hivelytics.io</Typography>
          <Typography variant="h6">
            Dispute resolution and rental property insights for Remote Landlords
          </Typography>
          <Button variant="contained" style={styles.button} href="/signup">
            Get Started!
          </Button>
          <Link href="/login" className={classes.loginLink}>
            <Typography>Already registered? Log in</Typography>
          </Link>
          <ScrollDownIndicator />
        </Hero>
        <Section
          bg="#FAFAFA"
          width={1}
          heading="What does Hivelytics.io provide?"
          color="#5d5c5c"
        >
          <Typography
            className={classes.description}
            variant="h6"
            align="center"
          >
            Hivelytics.io provides an evidence based approach to aid landlords
            and tenants in the dispute resolution process, <br /> while
            providing rental property insights, specifically tailored for the
            remote landlord. <br />
          </Typography>
        </Section>
        <Section
          bg="#FAFAFA"
          color="#5d5c5c"
          heading="For Landlords"
          width={0.4}
          className={classes.leftChecklist}
        >
          <Checklist
            className={classes.description}
            children={[
              'Evidence based dispute resolution',
              'Remote property insights',
              'Property Maintenance Scheduling',
              'Remote Maintenance Management'
            ]}
            checkmark={<CheckIcon />}
          />
        </Section>
        <Section bg="#FAFAFA" color="#5d5c5c" heading="For Tenants" width={0.4}>
          <Checklist
            className={classes.description}
            children={[
              'Evidence based dispute resolution',
              'Real-time maintenance logging',
              'Less invasive property inspections',
              'Reduced maintenance turnaround time'
            ]}
            checkmark={<CheckIcon />}
          />
        </Section>
      </div>
    )
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
})
export default connect(mapStateToProps)(withStyles(styles)(Home))
