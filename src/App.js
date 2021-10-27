import './App.css';
import React, { useState } from 'react';
import { passwordStrength } from 'check-password-strength';
import { 
	ExpandMore as ExpandMoreIcon, 
	ExpandMoreSelected as ExpandMoreSelectedIcon, 
	Refresh as RefreshIcon, 
	Copy as CopyIcon 
} from './components/Icons';

function makeString(length, includeNumbers, includeSymbols) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	if (includeNumbers) {
		characters += '0123456789';
	}
	if (includeSymbols) {
		characters += '#$%&!*-_?<>';
	}
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function copyToClipBoard(password) {
	navigator.clipboard.writeText(password);
}

function calculatePasswordStrength(password) {
	const result = passwordStrength(password);
	switch (result.value) {
		case 'Too weak':
			return {
				...result,
				amount: 5,
				color: '#991900',
				leftoverColor: '#540e00'
			}
		case 'Weak':
			return {
				...result,
				amount: 40,
				color: '#ed4039',
				leftoverColor: '#a62924'
			}
		case 'Medium':
			return {
				...result,
				amount: 60,
				color: '#e89d10',
				leftoverColor: '#996b00'
			}
		case 'Strong':
			return {
				...result,
				amount: 100,
				color: '#108f07',
				leftoverColor: '#0a5e04'
			}
		default:
			return {
				...result,
				amount: 5,
				color: '#991900',
				leftoverColor: '#540e00'
			}
	}
}

const createPassword = (passLength, incNumbers, incSymbols) => {
	console.log(				passLength === '' ? 0 : 
	parseInt(passLength), 
	passLength,
incNumbers, 
incSymbols)
	return makeString(
			passLength === '' ? 0 : 
				parseInt(passLength), 
			incNumbers, 
			incSymbols
		)
	
}

function App() {
	const [filtersOpen, setFiltersOpen] = useState(true);
	const [copyTooltipOpen, setCopyTooltipOpen] = useState(false);
	const [passwordLength, setPasswordLength] = useState('16');
	const [includeNumbers, setIncludeNumbers] = useState(true);
	const [includeSymbols, setIncludeSymbols] = useState(true);
	const [password, setPassword] = useState(makeString(passwordLength, includeNumbers, includeSymbols));
	const strength = calculatePasswordStrength(password);

	

	console.log(copyTooltipOpen, strength.value)
    return (
        <div className="root">
			<div className="main-blue">
				<div className="main">
					<img src="/img/logo.png" alt="" className="logo-img"/>
					<div className="card">
						<div className="text-center">
							<h1>Generate a secure password</h1>
							<p>Online password generator</p>
						</div>
						<div className="password">
							<div className="password-input flex space-between align-center">
								<input placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
								<div className="password-input-icons flex">
									<RefreshIcon onClick={(e) => createPassword(passwordLength, includeNumbers, includeSymbols)} />
									<CopyIcon onClick={(e) => {
										copyToClipBoard(password);
										setCopyTooltipOpen(true);
										setTimeout(() => {
											setCopyTooltipOpen(false);
										}, 3000)
									}} />
								</div>
								{ copyTooltipOpen && <div className="tooltip">
									<div className="copy">
										Copied!
									</div>
								</div> }
							</div>
							<div className="password-input-border">
								<div className="strength-border-amount" style={{
									width: `${strength.amount}%`,
									backgroundColor: strength.color
								}}></div>
								<div className="strength-border-leftover" style={{
									width: `${100 - strength.amount}%`,
									backgroundColor: strength.leftoverColor
								}}></div>
							</div>
						</div>
						<div className="filter-btn-border-wrap" onClick={(e) => {
							setFiltersOpen(!filtersOpen);
						}}>
							<div className={`filter-btn flex space-between align-center ${filtersOpen ? 'filters-btn-selected' : 'filters-btn-unselected'}`}>
								<div>
									Filters
								</div>
								{filtersOpen ? <ExpandMoreSelectedIcon /> : <ExpandMoreIcon />}
							</div>
						</div>
						{ filtersOpen && <div className="filters flex align-center">
							<div className="length-filter">
								<div className="length-filter-label">Password length</div>
								<div className="length-filter-input-border-wrap">
									<input className="length-filter-input" value={passwordLength} onChange={(e) => {
										if (e.target.value.length > 3) {
											alert('Cannot exceed more than 3 digits')
										} else {
											setPassword(createPassword(e.target.value, includeNumbers, includeSymbols))
											setPasswordLength(e.target.value);
										}
									}} />
								</div>
							</div>
							<div className="checkbox-container align-center" onClick={(e) => {
								setPassword(createPassword(passwordLength, !includeNumbers, includeSymbols));
								setIncludeNumbers(!includeNumbers);
							}}>
								<div className={`${!includeNumbers ? 'checkbox-unselected' : 'checkbox'}`}></div><span>Include numbers</span>
							</div>
							<div className="checkbox-container align-center" onClick={(e) => {
								setPassword(createPassword(passwordLength, includeNumbers, !includeSymbols));
								setIncludeSymbols(!includeSymbols);
							}}>
								<div className={`${!includeSymbols ? 'checkbox-unselected' : 'checkbox'}`}></div><span>Include symbols</span>
							</div>
						</div> }
					</div>
				</div>
			</div>
			<div className="main-white">
				<div className="main strong-passwords">
					<h2>Make strong passwords</h2>
					<ul>
						<li>Do not use the same password for multiple websites.</li>
						<li>Passwords should be at least 8 characters.</li>
						<li>Passwords should contain at least: 1 uppercase letter, 1 lowercase letter, 1 symbol and 1 number.</li>
						<li>Avoid passwords that contain identifiable information such as names and birthdays.</li>
					</ul>
				</div>
			</div>
        </div>
    );
}

export default App;
