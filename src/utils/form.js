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
                const response = await fetch('http://localhost:5000/signup', {
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
                    if (jsonResponse.msg.includes('duplicate key error')) {
                        msg = 'Username already exists. Try again.';
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
            const response = await fetch('http://localhost:5000/login', {
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
                    msg = 'Invalid credentials';
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

export const loginMentor = {
    async submitForm(formValues) {
        let id = null;
        let msg = '';

        try {
            const response = await fetch('http://localhost:5000/login-mentor', {
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
                    msg = 'Invalid credentials';
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