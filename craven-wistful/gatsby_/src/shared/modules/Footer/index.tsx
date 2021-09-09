import React from 'react'
import { Grid, Container, Box, Link } from '@material-ui/core'

export default function Footer(props) {
  console.log(props)
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
            {props.directories.site.siteMetadata.directories.map((directory: any, index: number) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>{directory.name}</Box>

                  {directory.children.map((child: any, index: number) => {
                    return (  
                      <Box>
                        <Link href={child.endpoint} color="inherit">{child.name}</Link>
                      </Box>
                    )
                  })}
                </Grid>
              )
            })}
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