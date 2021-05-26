import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Container, Typography } from '@material-ui/core'
import AuthService from '../../services/auth/AuthService'
import { useHistory } from 'react-router-dom'

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})

export default function Login() {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const authService = new AuthService()

  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: 'admin@test.com',
      password: '12345678'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsloading(true)

      authService
        .login({
          email: values.email,
          password: values.password
        })
        .subscribe(
          (response) => {
            console.log('#debug response:', response)
            localStorage.setItem('token', response.token)
            history.push('/')
          },
          (error) => {
            setIsloading(false)
            console.log('#debug error:', error)
          },
          () => {
            setIsloading(false)
          }
        )
    }
  })

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container maxWidth="sm">
        <Card variant="outlined">
          <CardContent>
            <div className="text-center mb-4">
              <Typography variant="h5" component="h2">
                Please Login
              </Typography>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-8">
                <div className="mb-4">
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    disabled={isLoading}
                  />
                </div>
                <div className="mt-4">
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    size="small"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    disabled={isLoading}
                  />
                </div>
              </div>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={isLoading}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}
