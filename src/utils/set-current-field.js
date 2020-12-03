async function setCurrentField(id, field) {
    try {
        const response = await fetch('http://localhost:5000/set-current-field', {
            method: 'POST',
            body: JSON.stringify({ id, field }),
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default setCurrentField;