export const dashboardStudent = {
    async previousMentors(id) {
        try {
            const response = await fetch('http://localhost:5000/dashboard/previous-mentors', {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponse = await response.json();
            if (Array.isArray(jsonResponse)) {
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
            const response = await fetch('http://localhost:5000/dashboard/new-mentors', {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponse = await response.json();
            if (response.status === 200) {
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
            const response = await fetch('http://localhost:5000/dashboard/add-request', {
                method: 'POST',
                body: JSON.stringify({ studentID, mentorID, description }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponse = await response.json();
            if (response.status === 200) {
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
            const response = await fetch('http://localhost:5000/dashboard-mentor/requests', {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponse = await response.json();
            if (Array.isArray(jsonResponse)) {
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
            const responseConnection = await fetch('http://localhost:5000/dashboard-mentor/accept-connection', {
                method: 'POST',
                body: JSON.stringify({ studentID, mentorID }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponseConnection = await responseConnection.json();
            if (responseConnection.status === 400) {
                msgConnection = jsonResponseConnection.msg;
            } else {
                msgConnection = 'Connection made successfully';
            }
            const responseDeleteRequest = await fetch('http://localhost:5000/dashboard-mentor/delete-request', {
                method: 'POST',
                body: JSON.stringify({ studentID, mentorID, description }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponseDeleteRequest = responseDeleteRequest.json();
            if (responseDeleteRequest.status === 400) {
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
            const responseDeleteRequest = await fetch('http://localhost:5000/dashboard-mentor/delete-request', {
                method: 'POST',
                body: JSON.stringify({ studentID, mentorID, description }),
                headers: { 'Content-Type': 'application/json' }
            });
            const jsonResponseDeleteRequest = responseDeleteRequest.json();
            if (responseDeleteRequest.status === 400) {
                return jsonResponseDeleteRequest.msg;
            } else {
                return 'Request deleted successfully';
            }
        } catch (error) {
            return 'Some error occured. Please try again later.';
        }
    }
}