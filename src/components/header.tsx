const Header: React.FC<HeaderProps> = ({count}) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {count} Cats in this Cat App
		</h2>
	</header>
);


interface HeaderProps{
    count: number;    
}

export default Header;
