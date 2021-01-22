export const dashboardStudent = {
    async previousMentors(id) {
        try {
            const response = await fetch('https://edwiser-backend.herokuapp.com/dashboard/previous-mentors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'bearer ' + id
                }
            });
            const jsonResponse = await response.json();
            if (response.status === 401) {
                return 'No token provided';
            } else if (response.status === 403) {
                return 'Access denied';
            } else if (Array.isArray(jsonResponse)) {
                return jsonResponse
            } else if (jsonResponse.msg === 'no user found') {
                return 'Not connected with any mentor yet.';
            } else {
                return jsonResponse.msg;
            }

        } catch (error) {
            return 'Some error occured. Please try again later.';
        }
    },

    async newMentors(id) {
        try {
            const response = await fetch('https://edwiser-backend.herokuapp.com/dashboard/new-mentors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'bearer ' + id
                }
            });
            const jsonResponse = await response.json();
            if (response.status === 401) {
                return 'No token provided';
            } else if (response.status === 403) {
                return 'Access denied';
            } else if (response.status === 200) {
                return jsonResponse;
            } else {
                return jsonResponse.msg;
            }
        } catch (error) {
            return 'Some error occured. Please try again later.';
        }
    },

    async addRequest(studentID, mentorID, description) {
        try {
            const response = await fetch('https://edwiser-backend.herokuapp.com/dashboard/add-request', {
                method: 'POST',
                body: JSON.stringify({ mentorID, description }),
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'bearer ' + studentID
                }
            });
            const jsonResponse = await response.json();
            if (response.status === 401) {
                return {
                    status: 'error',
                    msg: 'No token provided'
                }
            } else if (response.status === 403) {
                return {
                    status: 'error',
                    msg: 'Access denied'
                }
            } else if (response.status === 200) {
                return {
                    status: 'success',
                    msg: jsonResponse.msg
                }
            } else {
                return {
                    status: 'error',
                    msg: jsonResponse.msg
                }
            }
        } catch (error) {
            return {
                status: 'error',
                msg: 'Some error occured. Please try again later.'
            }
        }
    }
}

export const dashboardMentor = {
    async requests(id) {
        try {
            const response = await fetch('https://edwiser-backend.herokuapp.com/dashboard-mentor/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'bearer ' + id
                }
            });
            const jsonResponse = await response.json();
            if (response.status === 401) {
                return 'No token provided';
            } else if (response.status === 403) {
                return 'Access denied';
            } else if (Array.isArray(jsonResponse)) {
                return jsonResponse
            } else if (jsonResponse.msg === 'no request found') {
                return 'No pending requests.';
            } else {
                return jsonResponse.msg;
            }
        } catch (error) {
            return 'Some error occured. Please try again later.';
        }
    },

    async acceptRequest(studentID, mentorID, description) {
        let msgConnection, msgDeleteRequest;

        try {

            // Response from Connection request
            const responseConnection = await fetch('https://edwiser-backend.herokuapp.com/dashboard-mentor/accept-connection', {
                method: 'POST',
                body: JSON.stringify({ studentID }),
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'bearer ' + mentorID
                }
            });
            const jsonResponseConnection = await responseConnection.json();
            if (responseConnection.status === 401) {
                msgConnection = 'No token provided';
            } else if (responseConnection.status === 403) {
                msgConnection = 'Access denied';
            } else if (responseConnection.status === 400) {
                msgConnection = jsonResponseConnection.msg;
            } else {
                msgConnection = 'Connection made successfully';
            }

            // Response from delete request from dashboard
            const responseDeleteRequest = await fetch('https://edwiser-backend.herokuapp.com/dashboard-mentor/delete-request', {
                method: 'POST',
                body: JSON.stringify({ studentID, description }),
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'bearer ' + mentorID
                }
            });
            const jsonResponseDeleteRequest = responseDeleteRequest.json();
            if (responseDeleteRequest.status === 401) {
                msgDeleteRequest = 'No token provided';
            } else if (responseDeleteRequest.status === 403) {
                msgDeleteRequest = 'Access denied';
            } else if (responseDeleteRequest.status === 400) {
                msgDeleteRequest = jsonResponseDeleteRequest.msg;
            } else {
                msgDeleteRequest = 'Request deleted successfully';
            }

        } catch (error) {
            return 'Some error occured. Please try again later.';
        }

        return { msgConnection, msgDeleteRequest };
    },

    async rejectRequest(studentID, mentorID, description) {
        try {

            const responseDeleteRequest = await fetch('https://edwiser-backend.herokuapp.com/dashboard-mentor/delete-request', {
                method: 'POST',
                body: JSON.stringify({ studentID, description }),
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'bearer ' + mentorID
                }
            });
            const jsonResponseDeleteRequest = responseDeleteRequest.json();
            if (responseDeleteRequest.status === 401) {
                return 'No token provided';
            } else if (responseDeleteRequest.status === 403) {
                return 'Access denied';
            } else if (responseDeleteRequest.status === 400) {
                return jsonResponseDeleteRequest.msg;
            } else {
                return 'Request deleted successfully';
            }

        } catch (error) {
            return 'Some error occured. Please try again later.';
        }
    }
}