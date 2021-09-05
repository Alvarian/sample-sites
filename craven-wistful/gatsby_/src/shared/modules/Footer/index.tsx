import React from 'react'
import { Grid, Container, Box, Link } from '@material-ui/core'

export default function Footer() {
  return (
    <footer>
      <Box
        bgcolor='text.secondary'
        color='white'
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Company</Box>
              <Box>
                <Link href="/about" color="inherit">About Us</Link>
              </Box>
              <Box>
                <Link href="/testimonies" color="inherit">Testimonies</Link>
              </Box>
              <Box>
                <Link href="/leadership" color="inherit">Leadership</Link>
              </Box>
              <Box>
                <Link href="/contact" color="inherit">Contact Us</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Services</Box>

              {/* List of services that can have both data and personal trades */}
              <Box>
                <Link href="/contractor1" color="inherit">Contractor1</Link>
              </Box>

              <Box>
                <Link href="/contractor2" color="inherit">Contractor2</Link>
              </Box>

              <Box>
                <Link href="/api1" color="inherit">api1</Link>
              </Box>

              <Box>
                <Link href="/api2" color="inherit">api2</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>

              <Box>
                <Link href="/signup" color="inherit">Free Trail</Link>
              </Box>

              <Box>
                Have an account? <Link href="/login">Log In!</Link>
              </Box>
            </Grid>
          </Grid>

          <Box
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            textAlign='center'
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}