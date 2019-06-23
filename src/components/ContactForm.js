import React from 'react'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialSate = {
      name: "",
      email: "",
      phone: "",
      message: "",
      price: props.price,
      quantity: 1,
      product: props.product,
      totalPrice: props.price,
      noValid: true
    };
    this.state = this.initialSate
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Success!");
        this.setState(this.initialSate);
        this.handleClosed()
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleClosed = () => {
    this.props.onClick()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })

  };

  getPrice(quantity) {
    if (quantity === "") {
      this.setState({ totalPrice: 0 })
      return
    }
    this.setState({ totalPrice: parseInt(this.state.price) * parseInt(quantity) })
  }

  validFrom = () => {
    const { name, email } = this.state;
    const noValid = !name || !email;
    return noValid;
  }

  render() {
    const { name, email, message, product, phone, quantity, totalPrice, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="control">
          <label>
            Nombre *: <input className="input" type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p className="control">
          <label>
            Email *: <input className="input" type="email" name="email" value={email} onChange={this.handleChange} />
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
              Cantidad: <input className="input" type="text" name="quantity" value={quantity} onChange={e => {
                this.handleChange(e)
                this.getPrice(e.target.value)
              }} />
            </label>

          </p>
        </div>
        <p className="control total__price">
          Precio u.: {price} € | Total: <span>{totalPrice.toString()} €</span>
        </p>
        <p className="control">
          <label>
            Message: <textarea className="input" name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>* Los campos son obligatorios</p>
        <p>
          <button
            className="btn"
            type="submit"
            disabled={this.validFrom()}>Send</button>
        </p>
      </form>
    );
  }
}

export default ContactForm
