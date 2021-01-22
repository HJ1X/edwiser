export const signupStudent = {
    validMobile: /^\d{10}$/,
    validName: /^[A-Za-z\s]+$/,

    async submitForm(formValues) {
        let id = null;
        let msg = '';

        if (!formValues.mobile.match(this.validMobile)) {
            msg = 'Please input valid Mobile number';
        } else if (!formValues.name.match(this.validName)) {
            msg = 'Plase input valid Name';
        } else if (!(parseInt(formValues.dob.slice(0, 4)) < 2004)) {
            msg = 'Your age should atleast be 16';
        } else if (formValues.password !== formValues.confirmPassword) {
            msg = 'Passwords do not match';
        } else {
            try {
                const response = await fetch('https://edwiser-backend.herokuapp.com/signup', {
                    method: 'POST',
                    body: JSON.stringify(formValues),
                    headers: { 'Content-Type': 'application/json' }
                });
                if (response.status === 200) {
                    const jsonResponse = await response.json();
                    id = jsonResponse._id;
                    msg = 'Account created successfully';
                } else if (response.status === 400) {
                    const jsonResponse = await response.json();
                    if (jsonResponse.msg === 'duplicate key error') {
                        msg = 'Username already exists. Try a different username.';
                    } else {
                        msg = jsonResponse.msg // 'Some error occured. Try again later.';
                    }
                }
            } catch (error) {
                msg = "Network error occured. Try again later."
            }
        }

        return { id, msg };
    }
}

export const loginStudent = {
    async submitForm(formValues) {
        let id = null;
        let msg = '';

        try {
            const response = await fetch('https://edwiser-backend.herokuapp.com/login', {
                method: 'POST',
                body: JSON.stringify(formValues),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 200) {
                const jsonResponse = await response.json();
                if (jsonResponse._id) {
                    id = jsonResponse._id;
                    msg = "Logged in successfully";
                } else if (jsonResponse.msg === 'no user found') {
                    msg = 'User does not exist';
                } else if (jsonResponse.msg === 'incorrect password') {
                    msg = "Incorrect Password";
                } else {
                    msg = 'Some error occured. Please try again later';
                }
            } else if (response.status === 400) {
                const jsonResponse = await response.json();
                msg = jsonResponse.msg;
            }
        } catch (err) {
            msg = 'Network error occured. Try again later';
        }

        return { id, msg };
    }
}

export const loginMentor = {
    async submitForm(formValues) {
        let id = null;
        let msg = '';

        try {
            const response = await fetch('https://edwiser-backend.herokuapp.com/login-mentor', {
                method: 'POST',
                body: JSON.stringify(formValues),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 200) {
                const jsonResponse = await response.json();
                if (jsonResponse._id) {
                    id = jsonResponse._id;
                    msg = "Logged in successfully";
                } else if (jsonResponse.msg === 'no user found') {
                    msg = 'User does not exist';
                } else if (jsonResponse.msg === 'incorrect password') {
                    msg = "Incorrect Password";
                } else {
                    msg = 'Some error occured. Please try again later'
                }
            } else if (response.status === 400) {
                const jsonResponse = await response.json();
                msg = jsonResponse.msg;
            }
        } catch (err) {
            msg = 'Network error occured. Try again later';
        }

        return { id, msg };
    }
}