import	{	useState	}	from	'react'
import	bcrypt	from	'bcryptjs';
import	md5	from	'blueimp-md5'
import	reactLogo	from	'./assets/react.svg'
import	moon	from	'./assets/moon.svg'
import	'./App.css'

function	App()	{
 const  [page,	setPage]	=	useState(3)
 const	[pageStatus,	setPageStatus]	=	useState(1)
 const	[data,	setData]	=	useState([0,	0,	0,	true,	false])
 const	[userData,	setUserData]	=	useState(["",	"",	"",	""])
 const	[userDataSignIn,	setUserDataSignIn]	=	useState(["",	""])
 const	[userDataReset,	setUserDataReset]	=	useState(["",	""])
 const	[userDataResetPassword,	setUserDataResetPassword]	=	useState([1,	1,	0])
 const	[userDataResetAllow,	setUserDataResetAllow]	=	useState([0,	0])
 const	[userDataSignInAllow,	setUserDataSignInAllow]	=	useState([0,	0])
 const	[userDataSignInAllowServer,	setUserDataSignInAllowServer]	=	useState([0,	0])
 const	[userDataResetAllowServer,	setUserDataResetAllowServer]	=	useState([0,	0])
 const	[userDataIsAllow,	setUserDataAllow]	=	useState([0,	0,	0,	0])
 const	[passwordContentData,	setPasswordContentData]	=	useState([1,	1,	0]);
 const	[dataAllowServer,	setDataAllowServer]	=	useState([0,	0])

 function	changeBackground(id:	number)	{
  document.documentElement.style.setProperty("--backGroundCustomImg",	`url("/background_0${id}.jpg")`)
 }
 //	Я	писал	этот	код	в	4	часа	утра..
 function	checkValidInput(id:	number,	data:	string,	type:	number)	{
  if	(type	==	0)	{
   const	newDataAllow	=	[...userDataIsAllow];
   const	newData	=	[...userData];
   const	newPasswordData	=	[...passwordContentData];
   const	newNewBllaaaaatDataPlsKillMeServerData	=	[...dataAllowServer]
   newData[id]	=	data;


   if	(id	==	0	&&	data.length	>=	3	&&	data.length	<=	10)	{
    newDataAllow[id]	=	1;
   }	else	if	(id	==	0	&&	data.length	>=	10)	{
    newDataAllow[id]	=	2;
   }	else	if	(id	==	0)	{
    newDataAllow[id]	=	0;
   }

   if	(id	==	1	&&	/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)	&&	data.length	>=	10	&&	data.length	<=	33)	{
    newNewBllaaaaatDataPlsKillMeServerData[0]	=	0;
    setDataAllowServer(newNewBllaaaaatDataPlsKillMeServerData);
    newDataAllow[id]	=	1;
   }	else	if	(id	==	1)	{
    newNewBllaaaaatDataPlsKillMeServerData[0]	=	0;
    setDataAllowServer(newNewBllaaaaatDataPlsKillMeServerData);
    newDataAllow[id]	=	0;
   }

   if	(id	==	2	&&	/[a-zA-Z0-9._%+-]/.test(data)	&&	data.length	>=	8	&&	data.length	<=	25	&&	data.match(/-?\d+/g)?.[0].length	>=	3	&&	data.match(/[a-zA-Z]/g)?.length	>=	5)	{
    newPasswordData[0]	=	0;
    newPasswordData[1]	=	0;
    newPasswordData[2]	=	0;
    newDataAllow[id]	=	1;
    if	(data	==	userData[3])	{
     newDataAllow[3]	=	1;
    }	else	{
     newDataAllow[3]	=	0;
    }
   }	else	if	(id	==	2)	{
    if	(data	==	userData[3])	{
     newDataAllow[3]	=	1;
    }	else	{
     newDataAllow[3]	=	0;
    }
    if	(data.match(/-?\d+/g)?.[0].length	<	3)	{
     newPasswordData[0]	=	1;
    }	else	if	(data.match(/-?\d+/g)?.[0].length	>=	3)	{
     newPasswordData[0]	=	0;
    }
    if	(data.match(/[a-zA-Z]/g)?.length	<	5)	{
     newPasswordData[1]	=	1;
    }	else	if	(data.match(/[a-zA-Z]/g)?.length	>=	5)	{
     newPasswordData[1]	=	0;
    }
    if	(data.length	<	8)	{
     newPasswordData[2]	=	1;
    }	else	if	(data.length	>=	25)	{
     newPasswordData[2]	=	2;
    }	else	if	(data.length	<=	25)	{
     newPasswordData[2]	=	0;
    }
    newDataAllow[id]	=	0;
   }

   if	(id	==	3	&&	data	==	userData[2])	{
    newDataAllow[id]	=	1;
   }	else	if	(id	==	3)	{
    newDataAllow[id]	=	0;
   }


   setUserData(newData);
   setUserDataAllow(newDataAllow);
   setPasswordContentData(newPasswordData);
  }	else	if	(type	==	1)	{
   const	SignInData	=	[...userDataSignIn];
   const	SignInDataAllow	=	[...userDataSignInAllow]
   const	SignInDataAllowServer	=	[...userDataSignInAllowServer]
   SignInData[id]	=	data;


   setUserDataSignInAllow(SignInDataAllow);
   setUserDataSignIn(SignInData);
   setUserDataSignInAllowServer(SignInDataAllowServer);
  }	else	if	(type	==	2)	{
   const	resetData	=	[...userDataReset];
   const	resetDataPassword	=	[...userDataResetPassword];
   const	resetDataAllow	=	[...userDataResetAllow];
   resetData[id]	=	data;

   if	(id	==	2	&&	/[a-zA-Z0-9._%+-]/.test(data)	&&	data.length	>=	8	&&	data.length	<=	25	&&	data.match(/-?\d+/g)?.[0].length	>=	3	&&	data.match(/[a-zA-Z]/g)?.length	>=	5)	{
    resetDataPassword[0]	=	0;
    resetDataPassword[1]	=	0;
    resetDataPassword[2]	=	0;
    resetDataAllow[id]	=	1;
    if	(data	==	userData[3])	{
     resetDataAllow[3]	=	1;
    }	else	{
     resetDataAllow[3]	=	0;
    }
   }	else	if	(id	==	1)	{
    if	(data	==	userData[3])	{
     resetDataAllow[2]	=	1;
    }	else	{
     resetDataAllow[2]	=	0;
    }
    if	(data.match(/-?\d+/g)?.[0].length	<	3)	{
     resetDataPassword[0]	=	1;
    }	else	if	(data.match(/-?\d+/g)?.[0].length	>=	3)	{
     resetDataPassword[0]	=	0;
    }
    if	(data.match(/[a-zA-Z]/g)?.length	<	5)	{
     resetDataPassword[1]	=	1;
    }	else	if	(data.match(/[a-zA-Z]/g)?.length	>=	5)	{
     resetDataPassword[1]	=	0;
    }
    if	(data.length	<	8)	{
     resetDataPassword[2]	=	1;
    }	else	if	(data.length	>=	25)	{
     resetDataPassword[2]	=	2;
    }	else	if	(data.length	<=	25)	{
     resetDataPassword[2]	=	0;
    }
    resetDataAllow[id]	=	0;
   }
   if	(id	==	2	&&	data	==	resetData[1])	{
    resetDataAllow[id]	=	1;
   }	else	if	(id	==	2)	{
    resetDataAllow[id]	=	0;
   }

   setUserDataReset(resetData)
   setUserDataResetAllow(resetDataAllow)
   setUserDataResetPassword(resetDataPassword)
  }
 }

 function	registration(userInfo:	string[])	{
  if	((userInfo[0].length	>=	3	&&	userInfo[0].length	<=	10)	&&
   (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userInfo[1])	&&	userInfo[1].length	>=	10	&&	userInfo[1].length	<=	33)	&&
   (/[a-zA-Z0-9._%+-]/.test(userInfo[2])	&&	userInfo[2].length	>=	8	&&	userInfo[2].length	<=	25	&&	userInfo[2].match(/-?\d+/g)?.[0].length	>=	3	&&	userInfo[2].match(/[a-zA-Z]/g)?.length	>=	5)	&&
   (userInfo[2]	==	userInfo[3]))	{
   sendRegistrationData(userInfo)
  }
 }

 function	hashPassword(userInfo:	string)	{
  return	md5(userInfo);
 }

 function	sendRegistrationData(userInfo:	string[])	{
  //	Тут	может	быть	добавлена	отправка	на	сервер

  //	Но	тут	вместо	сервера	будет	localStorage
  if	(localStorage.getItem("login")	==	null)	{
   localStorage.setItem("login",	JSON.stringify({	login:	[userInfo[1]],	passwordHash:	[hashPassword(userInfo[2])]	}))
   setPageStatus(1);
   setPage(3);
  }	else	{
   const	newNewNewNewNewNewNewNEWAllowserverda lat	=	[...dataAllowServer];
   const	tempLogin:	string[]	=	JSON.parse(localStorage.getItem("login"));
   let	isDuplicate	=	false;
   //	Пытался	пофиксить	этот	баг	2	часа..
   tempLogin.login.forEach(el	=>	{
    if	(!isDuplicate)	{
     if	(userData[1]	==	el)	{
      newNewNewNewNewNewNewNEWAllowserverda lat[0]	=	1;
      isDuplicate	=	true;
     }
    }
   })
   if	(!isDuplicate)	{
    tempLogin.login.push(userInfo[1]);
    tempLogin.passwordHash.push(hashPassword(userInfo[2]));
    localStorage.setItem("login",	JSON.stringify(tempLogin))
    newNewNewNewNewNewNewNEWAllowserverda lat[0]	=	0;
    setPageStatus(1);
    setPage(3);
   }
   setDataAllowServer(newNewNewNewNewNewNewNEWAllowserverda lat);
  }
 }

 function	logIn(userInfo:	string[])	{
  const	SignInDataAllowServer	=	[...userDataSignInAllowServer]
  let	isFinal	=	false;
  if	((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userInfo[0])	&&	userInfo[0].length	>=	10	&&	userInfo[0].length	<=	33)	&&
   ((/[a-zA-Z0-9._%+-]/.test(userInfo[1])	&&	userInfo[1].length	>=	8	&&	userInfo[1].length	<=	25	&&	userInfo[1].match(/-?\d+/g)?.[0].length	>=	3	&&	userInfo[1].match(/[a-zA-Z]/g)?.length	>=	5)))	{
   const	tempLogin:	string[]	=	JSON.parse(localStorage.getItem("login"));
   tempLogin.login.forEach((el,	index)	=>	{
    if	(!isFinal)	{
     if	(userInfo[0]	==	el)	{
      if	(tempLogin.passwordHash[index]	==	hashPassword(userInfo[1]))	{
       isFinal	=	true;
       SignInDataAllowServer[0]	=	0;
       setPageStatus(2);
       setPage(3);
      }
     }
    }
   })
  }
  if	(!isFinal)	SignInDataAllowServer[0]	=	1;
  setUserDataSignInAllowServer(SignInDataAllowServer);
 }

 function	resetPassword(userInfo:	string[])	{
  const	resetDataAllowServer	=	[...userDataResetAllowServer]
  let	isFinal	=	false;
  if	((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userInfo[0])	&&	userInfo[0].length	>=	10	&&	userInfo[0].length	<=	33)	&&
   ((/[a-zA-Z0-9._%+-]/.test(userInfo[1])	&&	userInfo[1].length	>=	8	&&	userInfo[1].length	<=	25	&&	userInfo[1].match(/-?\d+/g)?.[0].length	>=	3	&&	userInfo[1].match(/[a-zA-Z]/g)?.length	>=	5))	&&
   (userData[1]	==	userData[2]))	{
   const	tempLogin:	string[]	=	JSON.parse(localStorage.getItem("login"));
   tempLogin.login.forEach((el,	index)	=>	{
    if	(!isFinal)	{
     if	(userInfo[0]	==	el)	{
       isFinal	=	true;
       tempLogin.passwordHash[index]	=	userInfo[1];
       resetDataAllowServer[0]	=	0;
       setPageStatus(2);
       setPage(3);
     }
    }
   })
  }
  if	(!isFinal)	resetDataAllowServer[0]	=	1;
  setUserDataResetAllowServer(resetDataAllowServer);
 }

 return	(
  <>
   <div	className="head">

    <img	onClick={()	=>	{	changeBackground(data[0]);	if	(data[0]!	<	4)	data[0]++;	else	data[0]	=	0	}}	src={moon}	className="moon"	/>
   </div>
   <div	className="content">
    <button	className={page	!==	3	?	"close-btn"	:	"dNone"}	onClick={()	=>	setPage(3)}>✖</button>
    <div	className={page	==	0	?	"registration"	:	"dNone"}>
     <h2>Sign	Up</h2>
     <div	style={{	padding:	15	}}></div>
     <p>User	name</p>
     <input	type="text"	onChange={(el)	=>	checkValidInput(0,	el.target.value,	0)}	value={userData[0]}	placeholder="Alex"	/>
     <h6	style={{	color:	"red"	}}>{!data[3]	?	userDataIsAllow[0]	==	0	?	"Name	length	from	3	to	10	characters."	:	userDataIsAllow[0]	==	2	?	"Name	length	from	3	to	15	characters."	:	""	:	""}</h6>
     <p>User	Email</p>
     <input	type="email"	onChange={(el)	=>	checkValidInput(1,	el.target.value,	0)}	value={userData[1]}	placeholder="alex@github.com"	/>
     <h6	style={{	color:	"red"	}}>{!data[3]	?	userDataIsAllow[1]	==	0	?	"Incorrectly	entered	Email."	:	userDataIsAllow[1]	==	2	?	"Incorrectly	entered	Email."	:	dataAllowServer[0]	==	1	?	"This	e-mail	address	has	already	been	registered.	Please	use	a	different	e-mail	address."	:	""	:	""}</h6>
     <p>Password</p>
     <input	type="password"	onChange={(el)	=>	checkValidInput(2,	el.target.value,	0)}	value={userData[2]}	placeholder="Password"	/>
     <h6	style={{	color:	"red"	}}>{!data[3]	?	userDataIsAllow[2]	==	0	?	"Password	must	have:"	:	userDataIsAllow[2]	==	2	?	"lol"	:	""	:	""}</h6>
     <h6	className={!data[3]	?	passwordContentData[0]	==	1	?	"passwordItemErrors"	:	"dNone"	:	"dNone"}>3	or	more	numbers.</h6>
     <h6	className={!data[3]	?	passwordContentData[1]	==	1	?	"passwordItemErrors"	:	"dNone"	:	"dNone"}>5	or	more	characters.</h6>
     <h6	className={!data[3]	?	passwordContentData[2]	==	2	?	"passwordItemErrors"	:	"dNone"	:	"dNone"}>Must	not	exceed	25	characters.</h6>
     <p>Confirm	password</p>
     <input	type="password"	onChange={(el)	=>	checkValidInput(3,	el.target.value,	0)}	value={userData[3]}	placeholder="Password	confirm."	/>
     <h6	style={{	color:	"red"	}}>{!data[3]	?	userDataIsAllow[3]	==	0	?	"Password	mismatch."	:	userDataIsAllow[3]	==	2	?	"Ты	нашел	баг	:3	Напиши	под	репом	данного	сайта,	и	я	тебе	куплю	один	кофе	^w^	(Акция	ограничена	до	5	человек)"	:	""	:	""}</h6>
     <div	style={{	padding:	10	}}></div>
     <button	onClick={()	=>	{	registration(userData);	const	newNewNewNewAAAData	=	[...data];	newNewNewNewAAAData[3]	=	false;	setData(newNewNewNewAAAData)	}}>Registration</button>
     <div	style={{	padding:	10	}}></div>
     <h6>Have	an	account?	<button	onClick={()	=>	setPage(1)}>Sign	In</button></h6>
    </div>
    <div	className={page	==	1	?	"authorization"	:	"dNone"}>
     <h2>Sign	In</h2>
     <p>User	Email</p>
     <input	type="email"	onChange={(el)	=>	checkValidInput(0,	el.target.value,	1)}	value={userDataSignIn[0]}	placeholder="alex@github.com"	/>
     <p>Password</p>
     <input	type="password"	onChange={(el)	=>	checkValidInput(1,	el.target.value,	1)}	value={userDataSignIn[1]}	placeholder="Password"	/>
     <div	style={{	padding:	10	}}></div>
     <button	onClick={()	=>	{	logIn(userDataSignIn)	}}>Log	In</button>
     <h6	style={{	color:	"red"	}}>{userDataSignInAllowServer[0]	?	"Username/password	is	incorrect."	:	""}</h6>
     <div	style={{	padding:	10	}}></div>
     <h5>Нет	аккаунта?	<button	onClick={()	=>	setPage(0)}>Sign	Up</button></h5>
     <div	style={{	padding:	1	}}></div>
     {/*	<h6>Забыли	пароль?	<a	style={{	cursor:	"pointer"	}}	onClick={()	=>	setPage(2)}>Reset	password</a></h6>	*/}
    </div>
    <div	className={page	==	2	?	"passwordReset"	:	"dNone"}>
     {/*	Время	6	часов	утра..	меня	не	хватит	на	полноценную	логику.	Сразу	говорю,	что	код	полная	хуйня	:3	(P.s.	Особенно	этот)	*/}
     {/*		|	*/}
     {/*		|	*/}
     {/*	\|/	*/}


     {/*	<Эта	хуйня	не	работает(((>	*/}


     <h2>Reset	password</h2>
     <p>User	Email</p>
     <input	type="email"	onChange={(el)	=>	checkValidInput(0,	el.target.value,	2)}	value={userDataReset[0]}	placeholder="alex@github.com"	/>
     <p>New	password</p>
     <input	type="password"	onChange={(el)	=>	checkValidInput(1,	el.target.value,	2)}	value={userDataReset[1]}	placeholder="Password"	/>
     <h6	style={{	color:	"red"	}}>{!data[4]	?	(userDataResetPassword[0]	==	1	||	userDataResetPassword[1]	==	1)	?	"Password	must	have:"	:	userDataResetAllow[1]	==	2	?	"lol"	:	""	:	""}</h6>
     <h6	className={!data[4]	?	userDataResetPassword[0]	==	1	?	"passwordItemErrors"	:	"dNone"	:	"dNone"}>3	or	more	numbers.</h6>
     <h6	className={!data[4]	?	userDataResetPassword[1]	==	1	?	"passwordItemErrors"	:	"dNone"	:	"dNone"}>5	or	more	characters.</h6>
     <h6	className={!data[4]	?	userDataResetPassword[2]	==	2	?	"passwordItemErrors"	:	"dNone"	:	"dNone"}>Must	not	exceed	25	characters.</h6>
     <p>Confirm	password</p>
     <input	type="password"	onChange={(el)	=>	checkValidInput(2,	el.target.value,	2)}	value={userDataReset[2]}	placeholder="Password	confirm."	/>
     <h6	style={{	color:	"red"	}}>{!data[4]	?	userDataResetAllow[2]	==	0	?	"Password	mismatch."	:	userDataResetAllow[2]	==	2	?	"Ты	нашел	баг	:3	Напиши	под	репом	данного	сайта,	и	я	тебе	куплю	один	кофе	^w^	(Акция	ограничена	до	5	человек)"	:	""	:	""}</h6>
     <div	style={{	padding:	10	}}></div>
     <button	onClick={()	=>	{	resetPassword(userDataReset)	}}>Reset	password</button>


     {/*	</Эта	хуйня	не	работает(((>	*/}



    </div>
    <div	className={page	==	3	?	"main"	:	"dNone"}>
     <h2>Hello</h2>
     <h4><b>Hi!</b><br/>
     This	site	was	built	in	just	over	<b>half	an	hour</b>.	<br/>Please	don't	go	nuclear	over	the	crappy	code	written	by	the	author	of	this	so-called	<strong>"masterpiece."</strong><br/>All	source	files	can	be	found	on	<a	href="https://github.com/Alex9600t/React-authorization">GitHub</a><p><br/>(Technologies:	ReactTS	+	Vite)</p></h4>
     <div	style={{	padding:	10	}}></div>
     <div	className={pageStatus	!==	0	?	"result"	:	"dNone"}>
      <h2>{pageStatus	==	2	?	"You	have	successfully	logged	in."	:	pageStatus	==	1	?	"Registration	went	well."	:	""}</h2>
     </div>
     <div	style={{	padding:	10	}}></div>
     <div>
      <button	onClick={()	=>	{	setPage(0);	setPageStatus(0)	}}>Sign	Up</button>
      <div	style={{	padding:	10	}}></div>
      <button	onClick={()	=>	{	setPage(1);	setPageStatus(0)	}}>Sign	In</button>
     </div>
    </div>
   </div>
  </>
 )
}

export	default	App
