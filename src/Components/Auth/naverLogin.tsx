import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Cookies, withCookies } from 'react-cookie';

const NaverUtils = () => {};
const CLIENT_ID;
const STATE;
const REDIRECT_URI;
const NaverAuthRoot = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

const naverLogin = () => {};

export default naverLogin;
