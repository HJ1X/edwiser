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
    }
}