import React from 'react'

function Help() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key","fd4340b8-4516-4bba-bd0b-b20668e42c58");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='help'>
        <div className="help-content">
          <h3>#ForAnyQuery</h3>
          <h2>Don't Hesitate to Ask</h2>
          <p>Feel free to reach out to us if you have any questions or concerns. <span>We're here to assist you in any way we can to ensure you have the best possible experience during your stay.</span></p>
        </div>
        <form onSubmit={onSubmit}>
          <input type="email" name="name" id="email" placeholder='email' required />
          <input type="text" name="query" id="query" required placeholder='enter query'/>
          <button className='btn query-btn' type='submit'>submit</button>
        </form>
        <span>{result}</span>
      </div>
  )
}

export default Help