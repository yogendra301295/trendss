import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.7092821585509!2d78.45956630002526!3d29.75647912362322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390964bb346aea59%3A0x77a8219a0e251a08!2zMjnCsDQ1JzIyLjciTiA3OMKwMjcnMzUuNCJF!5e1!3m2!1sen!2sin!4v1671722136603!5m2!1sen!2sin" 
    width="90%" 
    height="350" 
    style={ {border: "0"} }
    allowFullScreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
      <form action="https://formspree.io/f/xjvdbelr" method="POST" className="contact-inputs">
      <input type="text"
      placeholder="Username"
      name="username"
      required
      autoComplete="off"
      />

<input type="email"
      placeholder="Email"
      name="Email"
      required
      autoComplete="off"
      />

      <textarea name="message"
      cols="30"
      rows="10"
      autoComplete="off"
      required
      placeholder="Enter your message"> 
      </textarea> 

      <input type="submit" value="Send"/>
      </form>

      </div>
    </div>
  </Wrapper>;
};

export default Contact;
