import Link from 'next/link'


export default function Signup() {
    const registerUser = async event => {
      event.preventDefault();
      const name = event.target.name.value;
      const lastName = event.target.last_name.value;
      const email = event.target.email.value;
      const userName = event.target.username.value;
      const password = event.target.password.value;

      const res = await fetch('/api/signupTest', { //Set to real sign up endpoint
        body: JSON.stringify({
          name: name,
          last_name: lastName,
          email: email,
          username: userName,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
  
      const result = await res.json();
    }
  
    return (
      <>
      <h1>This is the Signup page</h1>

      <form onSubmit={registerUser}>
        
      <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text"  required />

        <label htmlFor="last_name">Last Name: </label>
        <input id="last_name" name="last_name" type="text" required />

        <label htmlFor="email">Email Address: </label>
        <input id="email" type="email" required />

        <label htmlFor="username">Username: </label>
        <input id="username" type="text" required />

        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="password" required />

        <button type="submit">Register</button>
      </form>

      <h4>
            Already have an account? {' '}
            <Link href='/login'>
            <a>Login!</a>
            </Link>
        </h4>

      </>
    )
  }
