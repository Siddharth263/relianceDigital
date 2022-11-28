// only for pages other than home page

let brandNavbar = () => {
  return `<div>
  <div id="upper-navbar">
    <table>
      <thead>
        <tr>
          <td>
            <h5>Our Brand Promises</h5>
          </td>
          <td>
            <a href="https://www.reliancedigital.in/content/returnsandcancellations">
              <h5><i class="fa-solid fa-arrow-right-arrow-left"></i> Easy Return</h5>
            </a>
          </td>
          <td>
            <h5><i class="fa-solid fa-truck"></i> Next Day Delivery</h5>
          </td>
          <td>
            <a href="https://www.reliancedigital.in/content/resq_services">
              <h5><i class="fa-solid fa-building-circle-arrow-right"></i> Service Center</h5>
            </a>
          </td>
          <td>
            <h5><i class="fa-solid fa-circle-nodes"></i> Unmatched Network</h5>
          </td>
          <td>
            <a href="https://www.reliancedigital.in/locateus">
              <h5><i class="fa-solid fa-location-dot"></i> Find a store</h5>
            </a>
          </td>
          <td>
            <a href="https://www.reliancedigital.in/content/contactus">
              <h5>Contact Us</h5>
            </a>
          </td>
        </tr>
      </thead>
    </table>
  </div>
  <div id="search-bar">
    <div>
      <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="reliancedigital.in">
    </div>
    <div>
      <input type="text" placeholder="Find your favorite products"><i class="fa fa-search"
        style="color: rgb(187, 187, 187);"></i>
    </div>
    <div class="cart">
      <span>Select your PIN Code | <i class="fa-solid fa-cart-shopping"></i> Cart | <i class="fa-solid fa-user"></i>
        Login</span>
    </div>
  </div>
  <div id="products-bar">
    <div>mobiles & tablets <i class="fa-solid fa-angle-down"></i></div>
    <div>televisions <i class="fa-solid fa-angle-down"></i></div>
    <div>audio <i class="fa-solid fa-angle-down"></i></div>
    <div>home applicances <i class="fa-solid fa-angle-down"></i></div>
    <div>computers <i class="fa-solid fa-angle-down"></i></div>
    <div>cameras <i class="fa-solid fa-angle-down"></i></div>
    <div>kitchen appliances <i class="fa-solid fa-angle-down"></i></div>
    <div>personal care <i class="fa-solid fa-angle-down"></i></div>
    <div>accessories <i class="fa-solid fa-angle-down"></i></div>
  </div>
</div>`
};

export default brandNavbar;