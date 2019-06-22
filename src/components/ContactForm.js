import React from 'react'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      price: props.price * 1,
      quantity: '1',
      product: props.product
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, product, phone, quantity, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="control">
          <label>
            Nombre: <input className="input" type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p className="control">
          <label>
            Email: <input className="input" type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p className="control">
          <label>
            Telefono: <input className="input" type="text" name="phone" value={phone} onChange={this.handleChange} />
          </label>
        </p>


        <div className="field is-grouped">
          <p className="control">

            <label>
              Product: <input className="input" type="text" name="product" value={product} onChange={this.handleChange} />
            </label>
          </p>
          <p className="control">
            <label>
              Cantidad: <input className="input" type="text" name="quantity" value={quantity} onChange={this.handleChange} />
            </label>

          </p>
        </div>
        <p className="control">
          Total del precio es: {price}
        </p>
        <p className="control">
          <label>
            Message: <textarea className="input" name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button className="btn" type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default ContactForm
