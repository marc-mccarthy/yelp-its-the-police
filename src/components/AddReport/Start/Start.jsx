import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Checkbox } from '@mui/material';
import { useEffect } from 'react';



function Start() {

  const [anonymous, setAnonymous] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    console.log(first, last, email, phone);
  }, [first, last, email, phone]);

  const handleAnonymous = (e) => {
    setAnonymous(!anonymous);
    setFirst('');
    setLast('');
    setEmail('');
    setPhone('');
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleFirst = (e) => {
    setFirst(e.target.value);
  }

  const handleLast = (e) => {
    setLast(e.target.value);
  }

  const handlePhone = (e) => {
    setPhone(e.target.value);
  }

  return (
    <div className='report'>

      <h2 className='report-form'>Report Form</h2>

      <div className='report-content'>

        <h3>Accessibility</h3>
        <p>If you need help completing this form, please email dale.lotts@gmail.com</p>

        <h3>Anonymous</h3>
        <p><Checkbox onChange={handleAnonymous} /> Check this box if you want your report to be filled anonymously</p>

        {
          anonymous ?
            <> </>
            :
            <span>
              <p>First name:</p>
              <input className='report-input' onChange={handleFirst} />

              <p>Last name:</p>
              <input className='report-input' onChange={handleLast} />

              <p>Email:</p>
              <input className='report-input' onChange={handleEmail} />

              <p>Phone number:</p>
              <input className='report-input' onChange={handlePhone} />
            </span>
        }

        <h3>Public</h3>
        <p><Checkbox /> Check this box if you want your report to be public</p>

        <h3>Verification</h3>
        <p><Checkbox /> Check this box signifying you are NOT submitting this form on behalf of someone else</p>

        <h3>How we handle your information</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p><Checkbox /> I understand</p>

        <Button className='report-button'>NEXT</Button>

      </div>

    </div>
  );
}

export default Start;
