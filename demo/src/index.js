'use strict';

// default css
require('normalize.css/normalize.css')
require('./vendor/skeleton.css');
require('./vendor/github.css');

// syntax highlighting
require('./vendor/syntax.css');
require('./vendor/rainbow-custom.min.js');

// custom css
require('./css/style.scss');

/*==========  APP  ==========*/

var React         = require('react'),
    InputPassword = require('../../src/js/react-password-field');

React.render(
  <form>
    <fieldset>
      <label for="password1">Password</label>
      <InputPassword
        id="password1"
        name="password1"
        placeholder="Try me out!  Enter a random password."
        minScore={2}
        minLength={40}
      />
    </fieldset>
  </form>
, document.getElementById('content'));