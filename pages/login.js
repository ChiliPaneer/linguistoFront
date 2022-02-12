

export default function Form() {
    const registerUser = async event => {
      event.preventDefault()
  
      const res = await fetch('http://localhost:3000/person/', {
        body: JSON.stringify({
          name: event.target.name.value,
          age: event.target.age.value,
          nationality: event.target.nationality.value

        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
  
      const result = await res.json()
      // result.user => 'Ada Lovelace'
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" autoComplete="18" required />


        <label htmlFor="age">Nationality</label>
        <input id="nationality" type="text" autoComplete="american" required />

        <button type="submit">Register</button>
      </form>
    )
  }