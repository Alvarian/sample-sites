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
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>Main</Box>
              <Box>
                <Link href="/" color="inherit">About Us</Link>
              </Box>
              <Box>
                <Link href="/signup" color="inherit">Free Trail</Link>
              </Box>
              <Box>
                <Link href="/testimonies" color="inherit">Testimonies</Link>
              </Box>
              <Box>
                <Link href="/products" color="inherit">Our Products</Link>
              </Box>
              <Box>
                <Link href="/contact" color="inherit">Contact Us</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>Account</Box>
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