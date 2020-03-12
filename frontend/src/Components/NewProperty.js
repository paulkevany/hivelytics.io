import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Header from './Header'
import { withStyles } from '@material-ui/core/styles'
import { Grid, TextField, Typography, Button, Paper } from '@material-ui/core'

const styles = {
  paper: {
    marginTop: 80,
    marginLeft: 300,
    width: '80%',
    height: '80%',
    alignItems: 'center'
  },
  textfield: {
    width: '80%'
  },
  form: {
    width: '100%'
  }
}
class NewProperty extends Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paper}>
        <NavBar />
        <Header />
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={classes.form}
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              container
              direction="column"
              alignItems="stretch"
              xs={10}
              sm={8}
              md={4}
              lg={3}
              spacing={8}
            >
              <Grid item>
                <Typography variant="h4">Add Property</Typography>
              </Grid>
              <Grid item>
                <TextField
                  inputProps={{ maxLength: 600 }}
                  id="address"
                  required
                  variant="outlined"
                  label="Address"
                  className={classes.textfield}
                  autoFocus
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item>
                <TextField
                  inputProps={{ maxLength: 1250 }}
                  id="description"
                  multiline
                  variant="outlined"
                  rows="3"
                  label="List Description (1250 Characters)"
                  className={classes.textfield}
                  onChange={this.handleChange}
                  margin="normal"
                />
              </Grid>

              <Grid item container layout="row" justify="flex-end">
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                  ></Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  }
}

NewProperty.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
})
export default connect(mapStateToProps)(withStyles(styles)(NewProperty))
