export const sendEmail = () => {
    fetch('http://localhost:3000/send-email', {
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({to: localStorage.getItem('email')})
    })
}