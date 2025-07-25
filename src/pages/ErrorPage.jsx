import React from 'react';
import NavBar from '../components/NavBar';

function ErrorPage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1> {/* Changed this line */}
        <p>We couldn't find the page you were looking for, or there was an unexpected error.</p>
        <p>
          <a href="/">Go to Home</a>
        </p>
      </main>
    </div>
  );
}

export default ErrorPage;