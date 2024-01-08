const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
	question.innerHTML = 'Yay!!! See you on this weekend.';
  gif.src = 'https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif';
  Email.send({
		Host: 'smtp.elasticemail.com',
		Username: 'biswanathsharma1998@gmail.com',
		Password: '00892F308C83725415E281598965ABEC4D53',
		To: 'biswanathsharma1998@gmail.com',
		From: 'biswanathsharma1998@gmail.com',
		Subject: 'She said Yes',
		Body: 'Get your condom and get ready to fuck her!!!!',
  }).then((message) => alert(message));
});

noBtn.addEventListener('click', () => {
	const noBtnReact = noBtn.getBoundingClientRect();
	const maxX = window.innerWidth - noBtnReact.width;
	const maxY = window.innerHeight - noBtnReact.height;

	const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  console.log('X: ', randomX, ' Y: ', randomY);

	noBtn.style.left = randomX + 'px';
	noBtn.style.top = randomY + 'px';
});
