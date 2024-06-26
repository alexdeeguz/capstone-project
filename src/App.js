import './App.css';

function App() {
  return (
    <div className='home'>
      <nav>
        <ul>
          <img src='assets/Logo.svg' />
          <li>home</li>
          <li>about</li>
          <li>menu</li>
          <li>reservations</li>
          <li>order online</li>
          <li>login</li>
        </ul>
      </nav>

      <header className='header'>
        <div>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>

        <img src='assets/restauranfood.jpg' />
      </header>

      <section>
        <div>
          <h1>This weeks specials</h1>
          <button>Online Menu</button>
        </div>

        <div className='cards'>
          <div className='card'>
            <img src='assets/bruchetta.svg' />

            <div>
              <h3>Bruchetta</h3>

              <p>made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
            </div>
          </div>
          <div className='card'>
            <img src='assets/greeksalad.jpg' />
            <div>
              <h3>Greek Salad</h3>
              <p>famous greek salad of crispy lettuce, peppers, olives, and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
            </div>
          </div>
          <div className='card'>
            <img src='assets/lemondessert.jpg' />
            <div>
              <h3>Lemon Dessert</h3>
              <p>comes straight from grandma's recipe book. every last ingredient has been sourced and is as authentic as imagined</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
