import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ac43c9d5b561ca5d5bca6c09f6320901 - api key
// https://api.themoviedb.org/3/movie/550?api_key=ac43c9d5b561ca5d5bca6c09f6320901- api
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzQzYzlkNWI1NjFjYTVkNWJjYTZjMDlmNjMyMDkwMSIsInN1YiI6IjY0MzNhNGQ1ZTkyZDgzMDBmNDZkNTBmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bnxKuzojvJuQihfJY3Dg3L-NU_y0Fr_H_OEf1vXx8t4 - api read access token

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

