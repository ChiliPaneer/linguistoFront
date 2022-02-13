import Link from 'next/link'

export default function Login() {
    const loginUser = async event => {
      event.preventDefault();
      const user = event.target.username.value;
      const pass = event.target.password.value; 


      const res = await fetch('/api/loginTest', { //Set to real loginEndpoint
        body: JSON.stringify({  
          username: user,
          password: pass
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
      <h1>This is the login page</h1>

      <form onSubmit={loginUser}>
        <div>
        <label htmlFor="username">username</label> <br/>
        <input id="username" name="username" type="text" placeholder='JohnDoe123' required />
        </div>

        <div>
        <label htmlFor="password">Password</label>  <br/>
        <input id="password" type="password" required />
        </div>

        <button type="submit">Login</button>
      </form>

      <h4>
            Don't have an account? {' '}
            <Link href='/signup'>
            <a>Sign up</a>
            </Link>
        </h4>

      </>
    )
  }