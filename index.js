import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';
import FillerText from './components/FillerText';

ReactDOM.render(
  (
    <div>
      <FillerText />
      <Webpage />
      <RegistrationForm />


    </div>
  ),
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
