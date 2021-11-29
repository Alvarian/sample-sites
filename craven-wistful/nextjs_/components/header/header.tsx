import { keyframes } from '@emotion/core'
import { Link } from 'react-scroll'
import Logo from 'components/logo'
import LogoDark from 'assets/logo.svg'
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data'


export default function Header({ className }) {
	return (
		<header >
			
		</header>
	)
}

const positionAnim = keyframes`
	from {
		position: fixed;
		opacity: 1;
	}

	to {
		position: absolute;
		opacity: 1;
		transition: all 0.4s ease;
	}
`;