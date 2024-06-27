import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '../../../public/arrow.svg';
import burger from '../../../public/burger.svg';
import Arrow from '@/components/icons/Arrow';

export default function Header() {
	return (
		<header className="flex w-full justify-between px-4 py-6 md:px-0">
			<Link href="/" className="relative h-10 w-[180px]">
				<Logo />
			</Link>
			<div className="flex items-center gap-2">
				<Button className="hidden lg:flex">Создать Счет</Button>
				<Button className="hidden lg:flex">Корзина</Button>
				<div className="box-border flex rounded-[18px] border border-prime-bord px-4 py-1.5">
					<Avatar size="xs" />
					<Button
						isIcon
						variant="ghost"
						className="size-6 px-[5px] py-2"
					>
						<Arrow className="fill-primary-txt" />
					</Button>
				</div>
				<Button variant="ghost" className="relative size-10 p-2">
					<Image src={burger} alt="burger" />
				</Button>
			</div>
		</header>
	);
}
