import React from 'react';
import TextField from '@mui/material/TextField';
import '../App.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { formik,useFormik } from "formik";
import * as yup from 'yup';

function onSubmitFunction(values) {
    console.log("values: ",values)
}

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    // password: yup
    //     .string('Enter your password')
    //     .min(8, 'Password should be of minimum 8 characters length')
    //     .max(10, 'No more then 10')
    //     .required('Password is required'),
    name: yup
        .string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    address: yup
        .string()
        .required('Required'),
    number: yup
        .number()
        .min(11, "No more than 11 digits")
        .required('Required')
});









function Signup() {

    const Div = styled('div')(({ theme }) => ({

        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            width: "auto",
            height: "620px",
            marginLeft: "auto",
            marginRight: "auto",


        },
        [theme.breakpoints.up('xs')]: {
            width: "auto",
            height: "620px",
            marginLeft: "auto",
            marginRight: "auto",


        },
        [theme.breakpoints.down('md')]: {

            width: "auto",
            height: "620px",
            marginLeft: "auto",
            marginRight: "auto",




        },
        [theme.breakpoints.up('md')]: {

            width: "auto",
            height: "620px",
            marginLeft: "auto",
            marginRight: "auto",



        },
        [theme.breakpoints.up('lg')]: {

            width: "auto",
            height: "620px",
            marginLeft: "auto",
            marginRight: "auto",


        },
        [theme.breakpoints.up('xl')]: {
            width: "auto",
            height: "620px",
            marginLeft: "auto",
            marginRight: "auto",

        },
    }));




    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',
            email: '',
            password: '',
            number: '',
            address: '',
        },
        onSubmit: {onSubmitFunction}
    });

    return (
        <>
            <Div className="signup">
                <h1 className='heading'>Signup Page</h1>
                <form onSubmit={formik.handleSubmit}>
                    

                    <TextField
                    id="outlined-basic"
                    type ="text"
                    label="Enter Name"
                    variant="outlined"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}

                    // error={formik.touched.name && Boolean(formik.errors.name)}
                    // helperText={formik.touched.name && formik.errors.name}
                    />
                    <br />
                    <br />
                    <TextField
                    id="outlined-basic"
                    type ="text"
                    label="Enter Address"
                    variant="outlined"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}

                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}

                    />
                    <br />
                    <br />
                    <TextField
                    id="outlined-basic"
                    type ="text"
                    label="Enter Phone Number"
                    variant="outlined"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}

                    error={formik.touched.number && Boolean(formik.errors.number)}
                    helperText={formik.touched.number && formik.errors.number}
                    />
                    <br />
                    <br />
                    <TextField
                    id="outlined-basic"
                    type ="email"
                    label="Enter Email"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}

                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                    <br />
                    <br />
                    <TextField
                    id="outlined-basic"
                    type ="password"
                    label="Enter Password"
                    variant="outlined"
                    name="passowrd"
                    value={formik.values.password}
                    onChange={formik.handleChange}

                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                    <br />
                    <br />
                    
                    <Stack className="stack" direction="row" spacing={5}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Clear Form
                    </Button>
                    <Button variant="contained" type ="submit" endIcon={<SendIcon />}>
                    Login
                    </Button>
                    </Stack>
                </form>
            </Div>
        </>
    )
}


export default Signup;